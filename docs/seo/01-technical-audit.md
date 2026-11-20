# Eco Pak Services: Technical SEO Audit, Architecture Report & Change Log

_Audit date: 20 Nov 2026 · Branch: `claude/gallant-gauss-1n1oob`_

> **Limitation:** the live site (ecopakservices.com) could not be reached from the audit environment (the network policy blocks the host). Every finding below comes from the **source code and the production build**, tested locally in Chromium and in a real Apache 2.4 server running the new `.htaccess`. The live-site checks are listed in the README under "Pending". Do them right after deployment.

---

## 1. Architecture (verified from source)

| Item | Finding |
|---|---|
| Framework | **React 19.1 + Vite 6.3**. This is **not Next.js**. No Next.js Metadata API exists here. |
| Language | JavaScript (JSX), no TypeScript |
| Routing | `react-router-dom` 7.6, `BrowserRouter`, 20 static routes, no dynamic routes |
| Rendering (before) | **Client-side only (CSR).** Every URL returned the same 0.5 KB HTML shell: `<title>Eco Pak Services</title>` and an empty `<div id="root">`. |
| Rendering (after) | **Build-time static prerendering + hydration.** Every route is written to its own HTML file that contains the full page content and the route's metadata. |
| Styling | Tailwind CSS 3.4, inline `<style>` blocks for animations |
| Images | Mostly hot-linked from Unsplash, iStock, logos-world, gstatic and Wikipedia. Local: `logooo.jpeg` (27 KB) and `favicon.png` (78 KB). `mylogo.png` (488 KB) and `mylogo2.png` (883 KB) are unused but still deployed. |
| Forms | Contact form uses EmailJS (client-side). The footer newsletter form has **no backend**: it shows "Successfully subscribed" without sending anything. |
| Analytics | **None installed** (no GA4, GTM or Search Console verification tag) |
| Hosting / deploy | Hostinger (Apache). GitHub Actions on push to `main`: `npm install`, `npm run build`, then FTP upload of `dist/` |
| Sitemap / robots | **Neither existed.** Requests for them fell through to the SPA shell. |
| Structured data | None |

### SEO limitations of the original architecture
1. Crawlers that don't run JavaScript (most AI crawlers, social previews, Bing in some cases) saw an empty page on every URL.
2. All 20 URLs had the same `<title>` and no meta description, canonical or OG tags. This is a duplicate-metadata problem across the whole site.
3. Unknown URLs returned **200 with the homepage shell**, which Google treats as soft-404s.
4. The desktop service and about dropdown links were rendered **only on hover**, so they were not in the DOM.
5. There was one 440 KB JS bundle (119 KB gzipped) for every page.

---

## 2. Issues: severity, fix and status

