import React from 'react';
import { Award, Shield, Users, Target, CheckCircle, Microscope, FileCheck, Globe } from 'lucide-react';

export default function QualityPolicy() {
  const commitments = [
    {
      icon: Microscope,
      title: "Good Laboratory Practices (GLP)",
      description: "The Lab Management is committed to meet the requirements of its customers through implementing Good Lab Practices (GLP), providing technical valid results of its testing/calibration activities and consistent operations of the laboratory."
    },
    {
      icon: Shield,
      title: "Confidentiality & Impartiality",
      description: "The Management is committed to confidentiality and impartiality for all laboratory activities."
    },
    {
      icon: FileCheck,
      title: "Quality Management System",
      description: "The Lab Management is committed to accomplish current Good Lab Practices by application of sound LQMS (Lab Quality Management System) and complying with the applicable statutory and regulatory requirements at all the time."
    },
    {
      icon: Target,
      title: "Quality of Results",
      description: "The Lab Management understands that 'Quality of results' is obtained through combination of using standard method, appropriate calibrated equipment, updated procedures and highly skilled, impartial and competent personnel."
    },
    {
      icon: Users,
      title: "Competent Personnel",
      description: "The Lab Management is committed to carry out its testing/calibration activities within the laboratory through trained qualified, impartial and competent personnel. Our staff is provided appropriate training to upgrade their knowledge, enhance their competency, make them familiarize with quality system documentation and implement Lab's policies & procedures at their work place."
    },
    {
      icon: Globe,
      title: "ISO/IEC 17025:2017 Compliance",
      description: "The Lab Management is committed to comply with the applicable requirements of International Standard i.e. ISO/IEC 17025:2017 and continually improve the effectiveness of Management System by analyzing quality objectives, audits reports, risk assessment, analysis of data, corrective actions and through management reviews."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-green-700">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              ISO/IEC 17025:2017 Certified
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Quality Policy
            </h1>
            <div className="text-2xl font-semibold mb-4">
              Eco Pak Environmental Services
            </div>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Leading Environmental Testing Laboratory and Environmental Engineering Solution Services Provider in Pakistan
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 -mt-10 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Quality Commitment</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl">
                <strong className="text-green-600">Eco Pak Services</strong>, one of the leading Environmental Testing Laboratory and Environmental Engineering Solution services provider in Pakistan, is committed to providing a safe and healthy workplace to its employees and quality services to its partner clients by conducting its professional responsibilities in an environmental friendly manner towards improvement of its performance.
              </p>
              <p className="text-lg mt-6">
                The Quality Policy is an equal and consistent part of the organization's overall policies and strategy.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment Framework</h3>
            <p className="text-gray-600">
              <strong className="text-green-600">Eco Pak Services</strong> is maintaining and efficiently implementing to fulfill its commitment, by continual effort to:
            </p>
          </div>
        </div>
      </div>

      {/* Commitments Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors duration-200">
                    <commitment.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-200">
                      {commitment.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {commitment.description}
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Standards Section */}
      <div className="bg-gradient-to-r from-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Quality Standards</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of quality through internationally recognized certifications and continuous improvement processes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">ISO/IEC 17025:2017</h3>
              <p className="text-gray-600">
                International standard for testing and calibration laboratories ensuring technical competence and reliable results.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Microscope className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Good Laboratory Practices</h3>
              <p className="text-gray-600">
                Comprehensive quality system ensuring reliability, accuracy, and integrity of laboratory operations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Continuous Improvement</h3>
              <p className="text-gray-600">
                Regular management reviews, audits, and corrective actions ensure ongoing enhancement of our quality system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Principles */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Quality Excellence Principles</h2>
            <p className="text-green-100 text-lg">
              The foundation of our quality management system
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, title: "Technical Validity", desc: "Accurate and reliable test results" },
              { icon: Shield, title: "Confidentiality", desc: "Protecting client information and data" },
              { icon: Users, title: "Competent Staff", desc: "Highly trained and qualified personnel" },
              { icon: Target, title: "Customer Focus", desc: "Meeting and exceeding expectations" }
            ].map((principle, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{principle.title}</h3>
                <p className="text-green-100 text-sm">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="bg-gradient-to-r from-gray-800 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Promise to Excellence</h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            At <strong className="text-green-300">Eco Pak Services</strong>, we are dedicated to maintaining the highest standards of quality in all our environmental testing and engineering services. Our commitment to excellence drives us to continuously improve and deliver exceptional value to our clients while contributing to a sustainable future for Pakistan.
          </p>
        </div>
      </div>
    </div>
  );
}