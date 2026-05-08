export default function CodeOfConduct() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-600 mb-4">Code of Conduct</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our commitment to ethical business practices, environmental stewardship, and community responsibility guides every decision we make.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Integrity</h3>
          <p className="text-gray-600 leading-relaxed">
            We conduct our business with the highest standards of integrity and ethical behavior. Honesty, transparency, and accountability form the foundation of all our interactions with stakeholders, partners, and communities.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li>• Honest communication in all dealings</li>
            <li>• Transparent reporting and documentation</li>
            <li>• Ethical decision-making processes</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Environmental Responsibility</h3>
          <p className="text-gray-600 leading-relaxed">
            We are committed to environmental protection and sustainable practices in all our operations. Our goal is to minimize our ecological footprint while maximizing positive environmental impact through innovative solutions.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li>• Carbon footprint reduction initiatives</li>
            <li>• Waste minimization and recycling programs</li>
            <li>• Renewable energy adoption</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Quality Excellence</h3>
          <p className="text-gray-600 leading-relaxed">
            We strive for excellence in all our services and continuously improve our processes. Quality is not just a goal but a standard that permeates every aspect of our work, from initial planning to final delivery.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li>• Continuous improvement methodologies</li>
            <li>• Regular quality assessments</li>
            <li>• Best practice implementation</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Respect & Inclusion</h3>
          <p className="text-gray-600 leading-relaxed">
            We foster an inclusive environment where diversity is celebrated and every individual is treated with dignity and respect. We believe that diverse perspectives strengthen our organization and drive innovation.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li>• Zero tolerance for discrimination</li>
            <li>• Equal opportunity employment</li>
            <li>• Cultural sensitivity training</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Safety First</h3>
          <p className="text-gray-600 leading-relaxed">
            The safety and well-being of our employees, customers, and communities is our top priority. We maintain rigorous safety standards and continuously invest in training and equipment to ensure a safe working environment.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li>• Comprehensive safety training programs</li>
            <li>• Regular safety audits and inspections</li>
            <li>• Emergency response protocols</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Community Engagement</h3>
          <p className="text-gray-600 leading-relaxed">
            We are committed to being responsible corporate citizens and actively contribute to the communities where we operate. Through partnerships, volunteering, and local investment, we help build stronger communities.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li>• Local community partnerships</li>
            <li>• Employee volunteer programs</li>
            <li>• Educational initiatives and scholarships</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Commitment to Compliance</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Legal & Regulatory Compliance</h4>
            <p className="text-gray-600 mb-4">
              We strictly adhere to all applicable laws, regulations, and industry standards. Our compliance program ensures that we operate within legal boundaries while maintaining the highest ethical standards.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>• Regular compliance training and updates</p>
              <p>• Internal audit and monitoring systems</p>
              <p>• Whistleblower protection policies</p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Data Privacy & Security</h4>
            <p className="text-gray-600 mb-4">
              We protect the privacy and security of all personal and business data entrusted to us. Our data protection measures exceed industry standards and comply with international privacy regulations.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>• GDPR and CCPA compliance</p>
              <p>• Advanced cybersecurity measures</p>
              <p>• Regular security assessments</p>
            </div>
          </div>
        </div>
      </div>

      

      <div className="text-center mt-12 text-gray-600">
        <p className="text-sm">
          This Code of Conduct is reviewed annually and updated as needed to reflect our evolving values and commitment to excellence.
        </p>
        <p className="text-xs mt-2 opacity-75">
          Last updated: June 2025 | Version 3.2
        </p>
      </div>
    </div>
  );
}