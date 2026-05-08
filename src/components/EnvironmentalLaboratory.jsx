import { useState } from 'react';
import { Wind, Factory, Car, Cloud, Volume2, Droplets, FlaskConical, Shield, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom'; 
export default function EnvironmentalLaboratory() {
  const [activeTab, setActiveTab] = useState('air-monitoring');

  const services = [
    {
      id: 'air-monitoring',
      title: 'Air Monitoring',
      icon: Wind,
      description: 'Complete range of air quality services including ambient air quality and odor monitoring, workplace monitoring and assessment.',
      details: {
        overview: 'Eco Pak Services provides a complete range of air quality services including, Ambient air quality and odor monitoring, Workplace monitoring and assessment and air quality odor impact assessment.',
        services: [
          'Air quality assessment',
          'Dispersion modelling',
          'Odor assessment',
          'Indoor air monitoring'
        ],
        comprehensive: [
          'Assessment in support of planning applications',
          'Air quality environmental impact assessment (EIA)',
          'Dispersion modelling assessments of road and industrial emissions',
          'ODOUR assessment',
          'Emission inventories',
          'Local air quality management (LAQM) review and assessment services',
          'Environmental permitting application support',
          'Dust and odor management plans',
          'Construction environmental plans (CEMPS)',
          'Scoping studies'
        ],
        standards: ['OSHA', 'PEQS', 'NEQS']
      }
    },
    {
      id: 'stack-emission',
      title: 'Stack Emission Monitoring',
      icon: Factory,
      description: 'World-leading stack sampling and emissions monitoring expertise with state-of-the-art testing equipment.',
      details: {
        overview: 'Our programs can be tailored to your specific needs and overseen by field teams backed by chemists and technicians based in specialist stack sampling facilities.',
        services: [
          'Emission monitoring for compliance',
          'Gas turbine commissioning and performance testing',
          'Process optimization testing',
          'Verification studies by national & international protocols',
          'Combustion gases (NO, NO2, SO2, O2, CO2, CO, UHC)',
          'TOC/VOC',
          'Particulate matter',
          'Halides',
          'Multi-phase and trace elements',
          'Dioxins, PAHs and PCBs',
          'Ambient air quality monitoring',
          'Regulatory compliance dispersion modelling'
        ],
        industries: ['chemicals', 'metals', 'mining', 'waste', 'petroleum', 'printing']
      }
    },
    {
      id: 'vehicular-emission',
      title: 'Vehicular Emission Monitoring',
      icon: Car,
      description: 'Latest vehicle emission measurement technology to ensure policy focuses on the most polluting sectors of the vehicle fleet.',
      details: {
        overview: 'By accurately measuring real-world driving emissions, we deliver the local insight necessary to inform the cost-effective design of low-emission policy.',
        measurements: [
          'Nitric oxide',
          'Nitrogen dioxide',
          'Particulate matter',
          'Hydrocarbons',
          'Carbon monoxide',
          'Ammonia'
        ],
        benefits: [
          'Real-world driving emissions measurements that accurately characterize the vehicle fleet mix',
          'Quantified and highly disaggregated emissions data to underpin robust mitigation measures',
          'Assessing abatement technology performance over time',
          'Measurement data to support compliance management within Clean Air and Low Emission Zones'
        ]
      }
    },
    {
      id: 'meteorological',
      title: 'Meteorological Monitoring',
      icon: Cloud,
      description: 'Study of Earth\'s atmosphere and variations in temperature and moisture patterns that produce different weather conditions.',
      details: {
        overview: 'Meteorology plays an important part during the environmental survey and study.',
        variables: [
          'Wind speed and direction',
          'Air temperature',
          'Air pressure',
          'Air humidity',
          'Precipitation',
          'Haze and contents of the air',
          'Solar and terrestrial radiation'
        ]
      }
    },
    {
      id: 'noise-lux',
      title: 'Noise / Lux Monitoring',
      icon: Volume2,
      description: 'Professional noise level assessment and light level monitoring for environmental impact evaluation.',
      details: {
        noise: {
          overview: 'Noise survey is conducted in areas where noise exposure is likely to be hazardous. Noise pollution has adverse health outcomes, including heart disease and hearing loss.',
          areas: [
            'Commercial areas',
            'Construction sites',
            'Indoor Laboratories',
            'Roads/ Highway',
            'Generator Areas / Canopy',
            'Industrial Estates'
          ]
        },
        lux: {
          overview: 'Excessive levels of artificial light produce annoyance and can adversely affect health. LUX level according to our national and international environmental standards.'
        }
      }
    },
    {
      id: 'water-analysis',
      title: 'Water Analysis',
      icon: Droplets,
      description: 'Comprehensive water quality analysis for drinking water, ensuring safety and compliance with quality standards.',
      details: {
        overview: 'Water is a vital natural resource which is essential for multiplicity of purpose. Water quality standards describe the quality parameters set for drinking water.',
        focus: 'Drinking water or potable water is water safe enough to be consumed by humans.'
      }
    },
    {
      id: 'wastewater',
      title: 'Waste Water Analysis',
      icon: FlaskConical,
      description: 'Analytical services for municipal agencies, NPDES permit holders, and various industries.',
      details: {
        overview: 'We provide analytical services for many clients including municipal agencies, NPDES permit holders, metal finishing industries, engineering films, chemical suppliers, and consulting firms.',
        treatability: [
          'Chemical Precipitation',
          'Settleability',
          'Filterability',
          'Biological Treatment',
          'Biological Toxicity',
          'Sludge Generation',
          'Influent Characteristics',
          'Process Characteristics',
          'Effluent Quality'
        ],
        analytical: [
          'Organic Analysis',
          'Metals Analysis',
          'Bacteriological Analysis',
          'Inorganic Analysis',
          'TCLP and RCRA Testing',
          'Field Service',
          'Sampling Service—automatic composite & automatic sequential'
        ]
      }
    },
    {
      id: 'industrial-hygiene',
      title: 'Industrial Hygiene',
      icon: Shield,
      description: 'Occupational health and safety focus with comprehensive workplace hazard assessment and control measures.',
      details: {
        overview: 'Industrial hygienists analyze, identify, and measure workplace hazards or stresses that can cause sickness, impaired health, or significant discomfort in workers.',
        monitoring: [
          'Air',
          'Noise',
          'Radiation',
          'Mold',
          'Vapor intrusion',
          'Asbestos',
          'Lead'
        ],
        services: [
          'Design and evaluation of ventilation equipment',
          'Respiratory Program',
          'Confined Space Entry',
          'Personal Protective Equipment',
          'Indoor Air Quality Surveys (IAQ)',
          'Hazardous Materials Management',
          'Process Safety Management',
          'Emergency Response Plans',
          'Ergonomics'
        ]
      }
    },
    {
      id: 'equipment',
      title: 'Equipment List',
      icon: Wrench,
      description: 'State-of-the-art laboratory equipment and instrumentation for comprehensive environmental testing.',
      details: {
        equipment: [
          'Analytical Balance BSM-320',
          'BOD Incubator TC140G Lovibond',
          'Conductivity/TDS/Salinity meter HI-98192',
          'Digital Light Meter / Lux Meter Model EA-31',
          'Digital Sound Meter (Noise Level Meter) AR824',
          'DO Meter Hanna HI9147',
          'Dynamic Halo DB-20 UV-Vis Spectrophotometer',
          'Fine Dust Sampler PM10 Instrumex',
          'Flame Photometer Model PFP7',
          'Testo 350 Flue Gas Analyzer',
          'Composite Liquid Sampling Bio-troll',
          'Microscope',
          'Autoclave HA-300P',
          'Laminar Flow Cabinet',
          'Kjeldahl Distillation Unit'
        ]
      }
    }
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-600 mb-4">Environmental Laboratory Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive environmental testing and monitoring services with state-of-the-art equipment and expert analysis
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
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
              <div className="flex items-center mb-4">
                <IconComponent className={`w-8 h-8 mr-3 ${
                  activeTab === service.id ? 'text-green-600' : 'text-gray-600'
                }`} />
                <h3 className={`text-lg font-semibold ${
                  activeTab === service.id ? 'text-green-600' : 'text-gray-800'
                }`}>
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
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

            {/* Services List */}
            {activeService.details.services && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Services Include</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {activeService.details.services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Comprehensive Services */}
            {activeService.details.comprehensive && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Comprehensive Air Quality Services</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {activeService.details.comprehensive.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Standards */}
            {activeService.details.standards && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Standards We Follow</h3>
                <div className="flex flex-wrap gap-3">
                  {activeService.details.standards.map((standard, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {standard}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Measurements */}
            {activeService.details.measurements && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">We Measure</h3>
                <div className="grid md:grid-cols-3 gap-2">
                  {activeService.details.measurements.map((measurement, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{measurement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Variables */}
            {activeService.details.variables && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Meteorological Variables</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {activeService.details.variables.map((variable, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{variable}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Noise and Lux Details */}
            {activeService.details.noise && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Noise Level Monitoring</h3>
                <p className="text-gray-700 mb-4">{activeService.details.noise.overview}</p>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Areas We Cover</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {activeService.details.noise.areas.map((area, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeService.details.lux && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Lux Level Monitoring</h3>
                <p className="text-gray-700">{activeService.details.lux.overview}</p>
              </div>
            )}

            {/* Treatability Testing */}
            {activeService.details.treatability && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Wastewater Treatability Testing</h3>
                <div className="grid md:grid-cols-3 gap-2">
                  {activeService.details.treatability.map((test, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{test}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytical Services */}
            {activeService.details.analytical && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytical Services</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {activeService.details.analytical.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Monitoring */}
            {activeService.details.monitoring && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Exposure Monitoring</h3>
                <div className="grid md:grid-cols-4 gap-2">
                  {activeService.details.monitoring.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Equipment List */}
            {activeService.details.equipment && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Laboratory Equipment</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {activeService.details.equipment.map((equipment, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{equipment}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Industries */}
            {activeService.details.industries && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Industries We Serve</h3>
                <div className="flex flex-wrap gap-3">
                  {activeService.details.industries.map((industry, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Call to Action */}
    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-center text-white">
  <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
  <p className="text-xl mb-6">Contact us today for comprehensive environmental laboratory services</p>
  
  <Link
    to="/contact"
    className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
  >
    Contact Us Today
  </Link>
</div>
    </div>
  );
}