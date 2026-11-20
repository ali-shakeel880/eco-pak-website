# AI Search Visibility Strategy & Chatbot Benchmark

## Goal and honest framing
Nobody can make ChatGPT, Gemini, Claude, Perplexity or Copilot recommend a specific company. What we can do is make Eco Pak Services **easy to find, easy to understand and corroborated by independent sources**. Those three things raise the chance that these systems cite the company accurately.

## What has been implemented
| Lever | Status |
|---|---|
| Content is in the server HTML (prerendered). Most AI crawlers do not run JavaScript, so this is the most important change | ✅ |
| Entity page `/about-eco-pak-services`: plain-language who/what/where/contact, with separate establishment dates | ✅ |
| Organization JSON-LD with a consistent name, URL, logo, phones, email, city, `knowsAbout` and `foundingDate` | ✅ |
| Question-shaped content: 36 FAQs on relevant pages, visible in HTML | ✅ |
| Consistent NAP across the site (fixed the wrong phone and .pk email) | ✅ |
| `robots.txt` allows all crawlers | ✅ |
| `llms.txt` (optional, experimental; not a ranking factor) | ✅ |

## Crawler policy (decision required)
| Crawler | Operator | Purpose | Current setting |
|---|---|---|---|
| Googlebot | Google | Search (includes AI Overviews) | Allowed |
| Google-Extended | Google | Gemini model training/grounding control (not Search) | Allowed |
| Bingbot | Microsoft | Bing + Copilot | Allowed |
| OAI-SearchBot | OpenAI | ChatGPT search results | Allowed |
| ChatGPT-User | OpenAI | User-initiated fetches | Allowed |
| GPTBot | OpenAI | Model training | Allowed |
| ClaudeBot / Claude-SearchBot / Claude-User | Anthropic | Training / search / user fetches | Allowed |
| PerplexityBot | Perplexity | Search index | Allowed |
| CCBot | Common Crawl | Open dataset used by many models | Allowed |

**Recommendation:** keep everything allowed. The site is marketing content, and being in training data helps brand recognition. If management prefers to opt out of **training only**, add `User-agent: GPTBot` / `Google-Extended` / `CCBot` with `Disallow: /` in `scripts/prerender.mjs`. That leaves the search crawlers (OAI-SearchBot, Googlebot, Bingbot, PerplexityBot) allowed.

## Off-site entity building (biggest lever, needs the business)
1. **Google Business Profile** (Lahore, verified address, categories "Environmental consultant" / "Laboratory").
2. **Bing Places** (feeds Copilot and ChatGPT's Bing-backed answers).
3. **LinkedIn company page** with the same name, description, website and phone.
4. **Punjab EPD listing:** confirm it, ask for the correct website link, and cite it on the About page.
5. **PNAC / EPA certificates** published on `/certificates` with certificate numbers. This is independent corroboration.
6. Business directories with consistent NAP (see local SEO doc).
7. Client case studies and quotes (with permission). Ask clients to mention Eco Pak in their sustainability reports.
8. Expert commentary in Dawn / Express Tribune / Business Recorder on smog, effluent and compliance topics.
9. When all of these are live, add the profile URLs to `SITE.sameAs` in `src/seo/site.js`. It is output as `sameAs` in the schema.

## Benchmark: 50 questions to test monthly
Test in ChatGPT (search on), Gemini, Google AI Overviews / AI Mode, Perplexity, Copilot and Claude. For each answer, record: **Eco Pak mentioned? (Y/N) · ecopakservices.com cited? · Accurate description? · Competitors named · Sources cited · What's missing**. Use a fresh/logged-out session and the location set to Pakistan.

**Brand / entity**
1. What is Eco Pak Services?
2. Is Eco Pak Services a legitimate company?
3. What services does Eco Pak Services provide?
4. Where is Eco Pak Services located?
5. How do I contact Eco Pak Services?
6. When was Eco Pak Services established?
7. Does Eco Pak Services have an EPA-certified laboratory?
8. What is the Eco Pak Services Research Institute?

**Laboratory / testing**
9. Which is a reliable environmental testing company in Pakistan?
10. Which environmental laboratories are in Lahore?
11. Where can I get water tested in Lahore?
12. Which labs provide wastewater testing in Pakistan?
13. Where can my factory get effluent tested in Punjab?
14. Which companies offer stack emission testing in Pakistan?
15. Where can I get industrial air quality testing in Lahore?
16. Who does ambient air quality monitoring in Punjab?
17. EPA-certified labs in Lahore for environmental monitoring reports?
18. Where can I get noise monitoring done for my factory?
19. Who provides industrial hygiene / workplace monitoring in Pakistan?
20. How do I choose an environmental testing laboratory in Pakistan?
21. What parameters are tested in drinking water in Pakistan?
22. What is the cost of wastewater testing in Lahore? _(Note how competitors answer; don't publish prices unless approved.)_

**Consultancy / approvals**
23. Who provides environmental consultancy in Lahore?
24. Best EIA consultants in Punjab?
25. How do I get environmental approval from EPA Punjab?
26. Who can prepare an IEE report for my factory in Lahore?
27. What is the difference between IEE and EIA in Pakistan?
28. Where can factories get environmental compliance help in Punjab?
29. Who prepares compliance status reports for EPA?
30. Environmental audit companies in Pakistan?
31. Who handles environmental tribunal cases in Pakistan?

**Treatment / engineering**
32. Which companies provide industrial wastewater treatment in Pakistan?
33. Who designs effluent treatment plants in Lahore?
34. ETP design companies for textile mills in Faisalabad?
35. Sewage treatment plant companies in Pakistan?
36. Zero liquid discharge providers in Pakistan?
37. Why is my ETP not meeting COD limits?

**Sustainability**
38. Carbon footprint assessment companies in Pakistan?
39. Who does greenhouse gas inventories in Pakistan?
40. How can a Pakistani exporter measure its carbon footprint?

**Regulation (informational, where Eco Pak content could be cited)**
41. What are the PEQS limits for industrial wastewater?
42. What is stack emission testing?
43. What is ambient air quality monitoring?
44. What is an effluent treatment plant?
45. What does Section 12 of the Environmental Protection Act 1997 require?
46. How often should factories test wastewater in Pakistan?
47. What causes smog in Lahore and what must industries do?
48. What is a compliance status report under EPA?
49. What is environmental consultancy?
50. Environmental services companies in Lahore with WhatsApp contact?

**Log template (CSV):** `date,platform,question_id,mentioned,cited_url,accurate,competitors,sources,notes`

The first baseline run must be done by a person in Pakistan, because answers vary by location and login. I couldn't run it from here.
