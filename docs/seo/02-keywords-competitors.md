# Keyword Research, Keyword-to-URL Map & Competitor Analysis

## Data integrity note
I had **no access to Google Keyword Planner, Ahrefs, Semrush or Search Console** during this work. So the **search volume, keyword difficulty and CPC columns are intentionally blank** rather than estimated. Fill them from Keyword Planner (location: Pakistan; also Lahore) or Ahrefs/Semrush (database: PK). Intent, target page, priority and business relevance below are analyst judgements based on the services Eco Pak actually offers.

Expect Pakistani B2B environmental queries to have **low absolute volume** (often tens to low hundreds of searches per month). Rankings for them are still valuable because each search tends to come from a factory or project with a real compliance need.

## Keyword map

Priority: **P1** = target now with an existing or new page; **P2** = next quarter; **P3** = content/blog.

| Keyword | Volume | KD | CPC | Intent | Target URL | Priority | Relevance |
|---|---|---|---|---|---|---|---|
| environmental testing laboratory lahore | — | — | — | Commercial/local | /services/environmental-laboratory | P1 | Very high |
| environmental lab lahore | — | — | — | Commercial/local | /services/environmental-laboratory | P1 | Very high |
| environmental testing services pakistan | — | — | — | Commercial | /services/environmental-laboratory | P1 | Very high |
| epa certified lab lahore | — | — | — | Commercial/local | /services/environmental-laboratory (once certification is verified and shown) | P1 | Very high |
| water testing lab lahore | — | — | — | Transactional/local | /services/water-wastewater-testing | P1 | High |
| drinking water testing lahore | — | — | — | Transactional/local | /services/water-wastewater-testing | P1 | High |
| wastewater testing lab pakistan | — | — | — | Commercial | /services/water-wastewater-testing | P1 | Very high |
| industrial wastewater testing | — | — | — | Commercial | /services/water-wastewater-testing | P1 | Very high |
| effluent testing laboratory | — | — | — | Commercial | /services/water-wastewater-testing | P1 | Very high |
| stack emission testing pakistan | — | — | — | Commercial | /services/air-quality-stack-emission-testing | P1 | Very high |
| stack emission monitoring lahore | — | — | — | Commercial/local | /services/air-quality-stack-emission-testing | P1 | Very high |
| ambient air quality monitoring pakistan | — | — | — | Commercial | /services/air-quality-stack-emission-testing | P1 | Very high |
| workplace air quality testing / industrial hygiene monitoring | — | — | — | Commercial | /services/air-quality-stack-emission-testing | P2 | High |
| noise monitoring lahore | — | — | — | Commercial | /services/environmental-laboratory | P2 | Medium |
| environmental consultant lahore | — | — | — | Commercial/local | /services/environmental-consultancy | P1 | Very high |
| environmental consultancy pakistan | — | — | — | Commercial | /services/environmental-consultancy | P1 | Very high |
| eia consultant punjab / eia lahore | — | — | — | Commercial | /services/eia-iee-environmental-approval | P1 | Very high |
| iee report punjab / initial environmental examination | — | — | — | Commercial + info | /services/eia-iee-environmental-approval | P1 | Very high |
| environmental approval punjab / epa noc punjab | — | — | — | Commercial | /services/eia-iee-environmental-approval | P1 | Very high |
| environmental audit services pakistan | — | — | — | Commercial | /services/environmental-consultancy | P2 | High |
| compliance status report epa | — | — | — | Commercial | /services/environmental-consultancy | P2 | High |
| effluent treatment plant pakistan / etp design | — | — | — | Commercial | /services/wastewater-treatment-plant | P1 | High |
| industrial wastewater treatment pakistan | — | — | — | Commercial | /services/wastewater-treatment-plant | P1 | High |
| sewage treatment plant pakistan / stp | — | — | — | Commercial | /services/wastewater-treatment-plant | P2 | Medium |
| zero liquid discharge pakistan | — | — | — | Commercial | /services/design-treatment | P2 | Medium |
| carbon footprint assessment pakistan | — | — | — | Commercial | /services/carbon-footprint | P2 | Medium |
| ghg inventory pakistan / greenhouse gas accounting | — | — | — | Commercial + info | /services/carbon-footprint | P2 | Medium |
| environmental tribunal lawyer / green bench | — | — | — | Commercial | /services/techno-legal | P3 | Niche |
| what is stack emission testing | — | — | — | Informational | Blog (see content plan) | P3 | Medium |
| peqs effluent limits / neqs standards | — | — | — | Informational | Blog | P3 | High (top-of-funnel for factories) |
| how to get environmental approval in punjab | — | — | — | Informational | Blog → EIA page | P3 | High |
| eco pak services | — | — | — | Navigational | / and /about-eco-pak-services | P1 | Brand |

**City modifiers:** add Faisalabad, Sialkot, Gujranwala, Kasur, Sheikhupura and Multan (Punjab industrial clusters) **only after** confirming you do site work there. Use one honest "Areas we serve" section rather than near-duplicate city pages.

**Do not target yet (service not confirmed):** ZDHC testing, ESG consultancy, cleanroom validation, RO plants, soil testing.

## Page-by-page metadata sheet (implemented)
The live source of truth is `src/seo/routes.js`. Summary:

