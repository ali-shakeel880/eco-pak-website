// Builds the <head> tags and JSON-LD for a route. Pure functions, shared by
// the client (RouteSeo.jsx) and the build-time prerenderer.
import { SITE, absoluteUrl } from './site.js';

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: `${SITE.url}/`,
    logo: absoluteUrl(SITE.logo),
    email: SITE.email,
    telephone: SITE.phones[0].tel,
    foundingDate: String(SITE.foundingYear),
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: { '@type': 'Country', name: SITE.address.countryName },
    contactPoint: SITE.phones.map((p) => ({
      '@type': 'ContactPoint',
      telephone: p.tel,
      contactType: 'customer service',
      areaServed: SITE.address.country,
      availableLanguage: ['en', 'ur'],
    })),
    knowsAbout: [
      'Environmental testing',
      'Environmental laboratory services',
      'Ambient air quality monitoring',
      'Stack emission testing',
      'Water and wastewater testing',
      'Environmental Impact Assessment',
      'Initial Environmental Examination',
      'Environmental compliance',
      'Industrial wastewater treatment',
      'Carbon footprint assessment',
    ],
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  };
}

export function buildJsonLd(route) {
  const url = absoluteUrl(route.path);
  const graph = [];

  if (route.path === '/') {
    graph.push(organizationSchema(), {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE.url}/`,
      name: SITE.name,
      publisher: { '@id': ORG_ID },
      inLanguage: 'en',
    });
  }

  graph.push({
    '@type': route.pageType || 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en',
  });

  if (route.breadcrumb) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: route.breadcrumb.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: absoluteUrl(c.path || route.path),
      })),
    });
  }

  if (route.service) {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: route.service.name,
      serviceType: route.service.type,
      description: route.description,
      url,
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'Country', name: SITE.address.countryName },
    });
  }

  if (route.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: route.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  if (route.path !== '/' && !route.noindex) {
    // Include a compact org reference so every page links back to the entity.
    graph.push({ '@type': 'Organization', '@id': ORG_ID, name: SITE.name, url: `${SITE.url}/` });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export function buildHead(route) {
  const url = absoluteUrl(route.path);
  const image = absoluteUrl(route.image || SITE.defaultOgImage);
  return {
    title: route.title,
    metas: [
      { name: 'description', content: route.description },
      { name: 'robots', content: route.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE.name },
      { property: 'og:locale', content: 'en_PK' },
      { property: 'og:title', content: route.title },
      { property: 'og:description', content: route.description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: route.title },
      { name: 'twitter:description', content: route.description },
      { name: 'twitter:image', content: image },
    ],
    canonical: route.noindex ? null : url,
    jsonLd: route.noindex ? null : buildJsonLd(route),
  };
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Serialise for static HTML (prerender).
export function headToHtml(route) {
  const h = buildHead(route);
  const out = [`<title>${esc(h.title)}</title>`];
  for (const m of h.metas) {
    const key = m.name ? `name="${esc(m.name)}"` : `property="${esc(m.property)}"`;
    out.push(`<meta ${key} content="${esc(m.content)}" data-seo />`);
  }
  if (h.canonical) out.push(`<link rel="canonical" href="${esc(h.canonical)}" data-seo />`);
  if (h.jsonLd) {
    const json = JSON.stringify(h.jsonLd).replace(/</g, '\\u003c');
    out.push(`<script type="application/ld+json" id="ld-json">${json}</script>`);
  }
  return out.join('\n    ');
}
