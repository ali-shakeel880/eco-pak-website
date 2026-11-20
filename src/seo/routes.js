// Per-route SEO metadata. Used by the client <RouteSeo/> component AND by the
// build-time prerender script (scripts/prerender.mjs) to generate static HTML,
// sitemap.xml and canonical tags. Every public route in App.jsx must be here.

import { FAQS } from '../content/faqs.js';

const HOME = { name: 'Home', path: '/' };
const ABOUT = { name: 'About Us', path: '/about-eco-pak-services' };

export const ROUTES = [
  {
    path: '/',
    title: 'Environmental Testing Lab & Consultancy in Lahore | Eco Pak Services',
    description:
      'Lahore-based environmental lab and consultancy: air, stack emission, water and wastewater testing, IEE/EIA approvals and wastewater treatment for industries.',
    priority: 1.0,
    pageType: 'WebPage',
    faqs: FAQS.home,
  },
  {
    path: '/about-eco-pak-services',
    title: 'About Eco Pak Services | Environmental Company in Lahore, Pakistan',
    description:
      'Who Eco Pak Services is, what it does, where it works and how to contact it: environmental testing, consultancy and engineering services from Lahore since 2015.',
    priority: 0.8,
    pageType: 'AboutPage',
    breadcrumb: [HOME, { name: 'About Eco Pak Services' }],
    faqs: FAQS.about,
  },
  {
    path: '/services/environmental-laboratory',
    title: 'Environmental Testing Laboratory in Lahore | Eco Pak Services',
    description:
      'Environmental laboratory in Lahore for ambient air, stack emission, noise, drinking water, wastewater and workplace monitoring for industries and projects.',
    priority: 0.9,
    pageType: 'WebPage',
    service: { name: 'Environmental Laboratory Testing', type: 'Environmental testing' },
    breadcrumb: [HOME, { name: 'Environmental Laboratory' }],
    faqs: FAQS.laboratory,
  },
  {
    path: '/services/water-wastewater-testing',
    title: 'Water & Wastewater Testing Lab in Lahore | Eco Pak Services',
    description:
      'Drinking water, industrial wastewater and effluent testing in Lahore and Punjab. Sampling and analysis against PEQS/NEQS limits for factories, buildings and projects.',
    priority: 0.9,
    pageType: 'WebPage',
    service: { name: 'Water and Wastewater Testing', type: 'Water quality testing' },
    breadcrumb: [HOME, { name: 'Environmental Laboratory', path: '/services/environmental-laboratory' }, { name: 'Water & Wastewater Testing' }],
    faqs: FAQS.water,
  },
  {
    path: '/services/air-quality-stack-emission-testing',
    title: 'Air Quality & Stack Emission Testing in Pakistan | Eco Pak Services',
    description:
      'Ambient air quality monitoring, stack emission testing, noise and workplace air monitoring for industries in Lahore and across Punjab.',
    priority: 0.9,
    pageType: 'WebPage',
    service: { name: 'Air Quality and Stack Emission Testing', type: 'Air quality monitoring' },
    breadcrumb: [HOME, { name: 'Environmental Laboratory', path: '/services/environmental-laboratory' }, { name: 'Air Quality & Stack Emission Testing' }],
    faqs: FAQS.air,
  },
  {
    path: '/services/environmental-consultancy',
    title: 'Environmental Consultant in Lahore | IEE, EIA & Audits | Eco Pak Services',
    description:
      'Environmental consultant in Lahore for IEE/EIA studies, EPA approvals, compliance reports, environmental audits, water/energy audits and waste management.',
    priority: 0.9,
    pageType: 'WebPage',
    service: { name: 'Environmental Consultancy', type: 'Environmental consulting' },
    breadcrumb: [HOME, { name: 'Environmental Consultancy' }],
    faqs: FAQS.consultancy.filter((f) => !/IEE\)|EIA\)/.test(f.q)),
  },
  {
    path: '/services/eia-iee-environmental-approval',
    title: 'EIA, IEE & Environmental Approval in Punjab | Eco Pak Services',
    description:
      'Need environmental approval from EPA Punjab? Eco Pak Services prepares IEE and EIA reports for factories and projects and supports you through review.',
    priority: 0.9,
    pageType: 'WebPage',
    service: { name: 'EIA and IEE Studies for Environmental Approval', type: 'Environmental impact assessment' },
    breadcrumb: [HOME, { name: 'Environmental Consultancy', path: '/services/environmental-consultancy' }, { name: 'EIA, IEE & Environmental Approval' }],
    faqs: FAQS.consultancy.filter((f) => /IEE|EIA|approval/i.test(f.q)),
  },
  {
    path: '/services/design-treatment',
    title: 'Wastewater Treatment Design & ETP Solutions | Eco Pak Services',
    description:
      'Industrial wastewater treatment design, zero liquid discharge, MBR and sludge dewatering for textile, food, pharma and chemical industries in Pakistan.',
    priority: 0.8,
    pageType: 'WebPage',
    service: { name: 'Wastewater Treatment Design', type: 'Wastewater treatment engineering' },
    breadcrumb: [HOME, { name: 'Design & Treatment Services' }],
  },
  {
    path: '/services/wastewater-treatment-plant',
    title: 'Industrial Wastewater Treatment Plant (ETP) in Pakistan | Eco Pak Services',
    description:
      'ETP and STP design, upgrades and performance checks for factories in Lahore and Punjab, backed by in-house wastewater testing.',
    priority: 0.9,
    pageType: 'WebPage',
    service: { name: 'Effluent and Wastewater Treatment Plants', type: 'Wastewater treatment engineering' },
    breadcrumb: [HOME, { name: 'Design & Treatment Services', path: '/services/design-treatment' }, { name: 'Wastewater Treatment Plant (ETP)' }],
    faqs: FAQS.treatment,
  },
  {
    path: '/services/carbon-footprint',
    title: 'Carbon Footprint Assessment & GHG Accounting in Pakistan | Eco Pak Services',
    description:
      'Carbon footprint and greenhouse gas measurement for Pakistani businesses: cradle-to-grave assessment, supply chain energy efficiency and CO2e reporting.',
    priority: 0.8,
    pageType: 'WebPage',
    service: { name: 'Carbon Footprint Assessment', type: 'Greenhouse gas accounting' },
    breadcrumb: [HOME, { name: 'Carbon Footprint' }],
    faqs: FAQS.sustainability,
  },
  {
    path: '/services/techno-legal',
    title: 'Techno-Legal Environmental Services in Pakistan | Eco Pak Services',
    description:
      'Technical and legal support for environmental tribunal cases, green benches, court hearings and regulatory compliance under Pakistan environmental law.',
    priority: 0.7,
    pageType: 'WebPage',
    service: { name: 'Techno-Legal Environmental Services', type: 'Environmental legal support' },
    breadcrumb: [HOME, { name: 'Techno-Legal Services' }],
  },
  {
    path: '/services/research-institute',
    title: 'Eco Pak Services Research Institute | Environmental Research',
    description:
      'Eco Pak Services Research Institute: environmental research for sustainable solutions in Pakistan, from water resources to capacity building.',
    priority: 0.5,
    pageType: 'WebPage',
    breadcrumb: [HOME, { name: 'Research Institute' }],
  },
  {
    path: '/projects',
    title: 'Environmental Projects | Eco Pak Services',
    description:
      'Environmental monitoring, consultancy and wastewater treatment projects delivered by Eco Pak Services for industries in Pakistan.',
    priority: 0.7,
    pageType: 'CollectionPage',
    breadcrumb: [HOME, { name: 'Projects' }],
  },
  {
    path: '/clients',
    title: 'Our Clients | Eco Pak Services',
    description:
      'Industries and companies served by Eco Pak Services for environmental testing, consultancy and compliance in Pakistan.',
    priority: 0.6,
    pageType: 'CollectionPage',
    breadcrumb: [HOME, { name: 'Clients' }],
  },
  {
    path: '/contact',
    title: 'Contact Eco Pak Services | Request a Quote in Lahore',
    description:
      'Contact Eco Pak Services in Lahore for environmental testing, consultancy and treatment quotations. Call +92 300 1050996, WhatsApp or email info@ecopakservices.com.',
    priority: 0.8,
    pageType: 'ContactPage',
    breadcrumb: [HOME, { name: 'Contact' }],
  },
  {
    path: '/about/ceo-message',
    title: 'CEO Message | Eco Pak Services',
    description: 'A message from the CEO of Eco Pak Services on environmental protection, compliance and the company\'s commitment to clients in Pakistan.',
    priority: 0.5,
    pageType: 'WebPage',
    breadcrumb: [HOME, ABOUT, { name: 'CEO Message' }],
  },
  {
    path: '/about/our-team',
    title: 'Our Team | Eco Pak Services',
    description: 'The environmental professionals behind Eco Pak Services in Lahore, Pakistan.',
    priority: 0.4,
    pageType: 'WebPage',
    breadcrumb: [HOME, ABOUT, { name: 'Our Team' }],
  },
  {
    path: '/about/code-of-conduct',
    title: 'Code of Conduct | Eco Pak Services',
    description: 'The code of conduct that guides how Eco Pak Services works with clients, regulators and communities.',
    priority: 0.3,
    pageType: 'WebPage',
    breadcrumb: [HOME, ABOUT, { name: 'Code of Conduct' }],
  },
  {
    path: '/about/qhse-policy',
    title: 'QHSE Policy | Eco Pak Services',
    description: 'Quality, health, safety and environment (QHSE) policy of Eco Pak Services.',
    priority: 0.3,
    pageType: 'WebPage',
    breadcrumb: [HOME, ABOUT, { name: 'QHSE Policy' }],
  },
  {
    path: '/about/quality-policy',
    title: 'Quality Policy | Eco Pak Services',
    description: 'Quality policy of Eco Pak Services for environmental testing, consultancy and engineering services.',
    priority: 0.3,
    pageType: 'WebPage',
    breadcrumb: [HOME, ABOUT, { name: 'Quality Policy' }],
  },
  {
    // Not linked in navigation and certificate images are missing from /public.
    // Kept out of the index until real certificate scans are uploaded.
    path: '/certificates',
    title: 'Certificates | Eco Pak Services',
    description: 'Registration and certification documents of Eco Pak Services.',
    noindex: true,
    pageType: 'WebPage',
    breadcrumb: [HOME, { name: 'Certificates' }],
  },
];

export const NOT_FOUND = {
  path: '/404',
  title: 'Page Not Found | Eco Pak Services',
  description: 'The page you are looking for could not be found.',
  noindex: true,
  pageType: 'WebPage',
};

export const findRoute = (pathname) => {
  const clean = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
  return ROUTES.find((r) => r.path === clean) || NOT_FOUND;
};
