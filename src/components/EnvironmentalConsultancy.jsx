import { useState } from 'react';
import { FileText, Droplets, Zap, ClipboardCheck, Recycle, Building, Users, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function EnvironmentalConsultancy() {
  const [activeTab, setActiveTab] = useState('environmental-studies');

  const services = [
    {
      id: 'environmental-studies',
      title: 'Environmental Studies & Report',
      icon: FileText,
      description: 'Comprehensive environmental studies and reports as per Environmental Protection Act 1997 of Pakistan and international donor guidelines.',
      details: {
        overview: 'Eco Pak Services is familiar with the legal requirements and procedure for environmental studies and its approval as per Environmental Protection Act 1997 of Pakistan as well as with the policies and guidelines of international donors regarding environmental and social aspects of development projects.',
        scope: [
          'Terms of Reference (TOR) and Initial Environmental Examination (IEE)',
          'Scoping Document/ Terms of Reference and Environmental Impact Assessment (EIA)',
          'Social Impact Assessment (SIA)',
          'Environmental and Social Impact Assessment (ESIA)',
          'Acquisition Compensation and Relocation Plan (ACRP)',
          'Resettlement and Rehabilitation Plan (RRP)',
          'Vulnerable Community Development Plan (VCDP)',
          'Environmental Monitoring',
          'Environmental and Mitigation management plan'
        ],
        thrustAreas: [
          'Baseline Environmental Assessment',
          'Environmental Management Plan (EMP)',
          'Acquisition, Compensation and Relocation Plan (ACRP)',
          'Resettlement and Rehabilitation Plan (RRP)',
          'Environment Protection Plan (EPP)',
          'Solid Waste Management Plan',
          'Occupational Health and Safety Plan',
          'Muck Disposal and Management Plan',
          'Compensatory Aforestation Plan',
          'Restoration and Revegetation Plan',
          'Vulnerable Community Development Plan (VCDP)',
          'Review of Environmental Reports'
        ],
        authorities: [
          'Environmental protection agencies',
          'Asian development bank',
          'World bank',
          'US-AID',
          'WWF',
          'IMF',
          'WHO',
          'UNICEF'
        ]
      }
    },
    {
      id: 'water-energy-audit',
      title: 'Water / Energy Audit',
      icon: Droplets,
      description: 'Comprehensive water and energy auditing services to evaluate consumption trends and propose conservation strategies.',
      details: {
        overview: 'The research enthusiastic employees of Eco Pak Services Group conduct environmental audits including water audit, energy audit and gas emission audit of different industries according to international standards and guidelines.',
        waterAudit: {
          description: 'An important element of our consulting services is the water audit program. We offers water audits to federal, multi-family and commercial customers.',
          services: [
            'Comprehensive on-site survey',
            'Water meter data collection',
            'Identify all sources of water',
            'Identify water using equipment',
            'Detect leaks',
            'Provide water conservation measures',
            'Water balance analysis',
            'Detailed conservation recommendations',
            'Cost-benefit analysis for each measure'
          ]
        },
        energyConservation: {
          totalAnalysis: [
            'Complete Health check for all forms of Energy Systems',
            'Awareness & Training Programs on Relevant Topics',
            'Idea Generation Campaigns',
            'Provide Techno-Economically Feasible Suggestions'
          ],
          energyAudit: [
            'Energy Accounting & Balancing',
            'Specific Energy Consumption',
            'Performance Of Major Equipments',
            'Study of Distribution Systems',
            'Study of Process & Operations',
            'Thermography of Electric Panel'
          ],
          utilityAudit: [
            'Performance testing of all Utility Equipments',
            'Identification of Potential Areas',
            'Provide Techno-Economically Feasible Suggestions',
            'Utility Audit Report'
          ],
          processAudit: [
            'Energy & Mass Balance of Entire Plant',
            'Energy & Mass Balance of Major Operations & Processes',
            'Identification Of Potential Areas',
            'Provide Techno-Economically Feasible Suggestions for optimize total cost of Energy',
            'Process Energy Audit Report'
          ],
          specialServices: [
            'Chiller Performance',
            'Pump Performance',
            'Power & Harmonics Analysis',
            'Thermal Imaging',
            'Indoor Parameters'
          ]
        },
        analysisAreas: [
          'Energy Efficiency – Ratio of useful energy to the total energy supplied',
          'Yield – Ratio of useful product to the total input material',
          'Major sources of energy losses with quantification',
          'Major sources material losses with quantification',
          'Identification of major operations & processes'
        ]
      }
    },
    {
      id: 'environmental-audits',
      title: 'Environmental Audits',
      icon: ClipboardCheck,
      description: 'Compliance status reports and annual compliance reporting services for environmental approvals.',
      details: {
        csr: {
          title: 'Compliance Status Report (CSR)',
          description: 'Once the industry or the proposed project gets environmental approval under section 12 EPA, A compliance report is needed under section 13 and 14 compliance all the conditions are fulfilled according to the NOC and further suggested and recommended.',
          clients: [
            'KnN\'s',
            'Honda',
            'Sitara Chemicals',
            'Five Star Foods Pvt Limited',
            'Sapphire',
            'US Apparel'
          ]
        },
        acr: {
          title: 'Annual Compliance Report',
          description: 'After issuance of compliance confirmation, under section 18 (2) an annual report would be submitted, summarizing operational performance of the project with reference to conditions of approval and maintenance and mitigatory measures adopted for projects.',
          clients: [
            'Tetra pak',
            'Coca Cola',
            'KnN\'s',
            'BBJ pipe',
            'Auriga Chemical Enterprises',
            'Ismail Industries'
          ]
        }
      }
    },
    {
      id: 'solid-waste-management',
      title: 'Solid Waste Management',
      icon: Recycle,
      description: 'Integrated solid waste management systems that are economically affordable, socially acceptable and environmentally effective.',
      details: {
        overview: 'ISWM takes an overall approach to creating sustainable systems that are economically affordable, socially acceptable and environmentally effective. An integrated solid waste management system involves the use of a range of different treatment methods.',
        approach: 'We provide data-driven solutions to optimize recycling, diversion and waste management programs for federal government entities, state agencies and municipalities; trade associations and other NGOs; and private sector waste generators.',
        services: [
          'Waste Characterization, Generation and Composition Studies',
          'Collection System Optimization and Technology Upgrade',
          'Collection, Transfer, Disposal and Processing Procurement Assistance',
          'Visible Litter Surveys and Litter Policy Research',
          'Solid Waste Management and Zero Waste Plans',
          'Recycling & Composting Program Development',
          'Business and Institutional Waste and Recycling Audits',
          'GIS & Computer-Optimized Routing',
          'Market Analysis and Feasibility Studies'
        ]
      }
    }
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-600 mb-4">Environmental Consultancy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional environmental consulting services compliant with Pakistani and international standards
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                activeTab === service.id 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-transparent hover:border-green-200'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <IconComponent className={`w-12 h-12 mb-4 ${
                  activeTab === service.id ? 'text-green-600' : 'text-gray-600'
                }`} />
                <h3 className={`text-lg font-semibold mb-3 ${
                  activeTab === service.id ? 'text-green-600' : 'text-gray-800'
                }`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Service Information */}
      {activeService && (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <activeService.icon className="w-10 h-10 text-green-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">{activeService.title}</h2>
          </div>

          <div className="prose max-w-none">
            {/* Overview */}
            {activeService.details.overview && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Overview</h3>
                <p className="text-gray-700 leading-relaxed">{activeService.details.overview}</p>
              </div>
            )}

            {/* Scope of Services */}
            {activeService.details.scope && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Scope of Services</h3>
                <div className="grid md:grid-cols-1 gap-2">
                  {activeService.details.scope.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Thrust Areas */}
            {activeService.details.thrustAreas && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Major Thrust Areas</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {activeService.details.thrustAreas.map((area, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Authorities */}
            {activeService.details.authorities && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Legislator Bodies & Guidelines</h3>
                <div className="flex flex-wrap gap-3">
                  {activeService.details.authorities.map((authority, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {authority}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Water Audit Details */}
            {activeService.details.waterAudit && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Water Auditing Services</h3>
                <p className="text-gray-700 mb-4">{activeService.details.waterAudit.description}</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {activeService.details.waterAudit.services.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <Droplets className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Energy Conservation */}
            {activeService.details.energyConservation && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Energy Conservation Services</h3>
                
                {/* Total Energy Analysis */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Total Energy Analysis & Management</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {activeService.details.energyConservation.totalAnalysis.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <Zap className="w-4 h-4 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Energy Audit */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Energy Audit</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {activeService.details.energyConservation.energyAudit.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Utility Audit */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Utility Audit</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {activeService.details.energyConservation.utilityAudit.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process Energy Audit */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Process Energy Audit</h4>
                  <div className="grid md:grid-cols-1 gap-2">
                    {activeService.details.energyConservation.processAudit.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Services */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Specialized Performance Analysis</h4>
                  <div className="flex flex-wrap gap-3">
                    {activeService.details.energyConservation.specialServices.map((service, index) => (
                      <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Analysis Areas */}
            {activeService.details.analysisAreas && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Analysis Areas</h3>
                <div className="grid md:grid-cols-1 gap-2">
                  {activeService.details.analysisAreas.map((area, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Compliance Status Report */}
            {activeService.details.csr && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{activeService.details.csr.title}</h3>
                <p className="text-gray-700 mb-4">{activeService.details.csr.description}</p>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Our Clients Include:</h4>
                <div className="flex flex-wrap gap-3">
                  {activeService.details.csr.clients.map((client, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Annual Compliance Report */}
            {activeService.details.acr && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{activeService.details.acr.title}</h3>
                <p className="text-gray-700 mb-4">{activeService.details.acr.description}</p>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Our Clients Include:</h4>
                <div className="flex flex-wrap gap-3">
                  {activeService.details.acr.clients.map((client, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Solid Waste Management Services */}
            {activeService.details.services && activeService.id === 'solid-waste-management' && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Services Include</h3>
                <p className="text-gray-700 mb-4">{activeService.details.approach}</p>
                <div className="grid md:grid-cols-1 gap-2">
                  {activeService.details.services.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <Recycle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-center text-white">
  <h2 className="text-3xl font-bold mb-4">Need Professional Environmental Consulting?</h2>
  <p className="text-xl mb-6">Get expert guidance on environmental compliance and sustainability</p>

  <Link
    to="/contact"
    className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
  >
    Schedule Consultation
  </Link>
</div>
    </div>
  );
}