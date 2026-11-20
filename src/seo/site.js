// Single source of truth for business identity (NAP) used by the UI,
// metadata and structured data. Only verified details belong here —
// update this file (not individual components) when details change.
export const SITE = {
  name: 'Eco Pak Services',
  legalName: 'Eco Pak Services (Pvt.) Ltd.', // TODO(verify): confirm exact SECP-registered name
  url: 'https://ecopakservices.com',
  logo: '/logooo.jpeg',
  defaultOgImage: '/logooo.jpeg',
  email: 'info@ecopakservices.com',
  phones: [
    { display: '+92 300 1050996', tel: '+923001050996', wa: '923001050996' },
    { display: '+92 300 1050977', tel: '+923001050977', wa: '923001050977' },
  ],
  hours: 'Mon-Fri, 9AM-6PM',
  address: {
    // Street address intentionally omitted until verified (needed for Google Business Profile / LocalBusiness).
    locality: 'Lahore',
    region: 'Punjab',
    country: 'PK',
    countryName: 'Pakistan',
  },
  foundingYear: 2015,
  areaServed: ['Lahore', 'Punjab', 'Pakistan'],
  // Add LinkedIn / Facebook / Google Business Profile URLs once confirmed.
  sameAs: [],
};

export const absoluteUrl = (path = '/') =>
  path === '/' ? `${SITE.url}/` : `${SITE.url}${path}`;
