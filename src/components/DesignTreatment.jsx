import React from 'react';
import { Droplets, Leaf, Settings, FlaskConical, Recycle, Shield, Zap, TrendingUp } from 'lucide-react';

export default function DesignTreatment() {
  const treatmentTechnologies = [
    "Preliminary treatment",
    "Primary and secondary treatment", 
    "Tertiary treatment/disinfection",
    "Biological nutrient removal (BNR)",
    "Real time control systems",
    "Advanced oxidation processes"
  ];

  const processModeling = [
    "Biological treatment optimization",
    "Chemical addition systems",
    "Wet weather treatment solutions", 
    "Odor source and dispersion control",
    "Computational fluid dynamics",
    "Data inventory, analysis and management",
    "Energy management systems",
    "Resource recovery processes",
    "Carbon inventory and emissions tracking"
  ];

  const operations = [
    "Plant operations and optimization",
    "Operator training and certification",
    "Process start-up and commissioning",
    "Equipment analysis and evaluation", 
    "Best treatment practices implementation",
    "Performance monitoring and reporting"
  ];

  const specializedServices = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      title: "Industrial Wastewater Treatment",
      description: "Customized treatment solutions for textile, pharmaceutical, food processing, and chemical industries with complex discharge requirements."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Zero Liquid Discharge Systems",
      description: "Advanced ZLD systems for water conservation and environmental compliance, recovering up to 95% of wastewater for reuse."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Membrane Bioreactor (MBR) Technology",
      description: "State-of-the-art MBR systems combining biological treatment with membrane filtration for superior effluent quality."
    },
    {
      icon: <Recycle className="w-8 h-8 text-orange-600" />,
      title: "Sludge Management & Dewatering",
      description: "Comprehensive sludge treatment, dewatering, and disposal solutions including biogas recovery systems."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm mb-6">
            <span className="opacity-75">Home</span>
            <span className="mx-2">&gt;</span>
            <span>Design & Treatment Services</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Design & Treatment Services</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Leading Pakistan's environmental solutions with innovative wastewater treatment and sustainable technology
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <FlaskConical className="w-10 h-10 text-green-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Wastewater Treatment & Plant Design</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Eco Pak Services' scientists and engineers have designed wastewater treatment facilities of varying capacities across Pakistan and the region. Our comprehensive experience encompasses advanced wastewater treatment facilities, residuals management, odor control, air pollution control, and water reuse systems. We possess significant expertise in all facets of wastewater liquid stream and solids stream treatment, ranging from conventional plants for organic removal to complex nutrient removal and resource recovery processes.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our project scope covers everything from compliance evaluations and feasibility studies to turnkey delivery of completely operational facilities. With a commitment to sustainability and environmental protection, Eco Pak Services stands at the forefront of Pakistan's green technology revolution.
          </p>
        </div>

        {/* Specialized Services Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Specialized Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-3 text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Three Column Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Treatment Technologies */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Settings className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Treatment Technologies</h3>
            </div>
            <p className="text-gray-600 mb-4">
              As one of Pakistan's emerging wastewater treatment companies, we are at the forefront in the application of advanced treatment technologies:
            </p>
            <ul className="space-y-2">
              {treatmentTechnologies.map((tech, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Process Modeling */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Process Modeling</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Using state-of-the-art process models and simulation software, we provide optimized solutions to address a wide range of challenges:
            </p>
            <ul className="space-y-2">
              {processModeling.map((process, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  {process}
                </li>
              ))}
            </ul>
          </div>

          {/* Operations */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Operations Excellence</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Eco Pak Services expertise runs the full lifecycle of projects, partnering with clients to determine best practices for operations:
            </p>
            <ul className="space-y-2">
              {operations.map((operation, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  {operation}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl text-white p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Additional Environmental Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                <Droplets className="w-8 h-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Water Recycling Systems</h4>
              <p className="text-sm opacity-90">Advanced water reuse and recycling solutions for industrial and municipal applications</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                <Shield className="w-8 h-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Environmental Compliance</h4>
              <p className="text-sm opacity-90">Comprehensive compliance monitoring and regulatory support services</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                <Leaf className="w-8 h-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Green Technology Integration</h4>
              <p className="text-sm opacity-90">Sustainable and energy-efficient treatment technology implementation</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                <Recycle className="w-8 h-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Resource Recovery</h4>
              <p className="text-sm opacity-90">Innovative solutions for energy and material recovery from waste streams</p>
            </div>
          </div>
        </div>

   
      </div>
    </div>
  );
}