| URL | Title | H1 |
|---|---|---|
| / | Environmental Testing Lab & Consultancy in Lahore \| Eco Pak Services | Environmental Testing Laboratory & Consultancy in Lahore, Pakistan |
| /about-eco-pak-services | About Eco Pak Services \| Environmental Company in Lahore, Pakistan | About Eco Pak Services |
| /services/environmental-laboratory | Environmental Testing Laboratory in Lahore \| Eco Pak Services | Environmental Laboratory Services in Lahore |
| /services/water-wastewater-testing | Water & Wastewater Testing Lab in Lahore \| Eco Pak Services | Water & Wastewater Testing Laboratory in Lahore |
| /services/air-quality-stack-emission-testing | Air Quality & Stack Emission Testing in Pakistan \| Eco Pak Services | Air Quality Monitoring & Stack Emission Testing in Pakistan |
| /services/environmental-consultancy | Environmental Consultant in Lahore \| IEE, EIA & Audits \| Eco Pak Services | Environmental Consultancy in Lahore, Pakistan |
| /services/eia-iee-environmental-approval | EIA, IEE & Environmental Approval in Punjab \| Eco Pak Services | EIA, IEE & Environmental Approval Services in Punjab |
| /services/design-treatment | Wastewater Treatment Design & ETP Solutions \| Eco Pak Services | Wastewater Treatment Design & Engineering Services |
| /services/wastewater-treatment-plant | Industrial Wastewater Treatment Plant (ETP) in Pakistan \| Eco Pak Services | Industrial Wastewater Treatment Plants (ETP) in Pakistan |
| /services/carbon-footprint | Carbon Footprint Assessment & GHG Accounting in Pakistan \| Eco Pak Services | Carbon Footprint Assessment Services |
| /services/techno-legal | Techno-Legal Environmental Services in Pakistan \| Eco Pak Services | Techno-Legal Services |
| /services/research-institute | Eco Pak Services Research Institute \| Environmental Research | Eco Pak Research Institute |
| /projects | Environmental Projects \| Eco Pak Services | (existing) |
| /clients | Our Clients \| Eco Pak Services | Our Valued Clients |
| /contact | Contact Eco Pak Services \| Request a Quote in Lahore | Contact Us |
| /about/* (5 pages) | `<Page> \| Eco Pak Services` | (existing) |
| /certificates | noindex until scans are uploaded | |

---

## Competitor analysis

**Method:** web search of Punjab EPD documents and directories (Nov 2026). Organic traffic, backlinks and authority metrics **need Ahrefs/Semrush** and are left blank. Nothing below is an estimate presented as fact.

| Competitor | Type | Evidence found (source) | Traffic / DR / backlinks |
|---|---|---|---|
| Asian Environmental Services (Pvt.) Ltd., Lahore | EPA-certified lab | Punjab EPA lab certificate (2025) covering effluent, gaseous emissions and ambient air ([EPD PDF](https://epd.punjab.gov.pk/system/files/Asian%20Environmental%20Services%20Pvt%20Limited.pdf)) | needs tool |
| Environmental Services Pakistan (ESPAK), Lahore | Lab + consultancy | Directory listing; appears as consultant in 2025 EIA filings ([ecohubmap](https://www.ecohubmap.com/company/business/environmental-services-pakistan-private-limited-espak/4evkklhngmvno)) | needs tool |
| SGS Pakistan | Multinational lab | Cited as PNAC-accredited in Lahore (PNAC lab register) | needs tool |
| Pak Green Enviro-Engineering (Pvt.) Ltd. | Lab/consultancy | Listed on Punjab EPD ([node/219](https://epd.punjab.gov.pk/node/219)) | needs tool |
| Green Crescent | Lab | Cited among PNAC-accredited labs | needs tool |
| WELCOS | Lab | Cited among PNAC-accredited labs | needs tool |
| Enviro Stewards Company (Pvt.) Ltd., Lahore | Consultant | EIA consultant on EPD-published report | needs tool |
| Environmental Greentech Services (Pvt.) Ltd., Model Town Lahore | Consultant | 2025 EIA consultant | needs tool |
| Friends of Environment & Economic Development (FEED), Lahore | Consultant | Multiple EIAs on EPD site | needs tool |
| A+ Consultants, Lahore | Consultant | 2024 IEE/EIA report | needs tool |
| Bio Green Environmental Consultant | Consultant | 2025 EIA | needs tool |
| NESPAK (Environment sector) | Large engineering consultant | [nespak.com.pk](https://nespak.com.pk/EnvironmentSector.html) | needs tool |

### Gaps and opportunities (qualitative)
1. **Most local competitors have thin websites.** Their authority comes from being **named in EPA documents and registers**, not from content. Eco Pak can win on two fronts: (a) getting its own certificates and listings cited and linked from the site, and (b) publishing clear, specific service pages and guides, which competitors mostly lack.
2. **Certification transparency** is the deciding factor in this market. Users and AI assistants answering "which lab is EPA-certified" will favour sites that show their certificate, scope and validity. Publishing Eco Pak's verified certificate (with scope) is the single most valuable trust upgrade.
3. **Guides on regulation** (PEQS limits, IEE vs EIA, approval steps, monitoring frequency) have little good local content. These topics feed the commercial pages through internal links.

**Next step:** export each competitor domain into Ahrefs/Semrush (Organic keywords, Top pages, Referring domains, Link intersect vs ecopakservices.com) and fill the blank columns.