| # | Problem | Severity | Affected URL(s) | Fix | Files | Status | Verification |
|---|---|---|---|---|---|---|---|
| 1 | CSR-only: empty HTML for crawlers | **Critical** | All | Build-time prerender (`react-dom/static`) + `hydrateRoot` | `scripts/prerender.mjs`, `src/entry-server.jsx`, `src/main.jsx`, `package.json` | ✅ Done | JS-disabled browser shows full content; no hydration errors on 22 URLs |
| 2 | Same title on every page, no description, canonical or OG | **Critical** | All | Central route metadata, injected at build and updated on client navigation | `src/seo/routes.js`, `src/seo/head.js`, `src/seo/RouteSeo.jsx` | ✅ Done | Unique title, description and canonical on every route; exactly one canonical after SPA navigation |
| 3 | No sitemap.xml | **High** | /sitemap.xml | Generated at build from route config (indexable routes only) | `scripts/prerender.mjs` | ✅ Done | 20 URLs. Submit in GSC (pending access) |
| 4 | No robots.txt | **High** | /robots.txt | Generated: allow all, sitemap reference | `scripts/prerender.mjs` | ✅ Done | Served 200 in Apache test |
| 5 | Soft 404s (unknown URLs return 200) | **High** | Any bad URL | `404.html` + `ErrorDocument 404`, `NotFound` route with `noindex` | `public/.htaccess`, `src/components/NotFound.jsx` | ✅ Done | Apache returns 404 status with the 404 page |
| 6 | No HTTPS/www canonicalisation; trailing slash and `.html` duplicates | **High** | All | One-hop 301 to `https://ecopakservices.com` and clean URLs | `public/.htaccess` | ✅ Done (verify on host) | Apache test: www→non-www, `/x/`→`/x`, `/x.html`→`/x`, `/index.html`→`/` |
| 7 | NAP inconsistency: mobile menu showed **+92 300 1050997** and **info@ecopakservices.pk**; everywhere else uses 1050977 and .com | **High** (local SEO / leads) | All (mobile) | Single NAP source `SITE` | `src/seo/site.js`, `Navigation.jsx` | ✅ Done | Mobile menu now renders from `SITE` |
| 8 | Homepage H1 rotated every 7 s ("Leading Environmental Solutions" and others), with no keyword | **High** | / | Static H1 "Environmental Testing Laboratory & Consultancy in Lahore, Pakistan"; slide titles moved to `<p>` with identical styling | `Home.jsx` | ✅ Done | One H1 per page on all routes |
| 9 | Homepage "Environmental Laboratory" card used the Research Institute's text ("established in 2025 under section 42…") | **High** (accuracy / E-E-A-T) | / | Replaced with an accurate lab description | `Home.jsx` | ✅ Done | |
| 10 | Dropdown nav links not in the DOM until hover; not keyboard accessible | **Medium** | All | Links always rendered (CSS hidden), open on hover, focus and click | `DropdownMenu.jsx` | ✅ Done | Links present in prerendered HTML |
| 11 | Mobile menu linked to `/careers` (no route, so blank page) and `/certificates` (broken images) | **Medium** | All (mobile) | Removed both links (Certificates was already hidden on desktop) | `Navigation.jsx` | ✅ Done | |
| 12 | `/certificates` references `img/certificate/*.jpg` files that don't exist | **Medium** | /certificates | Set to `noindex`, left out of sitemap until the scans are uploaded | `routes.js` | ✅ Done / ⏳ upload scans | |
| 13 | No structured data | **Medium** | All | JSON-LD `@graph`: Organization, WebSite, WebPage/AboutPage/ContactPage/CollectionPage, BreadcrumbList, Service, FAQPage | `src/seo/head.js` | ✅ Done | JSON parses on all pages. Run Rich Results Test after deploy |
| 14 | No breadcrumbs | **Medium** | Inner pages | Visible breadcrumb trail that matches the BreadcrumbList schema | `Breadcrumbs.jsx` | ✅ Done | |
| 15 | Missing service landing pages for core commercial queries | **High** | New | 4 new pages + About knowledge page (see §3) | `ServicePage.jsx`, `content/servicePages.js`, `AboutEcoPak.jsx` | ✅ Done | |
| 16 | No FAQ content | **Medium** | Home, services, About | 36 Q&As rendered in `<details>` (crawlable) + FAQPage schema | `content/faqs.js`, `FaqSection.jsx`, `RelatedAndFaq.jsx` | ✅ Done | |
| 17 | Weak internal linking between services | **Medium** | Services | "Related Services" blocks; homepage "Popular services" grid; footer links | Several | ✅ Done | |
| 18 | Single 440 KB JS bundle | **Medium** (CWV) | All | Route-level code splitting (`React.lazy`) | `App.jsx` | ✅ Done | Main bundle 440→329 KB (119→99 KB gzip); each page adds 2–16 KB |
| 19 | No compression or cache headers configured | **Medium** | All | `mod_deflate`; immutable cache for hashed assets; `no-cache` for HTML | `.htaccess` | ✅ Done | gzip + headers confirmed in Apache |
| 20 | Hero LCP image is an external Unsplash CSS background with `background-attachment: fixed` | **Medium** (LCP) | / | Added `preconnect`. **Recommended:** self-host a compressed WebP hero and render it as `<img fetchpriority="high">` | `index.html` | ⚠️ Partial | Needs a real photo of the lab/team (approval) |
| 21 | Below-fold images not lazy; no dimensions | **Low** | / | `loading="lazy"`, `decoding="async"`, width/height | `Home.jsx` | ✅ Done | |
| 22 | Favicon declared as `image/svg+xml` but it is a PNG | **Low** | All | Fixed type, added apple-touch-icon and theme-color | `index.html` | ✅ Done | |
| 23 | Nested `<footer>` inside `<footer>` | **Low** | All | Removed the outer wrapper (same styling) | `App.jsx` | ✅ Done | |
| 24 | `<style jsx>` (styled-jsx syntax, not installed) produced React warnings | **Low** | /, /clients | Changed to `<style>` | `Home.jsx`, `Clients.jsx` | ✅ Done | Warning gone |
| 25 | Stale duplicate `src/index.html` ("Vite + React") | **Low** | none | Deleted | | ✅ Done | |
| 26 | Footer "© 2024" | **Low** | All | `© 2015–{current year}` | `Footer.jsx` | ✅ Done | |
| 27 | Clients page H1 was just "Eco Pak Services" | **Low** | /clients | H1 is now "Our Valued Clients" | `Clients.jsx` | ✅ Done | |
| 28 | Client logos hot-linked from third-party sites (gstatic thumbnails, logos-world) | **Medium** | /clients | Download, compress and self-host. Confirm permission to show each brand | | ⏳ Approval | |
| 29 | Unused 1.3 MB of PNGs in `/public` | **Low** | none | Delete `mylogo.png`, `mylogo2.png` and `vite.svg` after confirming they aren't used elsewhere | | ⏳ Approval | |
| 30 | Footer newsletter shows "success" without sending anything | **Medium** (trust) | All | Connect it to a real list or remove it | `Footer.jsx` | ⏳ Approval | |

