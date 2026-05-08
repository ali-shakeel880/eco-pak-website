import React, { useState } from 'react';
import { ChevronRight, Scale, FileText, Users, Award, CheckCircle } from 'lucide-react';

export default function TechnoLegal() {
  const [activeTab, setActiveTab] = useState('overview');

  const services = [
    {
      title: "Environmental Tribunals",
      description: "Expert representation and consultation for environmental tribunal cases",
      icon: <Scale className="w-8 h-8" />
    },
    {
      title: "Green Benches",
      description: "Specialized support for green bench proceedings and environmental justice",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Court Hearings",
      description: "Professional legal support for environmental court matters and litigation",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Compliance Consulting",
      description: "Comprehensive environmental legal compliance and regulatory guidance",
      icon: <Award className="w-8 h-8" />
    }
  ];

  const expertise = [
    "Environmental Impact Assessment (EIA) Legal Support",
    "NEQS Compliance Documentation",
    "Environmental Permits and Licensing",
    "Waste Management Legal Framework",
    "Water Quality Standards Compliance",
    "Air Quality Regulations",
    "Industrial Effluent Standards",
    "Environmental Audit Legal Requirements"
  ];

  const caseTypes = [
    {
      category: "Environmental Violations",
      cases: ["Industrial pollution cases", "Waste discharge violations", "Air quality breaches"]
    },
    {
      category: "Regulatory Compliance",
      cases: ["EIA approval processes", "Environmental clearances", "Permit applications"]
    },
    {
      category: "Litigation Support",
      cases: ["Expert witness testimony", "Technical evidence preparation", "Regulatory interpretation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
        
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Techno-Legal Services</h1>
              <p className="text-xl text-green-100 mb-8">
                Eco Pak Services provides specialized techno-legal expertise, bridging environmental 
                science with legal compliance to ensure your projects meet all regulatory requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Eco Pak?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Expert environmental lawyers & engineers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Proven track record in environmental litigation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Comprehensive regulatory compliance support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Local & international project experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Techno-Legal Services</h2>
          <p className="text-xl text-gray-600">Comprehensive legal support for environmental compliance</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'expertise', label: 'Areas of Expertise' },
                { id: 'cases', label: 'Case Types' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-semibold transition-colors ${
                    activeTab === tab.id
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Eco Pak Services is a premier environmental consulting firm specializing in techno-legal services. 
                  We provide independent, specialized services across all aspects of compliance with local and 
                  international regulations for project executing agencies, employers, contractors, consultants, 
                  and manufacturers.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our core focus is ensuring strict adherence to environmental laws and regulations set by 
                  regulatory authorities. Our highly experienced and competent team combines technical 
                  environmental expertise with deep legal knowledge to deliver comprehensive solutions.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                    <div className="text-gray-600">Years of Experience</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                    <div className="text-gray-600">Cases Handled</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                    <div className="text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'expertise' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Areas of Expertise</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'cases' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Types of Cases We Handle</h3>
                <div className="space-y-6">
                  {caseTypes.map((type, index) => (
                    <div key={index} className="border-l-4 border-green-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">{type.category}</h4>
                      <ul className="space-y-2">
                        {type.cases.map((case_, caseIndex) => (
                          <li key={caseIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                            {case_}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we approach your techno-legal challenges</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Initial Consultation", desc: "Comprehensive case assessment and strategy development" },
              { step: "02", title: "Technical Analysis", desc: "In-depth environmental and technical evaluation" },
              { step: "03", title: "Legal Strategy", desc: "Customized legal approach based on regulations and precedents" },
              { step: "04", title: "Execution & Support", desc: "Full representation and ongoing compliance monitoring" }
            ].map((process, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}