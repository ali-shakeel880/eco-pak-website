import { Link } from 'react-router-dom';
import { ArrowRight, Building2, MapPin, Phone, Mail, FlaskConical, FileText, Cog, Leaf, Scale } from 'lucide-react';
import FaqSection from './FaqSection';
import { SITE } from '../seo/site.js';
import { FAQS } from '../content/faqs.js';

// Company knowledge page: a single, factual, well-structured description of
// Eco Pak Services for customers, search engines and AI assistants.
// Only include information the company has verified.

const SERVICE_GROUPS = [
  {
    icon: FlaskConical,
    title: 'Environmental laboratory testing',
    path: '/services/environmental-laboratory',
    items: [
      { label: 'Ambient air quality & odour monitoring', path: '/services/air-quality-stack-emission-testing' },
      { label: 'Stack emission monitoring', path: '/services/air-quality-stack-emission-testing' },
      { label: 'Vehicular emission monitoring' },
      { label: 'Noise & lux monitoring' },
      { label: 'Meteorological monitoring' },
      { label: 'Drinking water analysis', path: '/services/water-wastewater-testing' },
      { label: 'Wastewater & effluent analysis', path: '/services/water-wastewater-testing' },
      { label: 'Industrial hygiene (workplace) monitoring' },
    ],
  },
  {
    icon: FileText,
    title: 'Environmental consultancy',
    path: '/services/environmental-consultancy',
    items: [
      { label: 'Initial Environmental Examination (IEE)', path: '/services/eia-iee-environmental-approval' },
      { label: 'Environmental Impact Assessment (EIA)', path: '/services/eia-iee-environmental-approval' },
      { label: 'Environmental approvals' },
      { label: 'Compliance status & annual compliance reports' },
      { label: 'Environmental audits' },
      { label: 'Water & energy audits' },
      { label: 'Solid waste management' },
    ],
  },
  {
    icon: Cog,
    title: 'Engineering & treatment solutions',
    path: '/services/design-treatment',
    items: [
      { label: 'Industrial wastewater / effluent treatment plants', path: '/services/wastewater-treatment-plant' },
      { label: 'Zero liquid discharge systems' },
      { label: 'Membrane bioreactor (MBR) systems' },
      { label: 'Sludge management & dewatering' },
      { label: 'Air emission control devices' },
    ],
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    path: '/services/carbon-footprint',
    items: [{ label: 'Carbon footprint & greenhouse gas assessment' }, { label: 'Energy efficiency' }],
  },
  {
    icon: Scale,
    title: 'Techno-legal services',
    path: '/services/techno-legal',
    items: [{ label: 'Environmental tribunals & green benches' }, { label: 'Regulatory compliance support' }],
  },
];


export default function AboutEcoPak() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">About Eco Pak Services</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            Eco Pak Services is an environmental testing, consultancy and engineering company headquartered in Lahore, Pakistan.
            Since 2015 it has helped industries and project developers measure, manage and report their environmental performance
            and meet the requirements of Pakistan's environmental laws.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Quick facts */}
        <section aria-labelledby="facts">
          <h2 id="facts" className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Company at a Glance</h2>
          <dl className="grid sm:grid-cols-2 gap-4">
            {[
              ['Company name', SITE.name],
              ['Industry', 'Environmental testing, laboratory services, environmental consultancy and engineering'],
              ['Head office', 'Lahore, Punjab, Pakistan'],
              ['Established', '2015 (Eco Pak Services Research Institute: 2025)'],
              ['Website', 'https://ecopakservices.com/'],
              ['Email', SITE.email],
              ['Phone / WhatsApp', SITE.phones.map((p) => p.display).join(', ')],
              ['Office hours', SITE.hours],
            ].map(([k, v]) => (
              <div key={k} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <dt className="text-sm text-gray-500">{k}</dt>
                <dd className="text-gray-800 font-medium mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Who */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Who Is Eco Pak Services?</h2>
          <p className="text-gray-700 leading-relaxed mb-4 max-w-4xl">
            The Eco Pak Services group was established in 2015. It provides environmental approvals, Environmental Impact Assessments (EIA),
            Initial Environmental Examinations (IEE), analytical monitoring, wastewater treatment system installation, air emission control
            devices and legal services. The company also deals in the import and manufacturing of industrial and laboratory equipment.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            The Eco Pak Services Research Institute was established separately in 2025 under Section 42 for research and development in
            sustainability, including water resources, sustainable urbanisation and capacity building.
          </p>
        </section>

        {/* What */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">What Services Does Eco Pak Services Offer?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICE_GROUPS.map((g) => (
              <div key={g.title} className="border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <g.icon className="w-6 h-6 text-green-600 mr-3" aria-hidden="true" />
                  <Link to={g.path} className="hover:text-green-700">{g.title}</Link>
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {g.items.map((it) => (
                    <li key={it.label} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {it.path ? <Link to={it.path} className="hover:text-green-700 underline-offset-2 hover:underline">{it.label}</Link> : it.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Where / industries */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Where Does Eco Pak Services Work?</h2>
            <p className="text-gray-700 leading-relaxed">
              The head office is in Lahore, Punjab. The company serves industrial and commercial clients in Lahore and other cities in Pakistan.
              Contact the team to confirm sampling and site-visit availability for your location.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Which Industries Does It Serve?</h2>
            <p className="text-gray-700 leading-relaxed">
              Textile and apparel, food and beverage, consumer goods, packaging, paints and coatings, animal feed and other manufacturing
              industries, as well as housing, commercial and development projects. See our <Link to="/clients" className="text-green-700 underline">clients</Link> and{' '}
              <Link to="/projects" className="text-green-700 underline">projects</Link>.
            </p>
          </div>
        </section>

        {/* Quote */}
        <section className="bg-green-50 border border-green-100 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center">
            <Building2 className="w-7 h-7 text-green-600 mr-3" aria-hidden="true" /> How to Request a Quotation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Share your site location, the service you need, the number of sampling points or sources and any EPA letter or buyer requirement.
            The Lahore team will reply with a scope and quotation.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 text-gray-800">
            <a href={`tel:${SITE.phones[0].tel}`} className="inline-flex items-center"><Phone className="w-5 h-5 text-green-600 mr-2" aria-hidden="true" />{SITE.phones[0].display}</a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center"><Mail className="w-5 h-5 text-green-600 mr-2" aria-hidden="true" />{SITE.email}</a>
            <span className="inline-flex items-center"><MapPin className="w-5 h-5 text-green-600 mr-2" aria-hidden="true" />Lahore, Pakistan</span>
          </div>
          <Link to="/contact" className="mt-6 inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold">
            Contact Us <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </Link>
        </section>
      </div>

      <FaqSection faqs={FAQS.about} title="Questions About Eco Pak Services" className="bg-gray-50" />
    </div>
  );
}