### Credibility issues that need approval (E-E-A-T). Not changed without your sign-off

| Claim on site | Problem | Recommendation |
|---|---|---|
| "Our Team" page: Dr. Fatima Khan, Muhammad Ahmad and others, with **stock photos** (Unsplash/iStock) | Looks like placeholder people. If they are not real staff, this misleads users and hurts E-E-A-T | Replace with real staff (name, role, qualification, photo) or `noindex` the page until then |
| Experience: "9+ years" (Home), "9 Years of Excellence", "15 Years" (Projects), "Since 2015" | Inconsistent. 2015 to 2026 is 11 years | Choose one figure based on the incorporation date and use it everywhere |
| Stats: "500+ projects" (Home) vs "1000+ projects" (Projects); "200+ clients" vs "50+ international clients"; "50+ expert team" | Inconsistent, unverified | Verify the figures and keep one set |
| "98% Recycling Efficiency, 85% Water Treatment, 92% Ecosystem Protection, 88% Renewable Energy" | No stated basis | Remove, or explain what each figure measures |
| Footer: ISO 9001, ISO 14001, **OHSAS 18001**, "EPA Approved"; QHSE page: ISO 45001, ISO 27001; hero: "ISO Certified, Licensed & Insured, Award Winning" | Unverified. OHSAS 18001 was withdrawn in 2021 and replaced by ISO 45001 | List only certificates you hold, with the certifying body and certificate number. Upload scans to `/certificates` |
| Projects: World Bank programmes; Nestlé (30+ projects), Honda Atlas, Coca-Cola, Pepsi, Unilever | Strong claims, no case studies | Verify, get client permission, and turn into case studies (a big authority win if true) |
| "Pakistan's premier environmental solutions provider" | Superlative with no evidence | Use factual positioning |
| Careers component: two vacancies, "Apply" buttons do nothing | Not routed. Placeholder | Publish real vacancies with an apply route, or delete |

**Establishment dates:** the **Eco Pak Services group** was established in **2015**. The **Eco Pak Services Research Institute** was established in **2025** under Section 42. The new About page and FAQs keep these two dates separate.

