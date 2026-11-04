#!/usr/bin/env bash
# check-project-urls.sh — verify every URL in src/projects.ts is publicly reachable.
#
# Usage:
#   bash scripts/check-project-urls.sh
#
# Performs an UNAUTHENTICATED probe (curl -I, no credentials, no tokens) of
# every https:// URL found in src/projects.ts, exactly as a logged-out
# visitor would see it:
#   - 200          -> OK
#   - 301/302/308  -> shows the final redirect target (followed without auth)
#   - 403/404      -> FAIL: the repo is private or deleted; a public portal
#                     must not link it (fix the entry or make the repo public)
#
# Exit code: 0 if every URL returned 200 (after redirects), 1 otherwise.
# Run this before committing any change to src/projects.ts.

set -u

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/src/projects.ts"

if [ ! -f "$SRC" ]; then
        echo "error: $SRC not found" >&2
        exit 2
fi

urls=$(grep -oE 'https://[A-Za-z0-9./_-]+' "$SRC" | sort -u)
if [ -z "$urls" ]; then
        echo "error: no URLs found in $SRC" >&2
        exit 2
fi

fail=0
total=0
while IFS= read -r u; do
        total=$((total + 1))
        code=$(curl -s -o /dev/null -w '%{http_code}' -I "$u" --max-time 15)
        case "$code" in
                200)
                        echo "OK   200  $u"
                        ;;
                301|302|307|308)
                        final=$(curl -s -o /dev/null -w '%{url_effective} %{http_code}' -L "$u" --max-time 20)
                        echo "REDIR $code  $u -> $final"
                        case "$final" in
                                *" 200") : ;;
                                *) fail=1 ;;
                        esac
                        ;;
                000)
                        echo "ERR  timeout/network  $u"
                        fail=1
                        ;;
                *)
                        echo "FAIL $code  $u"
                        fail=1
                        ;;
        esac
done <<< "$urls"

echo "----"
if [ "$fail" -eq 0 ]; then
        echo "PASS: all $total URLs publicly reachable (200)."
else
        echo "FAIL: at least one URL is not publicly reachable — see FAIL/REDIR lines above."
fi
exit "$fail"
