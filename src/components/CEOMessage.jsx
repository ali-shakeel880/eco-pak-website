import React from 'react';
import { Leaf, Award, Users, Target, Shield, Recycle } from 'lucide-react';

import { Link } from 'react-router-dom';

export default function CEOMessage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-green-700 mb-4">Message from Our CEO</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto"></div>
      </div>

      {/* Main CEO Message */}
      <div className="grid lg:grid-cols-3 gap-12 mb-16">
        {/* CEO Photo and Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="relative w-56 h-64 mx-auto mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 shadow-xl"></div>
              <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="/Mr%20Kashif%20Chaudhary.jpeg" 
                  alt="Mr Kashif Chaudhary" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Mr Kashif Chaudhary</h3>
            <p className="text-green-600 font-semibold text-lg">Eco Pak Services</p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-center space-x-4">
                <Leaf className="w-6 h-6 text-green-600" />
                <Award className="w-6 h-6 text-blue-600" />
                <Shield className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* CEO Message Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-6 text-gray-700">
                Dear Valued Partners and Stakeholders,
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Welcome to <strong className="text-green-600">Eco Pak Services</strong>, where environmental excellence meets innovative solutions. As the Chief Executive Officer, I am immensely proud to lead an organization that has been at the forefront of environmental protection and sustainability since our establishment in 2016.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Our journey began with the <strong>Eco Pak Services Research Institute</strong>, established under Section 42 with a clear mission: Research and development for sustainability. Today, we have evolved into a comprehensive environmental solutions provider, offering world-class services that span across multiple domains of environmental protection and compliance.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                At Eco Pak Services, we understand that being eco-friendly is not just a business practice—it's a lifestyle and a responsibility we owe to future generations. Our commitment goes far beyond traditional environmental services; we are dedicated to creating lasting positive impacts on Pakistan's environmental landscape.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-gray-700">
                Through our comprehensive suite of services and unwavering commitment to excellence, we continue to set new standards in environmental consulting, research, and sustainable solutions. Together, we are building a cleaner, greener Pakistan for generations to come.
              </p>

              <div className="border-l-4 border-green-500 pl-6 italic text-lg text-gray-600">
                "Environmental excellence is not just our goal—it's our responsibility to future generations."
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Overview */}
    {/* Our Services Overview */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Comprehensive Services</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Environmental Laboratory Services",
        description: "Advanced testing and analysis services through our established research institute, providing accurate environmental assessments and monitoring.",
        icon: <Shield className="w-8 h-8 text-green-600" />,
        link: "/services/environmental-laboratory"
      },
      {
        title: "Environmental Consultancy",
        description: "Expert guidance on legal requirements and procedures for environmental studies, ensuring full compliance with Environmental Protection Act 1997.",
        icon: <Users className="w-8 h-8 text-blue-600" />,
        link: "/services/environmental-consultancy"
      },
      {
        title: "Techno Legal Services",
        description: "Specialized independent services covering all aspects of compliance with local and international environmental regulations.",
        icon: <Award className="w-8 h-8 text-green-600" />,
        link: "/services/techno-legal"
      },
      {
        title: "Research Institute",
        description: "Dedicated research and development facility focused on sustainable solutions and environmental innovation since 2016.",
        icon: <Target className="w-8 h-8 text-blue-600" />,
        link: "/services/research-institute"
      },
      {
        title: "Treatment & Design Services",
        description: "Advanced wastewater treatment facility design with our experienced scientists and engineers, covering various capacities and technologies.",
        icon: <Recycle className="w-8 h-8 text-green-600" />,
        link: "/services/design-treatment"
      },
      {
        title: "Carbon Footprint Assessment",
        description: "Comprehensive cradle-to-grave carbon footprint measurement covering development, production, distribution, and disposal phases.",
        icon: <Leaf className="w-8 h-8 text-blue-600" />,
        link: "/services/carbon-footprint"
      }
    ].map((service, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-4">
          {service.icon}
          <h3 className="text-xl font-semibold text-gray-800 ml-3">{service.title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{service.description}</p>
        <Link
          to={service.link}
          className="mt-4 inline-block text-green-600 font-semibold hover:text-green-700 transition-colors duration-200"
        >
          Learn More →
        </Link>
      </div>
    ))}
  </div>
</div>


      {/* Vision, Mission & Values */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-8 text-white">
          <Target className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-green-50 leading-relaxed">
            To be the leading environmental solutions provider, creating a sustainable future for generations to come through innovative technologies and expert services.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
          <Shield className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-blue-50 leading-relaxed">
            Delivering comprehensive environmental services with integrity, expertise, and commitment to environmental protection and regulatory compliance.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Core Values</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <Award className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Quality Assurance</h4>
            <p className="text-gray-600">
              Maintaining the highest standards in all our services through rigorous quality control processes and continuous improvement initiatives.
            </p>
          </div>
          <div className="text-center">
            <Leaf className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Environmental Excellence</h4>
            <p className="text-gray-600">
              Being eco-friendly today is becoming more and more important. It goes far beyond just basic practices—it's a complete lifestyle transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white mb-16">
        <h3 className="text-3xl font-bold text-center mb-8">Our Environmental Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { percentage: "98%", label: "Recycling Efficiency" },
            { percentage: "85%", label: "Water Treatment" },
            { percentage: "92%", label: "Ecosystem Protection" },
            { percentage: "88%", label: "Renewable Energy" }
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{metric.percentage}</div>
              <div className="text-green-100">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
}