**External verification found:** the Punjab EPD website lists "ECO Pak Services PVT. LTD." among environmental labs and consultants ([epd.punjab.gov.pk/node/219](https://epd.punjab.gov.pk/node/219)). Confirm what the listing covers and its validity, then cite it on the site. It is a strong trust signal.

---

## 3. Pages created

| URL | Purpose | Primary keyword target |
|---|---|---|
| `/about-eco-pak-services` | AI-friendly company knowledge base (who/what/where/how to contact; separate establishment dates) | eco pak services, environmental company lahore |
| `/services/water-wastewater-testing` | Commercial landing page | water testing lahore, wastewater testing lab |
| `/services/air-quality-stack-emission-testing` | Commercial landing page | stack emission testing pakistan, ambient air quality monitoring |
| `/services/eia-iee-environmental-approval` | Commercial landing page | EIA / IEE consultant punjab, environmental approval punjab |
| `/services/wastewater-treatment-plant` | Commercial landing page | effluent treatment plant pakistan, industrial wastewater treatment |

All five are built only from services the existing site already lists. They state no turnaround times, prices or certification scopes. Parameter lists are labelled "typical" and tell the reader to confirm the scope first.

Pages **not** created, because the site does not show that Eco Pak offers these services: ZDHC compliance, ESG consultancy, cleanroom validation, RO systems, soil testing (soil is mentioned only in a hero slide). Each one can be added once you confirm you offer it.

---

## 4. Source code change summary

**New files:** `src/seo/{site.js,routes.js,head.js,RouteSeo.jsx,analytics.js}`, `src/content/{faqs.js,servicePages.js}`, `src/components/{ServicePage,AboutEcoPak,FaqSection,RelatedAndFaq,Breadcrumbs,NotFound}.jsx`, `src/entry-server.jsx`, `scripts/prerender.mjs`, `public/llms.txt`, `docs/seo/*`

**Modified:** `index.html`, `package.json` (build script), `public/.htaccess`, `src/main.jsx`, `src/App.jsx`, `Home.jsx`, `Navigation.jsx`, `DropdownMenu.jsx`, `Footer.jsx`, `Clients.jsx`, `EnvironmentalLaboratory.jsx`, `EnvironmentalConsultancy.jsx`, `DesignTreatment.jsx`, `CarbonFootprint.jsx`

**Deleted:** `src/index.html` (unused)

**Unchanged:** branding, colours, layout, Contact/EmailJS form, WhatsApp button, all existing URLs (no URL was renamed, so no redirect map is needed).

**How to add a page:** add the route to `App.jsx` **and** its metadata to `src/seo/routes.js`. The prerenderer, sitemap and canonical tags pick it up automatically.

**Analytics:** GA4 is wired but dormant. Set the `VITE_GA4_ID` environment variable (e.g. `G-XXXX`) in the GitHub Actions build step to enable it. It tracks `phone_click`, `whatsapp_click` and `email_click`. Mark these as Key Events in GA4. Not enabled yet: it needs your Measurement ID and a decision on cookie consent.

---

## 5. Production testing report (local)

| Test | Result |
|---|---|
| `npm run build` (Vite client + SSR + prerender) | ✅ 21 routes + 404, sitemap and robots generated |
| Chromium: 20 sitemap URLs + /certificates + unknown URL | ✅ 0 console errors, 0 hydration errors, exactly 1 `<h1>`, 1 `<title>`, ≤1 canonical each |
| JSON-LD parses on every indexable page | ✅ |
| Unknown URL | ✅ HTTP 404, `noindex` |
| SPA navigation (footer link) | ✅ title, canonical and H1 update; still one canonical |
| JS disabled on a service page | ✅ 3.5 K characters of body text + FAQ answers in HTML |
| Mobile 390 px horizontal overflow | ✅ none |
| Apache 2.4 + `.htaccess` over HTTPS | ✅ 200 clean URLs; 301 for www, trailing slash, `.html`, `/index.html`, `/services`, `/about/`; 404 for unknown; gzip; cache headers |
| ESLint | New code clean. 9 errors that existed before this work remain in `Certificates.jsx`, `Home.jsx` (unused `goToSlide`), `QHSEPolicy.jsx`, `WhatsAppButton.jsx` and `tailwind.config.js` |

### Core Web Vitals
We have **no field data** (no CrUX/GSC access) and **no lab run on the live site** (host unreachable). The build-level changes that should help:
- Content now arrives in the first HTML response, so the browser can paint text before JS runs (helps FCP and LCP).
- 25% less JS on the critical path; per-route chunks.
- Compression and long-lived caching for hashed assets.

**To do after deploy:** run PageSpeed Insights (mobile + desktop) on `/`, `/services/environmental-laboratory` and `/contact`, and record the numbers here as the "after" baseline. The biggest remaining LCP risk is the external hero background image (issue 20).

### Deployment notes
- The workflow uploads `dist/` by FTP. `SamKirkland/FTP-Deploy-Action` only syncs changes and **does not delete** old files on the server unless configured to. The old SPA has no `.html` route files, so nothing conflicts.
- **Before merging to `main`:** check how Hostinger handles www/HTTPS. If hPanel is set to redirect to **www**, rule 1 in `.htaccess` will cause a redirect loop. In that case either switch hPanel to non-www or delete rule 1.
