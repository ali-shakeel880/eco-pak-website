import React from 'react';
import { Leaf, BarChart3, Factory, Globe, Target, Users, Heart, GraduationCap, Droplets, Building } from 'lucide-react';

export default function CarbonFootprint() {
  const strategicObjectives = [
    {
      icon: <Building className="w-6 h-6 text-blue-600" />,
      title: "Sustainable Urbanization",
      description: "Developing eco-friendly urban planning and infrastructure solutions"
    },
    {
      icon: <Droplets className="w-6 h-6 text-blue-500" />,
      title: "Management of Water Resources",
      description: "Efficient water conservation and sustainable resource management"
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-600" />,
      title: "Maintenance of Historical Places",
      description: "Preserving cultural heritage while implementing green technologies"
    },
    {
      icon: <Users className="w-6 h-6 text-pink-600" />,
      title: "Stop Gender Discrimination",
      description: "Promoting equality and inclusive environmental practices"
    },
    {
      icon: <Heart className="w-6 h-6 text-red-600" />,
      title: "Health Services Access",
      description: "Establishing systems for environmental health awareness and accessibility"
    },
    {
      icon: <Target className="w-6 h-6 text-orange-600" />,
      title: "Poverty Eradication",
      description: "Creating sustainable economic opportunities through green initiatives"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Women Empowerment Globalization",
      description: "Advancing women's participation in environmental leadership"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
      title: "Human Resource Development",
      description: "Conducting cutting-edge research and developing environmental leaders"
    }
  ];

  const carbonFootprintServices = [
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Cradle-to-Grave Assessment",
      description: "Comprehensive carbon footprint measurement covering development, production, distribution, and disposal processes for complete lifecycle analysis."
    },
    {
      icon: <Factory className="w-8 h-8 text-blue-600" />,
      title: "Supply Chain Optimization",
      description: "Identifying energy efficiency opportunities in factories, warehouses, and distribution networks to reduce operational carbon emissions."
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "Greenhouse Gas Measurement",
      description: "Precise measurement and reporting of greenhouse gases produced, expressed in standardized carbon dioxide equivalent units."
    },
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "Energy Efficiency Solutions",
      description: "Implementation of simple yet effective energy-saving measures to reduce carbon footprint and operational costs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          
          <h1 className="text-5xl font-bold mb-4">Carbon Footprint Services</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Comprehensive carbon footprint assessment and sustainable solutions for environmental compliance and business optimization
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Globe className="w-10 h-10 text-green-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Understanding Carbon Footprint</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            A fundamental component of environmental regulations is the need to measure the cradle-to-grave 'Carbon Footprint' involved in the development, production, distribution, and disposal process for a product. A Carbon Footprint calculation is a measurement of the impact a company's activities have on the environment and is expressed in terms of greenhouse gases produced, measured in units of carbon dioxide equivalent.
          </p>
          <div className="bg-gray-50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <blockquote className="text-gray-700 italic text-lg">
              "The more we learn here, the more there's real business and consumer opportunity, in that there's a lot of unharvested efficiencies yet... When you look back at the supply chain and at factories and warehouses and you start thinking about their basic needs for energy there's a huge opportunity to do some relatively simple things to save energy..."
            </blockquote>
            <cite className="text-sm text-gray-600 mt-2 block">
              - Jim Stanway, Head of Wal-Mart's Greenhouse Gas Strategy, Financial Times, 24 September 2007
            </cite>
          </div>
        </div>

        {/* Carbon Footprint Services Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Carbon Footprint Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {carbonFootprintServices.map((service, index) => (
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

        {/* Strategic Planning Objectives */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Strategic Planning Objectives</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              At Eco Pak Services, our strategic planning encompasses comprehensive objectives that align environmental sustainability with social responsibility and economic development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicObjectives.map((objective, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  {objective.icon}
                  <h3 className="font-semibold text-gray-800 ml-2 text-sm">{objective.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Process */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Carbon Assessment Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Assessment</h3>
              <p className="text-gray-600">Detailed carbon footprint measurement and comprehensive environmental impact analysis across all operational areas.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Strategy Development</h3>
              <p className="text-gray-600">Customized carbon reduction plans and implementation strategies tailored to your specific business needs and goals.</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Implementation</h3>
              <p className="text-gray-600">Ongoing monitoring, reporting, and optimization of carbon reduction initiatives with measurable results.</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl text-white p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Eco Pak Services?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                <Factory className="w-8 h-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Industry Expertise</h4>
              <p className="text-sm opacity-90">Deep understanding of industrial processes and environmental regulations</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                <BarChart3 className="w-8 h-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Data-Driven Approach</h4>
              <p className="text-sm opacity-90">Scientific methodology and precise measurement techniques</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                <Globe className="w-8 h-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Global Standards</h4>
              <p className="text-sm opacity-90">Compliance with international environmental standards and best practices</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Start Your Carbon Footprint Journey</h2>
          <p className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto">
            Partner with Eco Pak Services to measure, manage, and reduce your carbon footprint. Our comprehensive approach ensures sustainable business practices while maintaining operational efficiency and regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-green-50 border border-green-200 px-8 py-3 rounded-lg">
              <span className="text-green-700 font-semibold">Ready to reduce your environmental impact?</span>
            </div>
            <div className="bg-blue-50 border border-blue-200 px-8 py-3 rounded-lg">
              <span className="text-blue-700 font-semibold">Contact us for a comprehensive assessment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}