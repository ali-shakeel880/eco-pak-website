import { ChevronDown, HelpCircle } from 'lucide-react';

// Accessible FAQ list. Answers live in the HTML (inside <details>), so they are
// crawlable and visible to search engines and AI assistants without JS.
export default function FaqSection({ faqs, title = 'Frequently Asked Questions', className = '' }) {
  if (!faqs?.length) return null;
  return (
    <section className={`py-16 bg-white ${className}`} aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-2 mb-4">
            <HelpCircle className="w-5 h-5 mr-2" aria-hidden="true" />
            <span className="font-medium">FAQs</span>
          </div>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group bg-gray-50 border border-gray-100 rounded-xl p-5 open:bg-green-50 open:border-green-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-800">{f.q}</h3>
                <ChevronDown className="w-5 h-5 flex-shrink-0 text-green-600 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
