import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FaqSection from './FaqSection';
import { findRoute } from '../seo/routes.js';

// Appended to existing service pages: contextual internal links + route FAQs.
export default function RelatedAndFaq({ path, links = [] }) {
  const route = findRoute(path);
  return (
    <>
      {links.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-12" aria-labelledby="related-services">
          <h2 id="related-services" className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Related Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map((l) => (
              <Link key={l.path} to={l.path} className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-green-400 hover:shadow-md transition-all">
                <span className="font-semibold text-gray-800 group-hover:text-green-700">{l.label}</span>
                <ArrowRight className="inline ml-2 w-4 h-4 text-green-600" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
      )}
      <FaqSection faqs={route.faqs} className="rounded-2xl" />
    </>
  );
}
