# Local SEO, Backlink Strategy & Six-Month Roadmap

## Local SEO (Lahore + genuine service areas)

**Blocking item:** the site shows only "Lahore, Pakistan". A Google Business Profile and LocalBusiness schema need a **verified street address**. Please provide the office/lab address, plus Google Maps pin and opening hours. Then:

1. **Google Business Profile**
   - Name exactly "Eco Pak Services", with no keyword stuffing.
   - Primary category "Environmental consultant"; secondary "Laboratory" and "Water testing service" (pick from GBP's list).
   - Website `https://ecopakservices.com/` with UTM `?utm_source=gbp`.
   - Phone +92 300 1050996.
   - Services list mirroring the site; real photos of the lab, field team and equipment; posts twice a month.
   - Service area: only the cities you actually visit.
2. **Reviews:** ask real clients for reviews after each completed job (an email/WhatsApp template with the GBP review link). **Never** buy or write reviews.
3. **NAP consistency:** use exactly the name, phone, email and website in `src/seo/site.js` everywhere.
4. **Citations (manual, quality first):** Bing Places, Apple Business Connect, LinkedIn, Rozee.pk / Mustakbil company profile (the Mustakbil environmental services category already lists competitors), Lahore Chamber of Commerce & Industry member directory (if a member), PNAC lab register (if accredited), Punjab EPD lab listing (verify the entry and website link), ecohubmap, Pakistan Engineering Council (if registered firms/engineers).
5. **On-site:** once the address is verified, add it to `SITE.address` and to the footer, contact page and an embedded map. The schema can then move from `Organization` to `ProfessionalService` (LocalBusiness) with geo coordinates.
6. **City pages:** don't create doorway pages. If you have real projects in Faisalabad/Sialkot/Kasur, add one "Areas We Serve" section listing them, and only build a city page when it has unique content (local projects, local regulations, case study).

## Backlink strategy (3 months)
_Current backlink profile: **not measured** (no Ahrefs/Semrush/GSC access). Pull the GSC "Links" report and an Ahrefs referring-domains export as the baseline. No disavow file is recommended without a documented reason._

| Month | Activity | Target links (realistic, relevant) |
|---|---|---|
| 1 | Claim/correct entity profiles: GBP, Bing, LinkedIn, Mustakbil, ecohubmap, chamber directory, PNAC/EPD listings | 5–10 directory/registry citations |
| 1 | Ask existing clients and partners (equipment suppliers, labs you collaborate with) for a supplier/partner mention | 2–4 |
| 2 | Publish 2 data-rich guides (PEQS explained; How to get approval in Punjab) and pitch them to industry associations (APTMA, PTEA, LCCI newsletters) as member resources | 2–3 |
| 2 | Universities: guest lecture / internship programme with environmental science departments (UET, GCU, PU, COMSATS), which often produces .edu.pk links | 1–2 |
| 3 | Digital PR: smog-season expert commentary (stack testing, industrial emissions) to Dawn, Tribune, Business Recorder, Profit; offer data from anonymised monitoring | 1–3 |
| 3 | Research Institute: publish a short research note/report and share it with relevant NGOs and journals | 1–2 |

**Avoid:** PBNs, paid link packages, mass directory submissions, link exchanges, comment spam.

---

## Six-month SEO roadmap

| Month | Work | Status |
|---|---|---|
| **1** | Technical audit ✅ · Prerendering/metadata/sitemap/robots/404/redirects ✅ · Metadata for all pages ✅ · Keyword map (metrics pending tools) ✅ · Competitor list ✅ · **Deploy** · GSC + Bing Webmaster setup and sitemap submission · GA4 + key events · Baseline PageSpeed | Code done; deploy & accounts pending |
| **2** | 4 new service pages ✅ · Structured data ✅ · Internal linking ✅ · GBP + citations · Self-hosted hero image (LCP) · Fix credibility items (team, stats, certificates) | Pages done; rest needs input |
| **3** | Publish articles 1–10 · AI knowledge page ✅ · Brand profiles (sameAs) · Backlink outreach month 1–2 · First AI benchmark run | |
| **4** | GSC: queries in positions 5–30, high-impression/low-CTR pages → retitle and expand · Articles 11–20 · Competitor gap analysis with tool data · AI benchmark re-run | |
| **5** | Digital PR (smog season) · Case studies · Additional service pages if confirmed (soil, ZDHC, ESG, etc.) · CRO on contact flow (quote form fields, WhatsApp prompt per service) | |
| **6** | Full re-audit (technical + CWV) · Rankings, traffic and leads vs baseline · Articles 21–30 · Next six-month plan | |

**KPIs to track (targets set after the baseline, no guarantees):** organic clicks and impressions (GSC), non-branded impressions for P1 keywords, leads from organic (form submissions, `phone_click`, `whatsapp_click` events in GA4), GBP calls and direction requests, number of AI benchmark questions where Eco Pak is mentioned and cited.
