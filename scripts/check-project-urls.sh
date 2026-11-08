#!/usr/bin/env bash
# check-project-urls.sh — verify every URL in src/projects.ts is publicly reachable.
#
# Usage:
#   bash scripts/check-project-urls.sh
#
# Performs an UNAUTHENTICATED probe (curl, no credentials, no tokens) of
# every https:// URL found in src/projects.ts, exactly as a logged-out
# visitor would see it. Redirects are followed and the final URL is shown
# when it differs from the original (useful for spotting renamed repos).
#
# Failure policy (CI-tolerant):
#   - FAIL (exit 1) only on an explicit 404 — the target is gone or not
#     public; a public portal must not link it (fix the entry or make the
#     repo public).
#   - WARN (still exit 0) on rate limits (429), timeouts/network errors,
#     server errors (5xx) and any other non-404 oddity, so a slow or
#     throttled upstream never turns CI red.
#
# Exit code: 0 unless at least one URL returned 404.
# Run this before committing any change to src/projects.ts.

set -u

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/src/projects.ts"
UA="Mozilla/5.0 (compatible; SamuelPortal-link-check/1.0)"
SLEEP_BETWEEN=1

if [ ! -f "$SRC" ]; then
        echo "error: $SRC not found" >&2
        exit 2
fi

urls=$(grep -oE 'https://[A-Za-z0-9./_-]+' "$SRC" | sort -u)
if [ -z "$urls" ]; then
        echo "error: no URLs found in $SRC" >&2
        exit 2
fi

probe() {
        # prints "<code> <final-url>"; transient errors are retried by curl
        curl -s -o /dev/null -w '%{http_code} %{url_effective}' \
                -L -A "$UA" --max-time 25 \
                --retry 2 --retry-delay 5 --retry-all-errors \
                "$1" 2>/dev/null
}

fail=0
warn=0
total=0
while IFS= read -r u; do
        total=$((total + 1))
        result=$(probe "$u")
        code=${result%% *}
        final=${result#* }
        case "$code" in
                200)
                        if [ "$final" != "$u" ]; then
                                echo "OK   200  $u -> $final"
                        else
                                echo "OK   200  $u"
                        fi
                        ;;
                404)
                        echo "FAIL 404  $u"
                        fail=1
                        ;;
                429)
                        echo "WARN 429  $u (rate limited; tolerated)"
                        warn=$((warn + 1))
                        ;;
                000|"")
                        echo "WARN timeout/network  $u (tolerated)"
                        warn=$((warn + 1))
                        ;;
                *)
                        echo "WARN $code  $u (tolerated)"
                        warn=$((warn + 1))
                        ;;
        esac
        sleep "$SLEEP_BETWEEN"
done <<< "$urls"

echo "----"
if [ "$fail" -ne 0 ]; then
        echo "FAIL: at least one URL returned 404 — fix the entry or restore the repo."
        exit 1
fi
echo "PASS: no 404s among $total URLs ($warn warning(s) tolerated)."
exit 0
