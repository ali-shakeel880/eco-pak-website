# Eco Pak Services: SEO Programme

| # | Deliverable | Where |
|---|---|---|
| 1, 2, 7, 13, 14, 18, 19 | Technical audit, architecture report, on-page report, structured data, CWV notes, source-code changes, testing report | [01-technical-audit.md](01-technical-audit.md) |
| 3, 4, 5, 6 | Keyword map, competitor analysis, keyword-to-URL map, metadata sheet | [02-keywords-competitors.md](02-keywords-competitors.md) and `src/seo/routes.js` |
| 8, 9 | Service page content, FAQ library (36 Q&As) | `src/content/servicePages.js`, `src/content/faqs.js` |
| 10 | Six-month content calendar (30 articles) | [03-content-plan.md](03-content-plan.md) |
| 15, 16 | AI search strategy, 50-question chatbot benchmark | [04-ai-search-visibility.md](04-ai-search-visibility.md) |
| 11, 12, 20 | Local SEO, backlink strategy, six-month roadmap | [05-local-seo-backlinks-roadmap.md](05-local-seo-backlinks-roadmap.md) |
| 17 | Search Console analysis | **Blocked:** needs GSC access |

## Checklist

### ✅ Completed and verified (local build + Chromium + Apache)
- [x] Build-time prerendering: full HTML content on every URL
- [x] Unique title, description, canonical, robots, OG/Twitter tags per route
- [x] sitemap.xml (20 URLs), robots.txt, llms.txt
- [x] Real 404s; HTTPS/non-www/trailing-slash/.html canonical redirects
- [x] JSON-LD: Organization, WebSite, page types, BreadcrumbList, Service, FAQPage
- [x] Visible breadcrumbs
- [x] Static keyword H1 on homepage; one H1 on every page
- [x] NAP fixes (wrong phone and .pk email in the mobile menu)
- [x] Homepage lab card text fixed (it had the Research Institute text)
- [x] Crawlable, keyboard-accessible dropdown nav; dead `/careers` link removed
- [x] 4 new service landing pages + About knowledge page
- [x] FAQ sections on Home, About, Lab, Water, Air, Consultancy, EIA, ETP and Carbon pages
- [x] Related-service internal links; footer links to the new pages
- [x] Code splitting (−25% main JS), compression and caching headers, lazy images

### ⏳ Pending: needs access or deployment
- [ ] Merge to `main` → GitHub Actions deploys to Hostinger. **First check that hPanel's www/HTTPS setting doesn't conflict with `.htaccess` rule 1** (a conflict causes a redirect loop)
- [ ] After deploy, check the live site: `curl -I` on http/www/trailing slash/unknown URL; view-source shows content; Rich Results Test; PageSpeed (mobile + desktop)
- [ ] Google Search Console + Bing Webmaster Tools: verify, submit `sitemap.xml`, request indexing for the new pages
- [ ] GA4: provide a Measurement ID → set `VITE_GA4_ID` in the deploy workflow; mark `phone_click` / `whatsapp_click` / `email_click` as key events
- [ ] Keyword volumes/KD/CPC and competitor metrics from Keyword Planner / Ahrefs / Semrush
- [ ] First AI-chatbot benchmark run (from Pakistan)

### 🔒 Needs your approval or information
- [ ] **Verified street address** + opening hours (for GBP and LocalBusiness schema)
- [ ] **Certificates:** which ones you actually hold (EPA lab certificate + scope, PNAC, ISO). Upload scans → un-noindex `/certificates`. Remove OHSAS 18001 (withdrawn standard) and any certificates you don't hold
- [ ] **Our Team** page uses stock photos: replace with real staff, or noindex
- [ ] Reconcile years/stats: 9+ vs 11 vs 15 years; 500+ vs 1000+ projects; the "98%/85%/92%/88%" figures
- [ ] Projects/clients (World Bank, Nestlé, etc.): confirm and get permission to show them; turn them into case studies
- [ ] Footer newsletter form doesn't send anything: connect it to a real list or remove it
- [ ] Remove unused 1.3 MB PNGs; self-host client logos
- [ ] Real hero photo of the lab/team (improves LCP and trust)
- [ ] AI crawler policy (default: allow all)
- [ ] Confirm the legal name "Eco Pak Services (Pvt.) Ltd." and the social profile URLs (`src/seo/site.js`)
- [ ] Confirm whether you offer soil testing, ZDHC, ESG, cleanroom validation or RO systems (pages only if you do)

## CI/CD (GitHub Actions → Hostinger)
Workflow: `.github/workflows/deploy.yml`

| Job | Runs on | What it does |
|---|---|---|
| **Build & verify** | every push and PR | `npm ci` → `npm run build` (Vite + prerender) → `scripts/check-dist.mjs` fails the run if any sitemap page is missing, empty or lacks title/description/canonical/H1/JSON-LD |
| **Deploy to Hostinger** | push to `main` or manual "Run workflow" | uploads the *verified* `dist/` artifact over FTP (changed files only) |
| **Smoke test** | after deploy | `scripts/smoke-test.sh` checks the live site: 200s, a real 404, HTTPS/www/trailing-slash 301s, and no redirect loop |

**One-time setup (GitHub → Settings → Secrets and variables → Actions):**
- Secrets (already used before): `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` (hPanel → Files → FTP Accounts)
- Optional variable: `VITE_GA4_ID` (turns on GA4)
- Optional: Settings → Environments → `production` → add required reviewers to approve each deploy manually

Run the smoke test any time: `bash scripts/smoke-test.sh https://ecopakservices.com`
