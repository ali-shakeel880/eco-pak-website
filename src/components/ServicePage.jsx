import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, MessageCircle, Factory } from 'lucide-react';
import FaqSection from './FaqSection';
import { findRoute } from '../seo/routes.js';
import { SITE } from '../seo/site.js';
import { trackEvent } from '../seo/analytics.js';

// Shared layout for keyword-focused service landing pages. Content comes from
// src/content/servicePages.js; FAQs come from the route config.
export default function ServicePage({ page }) {
  const route = findRoute(page.path);
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <p className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm mb-6">
            {page.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-4xl">{page.h1}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-8">{page.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
              Request a Quote <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
            <a
              href={`tel:${SITE.phones[0].tel}`}
              onClick={() => trackEvent('phone_click', { location: page.path })}
              className="inline-flex items-center justify-center border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" aria-hidden="true" /> {SITE.phones[0].display}
            </a>
          </div>
        </div>
      </section>

      {/* Body sections */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {page.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{s.heading}</h2>
            {s.paragraphs?.map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-4 max-w-4xl">{p}</p>
            ))}
            {s.items && (
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {s.items.map((it) => (
                  <div key={it.title} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {it.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{it.text}</p>
                  </div>
                ))}
              </div>
            )}
            {s.steps && (
              <ol className="mt-6 space-y-4">
                {s.steps.map((st, i) => (
                  <li key={st.title} className="flex gap-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-green-600 text-white font-bold flex items-center justify-center">{i + 1}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">{st.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{st.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
            {s.note && <p className="mt-4 text-sm text-gray-500 italic max-w-4xl">{s.note}</p>}
          </section>
        ))}

        {/* Industries */}
        {page.industries && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Industries We Serve</h2>
            <ul className="flex flex-wrap gap-3">
              {page.industries.map((ind) => (
                <li key={ind} className="inline-flex items-center bg-green-50 text-green-800 border border-green-100 rounded-full px-4 py-2 text-sm">
                  <Factory className="w-4 h-4 mr-2" aria-hidden="true" /> {ind}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related services */}
        {page.related && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Related Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.related.map((r) => (
                <Link key={r.path} to={r.path} className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-green-400 hover:shadow-md transition-all">
                  <span className="font-semibold text-gray-800 group-hover:text-green-700">{r.label}</span>
                  <ArrowRight className="inline ml-2 w-4 h-4 text-green-600" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <FaqSection faqs={route.faqs} className="bg-gray-50" />

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{page.ctaHeading}</h2>
          <p className="text-lg text-white/90 mb-8">
            Share your site location, requirement and any EPA letter you have received, and our Lahore team will reply with a scope and quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 inline-flex items-center justify-center">
              Contact Us <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
            <a
              href={`https://wa.me/${SITE.phones[0].wa}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { location: page.path })}
              className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 w-5 h-5" aria-hidden="true" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
