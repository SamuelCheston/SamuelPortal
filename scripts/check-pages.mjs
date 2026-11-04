#!/usr/bin/env node
// check-pages.mjs — basic accessibility/SEO hygiene checks for the built site.
//
// Usage:
//   npm run build && node scripts/check-pages.mjs
//
// Checks every dist/**/*.html page for:
//   1. a non-empty <title>
//   2. a <meta name="description"> tag
//   3. an <html lang="..."> attribute
//   4. heading order (no skips deeper than one level, e.g. h1 -> h3)
//   5. duplicate id attributes
//   6. <img> tags without alt attributes
// and reports hreflang links if present.
//
// Exit code: 0 if all pages pass, 1 if any issue is found.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = join(import.meta.dirname, '..', 'dist');

function findHtml(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...findHtml(p));
    else if (p.endsWith('.html')) out.push(p);
  }
  return out;
}

let issues = 0;
const fail = (page, msg) => {
  issues++;
  console.log(`FAIL ${relative(dist, page)}: ${msg}`);
};

for (const page of findHtml(dist)) {
  const html = readFileSync(page, 'utf8');
  const rel = relative(dist, page);

  // 1. title
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!title || !title[1].trim()) fail(page, 'missing or empty <title>');

  // 2. meta description
  if (!/<meta\s+[^>]*name=["']description["'][^>]*>/i.test(html)) {
    fail(page, 'missing <meta name="description">');
  }

  // 3. html lang
  const htmlTag = html.match(/<html[^>]*>/i);
  if (!htmlTag || !/\blang=["'][^"']+["']/i.test(htmlTag[0])) {
    fail(page, 'missing <html lang="...">');
  } else {
    console.log(`INFO ${rel}: lang=${htmlTag[0].match(/\blang=["']([^"']+)["']/i)[1]}`);
  }

  // 4. heading order
  const headings = [...html.matchAll(/<h([1-6])[^>]*>/gi)].map((m) => Number(m[1]));
  for (let i = 1; i < headings.length; i++) {
    if (headings[i] > headings[i - 1] + 1) {
      fail(page, `heading level skip: h${headings[i - 1]} -> h${headings[i]} (occurrence ${i + 1})`);
    }
  }
  if (headings.length > 0 && headings[0] !== 1) {
    fail(page, `first heading is h${headings[0]}, expected h1`);
  }

  // 5. duplicate ids
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((m) => m[1]);
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) fail(page, `duplicate id="${id}"`);
    seen.add(id);
  }

  // 6. img without alt
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)];
  imgs.forEach((m, i) => {
    if (!/\balt=["']/i.test(m[0])) fail(page, `img #${i + 1} missing alt: ${m[0].slice(0, 80)}`);
  });

  // hreflang report
  const hreflangs = [...html.matchAll(/<link[^>]*hreflang=["']([^"']+)["'][^>]*>/gi)];
  if (hreflangs.length) console.log(`INFO ${rel}: hreflang: ${hreflangs.map((m) => m[1]).join(', ')}`);
}

console.log('----');
if (issues === 0) {
  console.log('PASS: all pages clean.');
} else {
  console.log(`FAIL: ${issues} issue(s) found.`);
  process.exit(1);
}
