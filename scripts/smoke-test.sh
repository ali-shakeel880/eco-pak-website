#!/usr/bin/env bash
# Post-deploy smoke test against the live site. Usage: scripts/smoke-test.sh [base_url]
# Catches broken deploys, redirect loops (e.g. hPanel www setting vs .htaccess)
# and soft-404 regressions.
set -uo pipefail
BASE="${1:-https://ecopakservices.com}"
HOST="${BASE#https://}"
fail=0

check() { # url expected_status [must_contain]
  local url=$1 want=$2 needle=${3:-} code body
  body=$(curl -sS --max-time 30 --max-redirs 0 -o /tmp/smoke_body -w '%{http_code}' "$url") || body=000
  code=$body
  if [[ "$code" != "$want" ]]; then
    echo "✗ $url → $code (expected $want)"; fail=1; return
  fi
  if [[ -n "$needle" ]] && ! grep -q "$needle" /tmp/smoke_body; then
    echo "✗ $url → $code but missing \"$needle\". First lines received:"
    head -c 600 /tmp/smoke_body | sed 's/^/      | /'; echo
    fail=1; return
  fi
  echo "✓ $url → $code"
}

check_redirect() { # url expected_location
  local url=$1 want=$2 loc
  loc=$(curl -sS --max-time 30 -o /dev/null -w '%{http_code} %{redirect_url}' "$url")
  if [[ "$loc" == "301 $want" ]]; then echo "✓ $url → 301 $want"; else echo "✗ $url → $loc (expected 301 $want)"; fail=1; fi
}

check "$BASE/" 200 '<link rel="canonical" href="https://ecopakservices.com/"'
check "$BASE/services/environmental-laboratory" 200 'application/ld+json'
check "$BASE/services/water-wastewater-testing" 200 '<h1'
check "$BASE/contact" 200 '<title>Contact Eco Pak Services'
check "$BASE/sitemap.xml" 200 '<urlset'
check "$BASE/robots.txt" 200 'Sitemap: https://ecopakservices.com/sitemap.xml'
check "$BASE/this-page-should-not-exist-$RANDOM" 404 'noindex'
check_redirect "$BASE/contact/" "$BASE/contact"
check_redirect "https://www.$HOST/contact" "$BASE/contact"
check_redirect "http://$HOST/contact" "$BASE/contact"

# Redirect-loop guard: following redirects must end on a 200 within 3 hops.
final=$(curl -sS --max-time 30 -L --max-redirs 3 -o /dev/null -w '%{http_code}' "http://www.$HOST/" || echo loop)
if [[ "$final" == "200" ]]; then echo "✓ http://www.$HOST/ resolves to 200"; else echo "✗ http://www.$HOST/ → $final (redirect loop?)"; fail=1; fi

exit $fail
