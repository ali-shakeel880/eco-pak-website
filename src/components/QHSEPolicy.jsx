import React, { useState } from 'react';
import { Shield, Heart, Leaf, Award, CheckCircle, FileText, Users, Target, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

export default function QHSEPolicy() {
  const [expandedSection, setExpandedSection] = useState(null);

  const policyData = [
    {
      id: 'quality',
      title: 'Quality',
      icon: Award,
      color: 'blue',
      shortDesc: 'We are committed to delivering the highest quality environmental services and maintaining international standards.',
      fullDesc: 'Our quality management system ensures excellence in every project. We maintain ISO 9001:2015 certification and continuously improve our processes to exceed client expectations. Our team undergoes regular training and assessment to maintain the highest professional standards.',
      fullPolicy: `QUALITY POLICY STATEMENT:

We are committed to providing exceptional environmental consulting services that consistently meet and exceed our clients' expectations. Our quality management system is designed to ensure continuous improvement in all aspects of our operations.

OBJECTIVES:
• Deliver accurate, reliable, and timely environmental assessments and solutions
• Maintain competency through ongoing professional development and training
• Implement robust quality control procedures for all deliverables
• Foster a culture of continuous improvement and innovation
• Ensure compliance with all relevant standards and regulations

IMPLEMENTATION:
All employees are responsible for maintaining quality standards in their work. Regular audits, client feedback, and performance reviews ensure our quality objectives are met. We maintain detailed documentation of all processes and continuously monitor our performance against established benchmarks.

COMMITMENT:
Management is committed to providing adequate resources and support to maintain our quality management system and achieve our quality objectives.`,
      commitments: [
        'ISO 9001:2015 certified quality management system',
        'Continuous improvement and innovation in service delivery',
        'Regular client feedback and satisfaction monitoring',
        'Comprehensive quality assurance protocols'
      ],
      stats: { value: '99.8%', label: 'Client Satisfaction' }
    },
    {
      id: 'health-safety',
      title: 'Health & Safety',
      icon: Shield,
      color: 'red',
      shortDesc: 'The health and safety of our employees and clients is our top priority in all operations.',
      fullDesc: 'We maintain a zero-harm workplace through comprehensive safety protocols, regular training, and strict adherence to international safety standards. Our proactive approach to health and safety ensures the wellbeing of all stakeholders.',
      fullPolicy: `HEALTH & SAFETY POLICY STATEMENT:

The health, safety, and wellbeing of our employees, clients, and all stakeholders is our highest priority. We are committed to providing a safe and healthy work environment through proactive risk management and comprehensive safety measures.

OBJECTIVES:
• Achieve zero workplace accidents and incidents
• Provide comprehensive safety training and awareness programs
• Implement rigorous risk assessment and hazard identification procedures
• Maintain emergency response capabilities and crisis management protocols
• Ensure compliance with all health and safety regulations and standards

RESPONSIBILITIES:
All employees have the responsibility to work safely and report any unsafe conditions or practices. Management is committed to providing the necessary resources, training, and support to maintain a safe workplace.

IMPLEMENTATION:
We conduct regular safety meetings, workplace inspections, and safety audits. All employees receive ongoing safety training and are empowered to stop work if they identify unsafe conditions. We maintain detailed incident reporting and investigation procedures.

COMMITMENT:
We believe that all workplace injuries and illnesses are preventable through proper planning, training, and commitment to safety excellence.`,
      commitments: [
        'Zero tolerance for workplace accidents and incidents',
        'Regular safety training and certification programs',
        'Comprehensive risk assessment and management',
        'Emergency response and crisis management protocols'
      ],
      stats: { value: '0', label: 'Lost Time Incidents' }
    },
    {
      id: 'environment',
      title: 'Environment',
      icon: Leaf,
      color: 'green',
      shortDesc: 'We are dedicated to environmental protection and sustainable practices in all our activities.',
      fullDesc: 'Environmental stewardship is at the core of our business. We implement sustainable practices, minimize our carbon footprint, and help clients achieve their environmental objectives through innovative solutions and expert guidance.',
      fullPolicy: `ENVIRONMENTAL POLICY STATEMENT:

We are committed to environmental protection and sustainable development in all our operations. As environmental consultants, we lead by example in implementing best practices for environmental stewardship and sustainability.

OBJECTIVES:
• Minimize our environmental footprint through sustainable business practices
• Promote biodiversity conservation and ecosystem protection
• Implement waste reduction and circular economy principles
• Support renewable energy adoption and carbon neutrality goals
• Provide innovative solutions for environmental challenges

IMPLEMENTATION:
We regularly assess and monitor our environmental performance, set measurable targets for improvement, and implement management systems to achieve our environmental objectives. We promote environmental awareness among our employees and stakeholders.

SUSTAINABLE PRACTICES:
• Use of renewable energy sources where possible
• Implementation of paperless office practices
• Sustainable transportation options for fieldwork
• Waste minimization and recycling programs
• Water conservation measures

COMMITMENT:
We commit to continuous improvement in our environmental performance and will regularly review and update our environmental objectives to ensure we remain at the forefront of environmental best practices.`,
      commitments: [
        'Carbon neutral operations by 2030',
        'Waste reduction and circular economy principles',
        'Biodiversity conservation and ecosystem protection',
        'Renewable energy adoption and promotion'
      ],
      stats: { value: '40%', label: 'Carbon Reduction' }
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        icon: 'text-blue-500',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-600',
        icon: 'text-red-500',
        button: 'bg-red-600 hover:bg-red-700'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        icon: 'text-green-500',
        button: 'bg-green-600 hover:bg-green-700'
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Our Commitment
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              QHSE Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Quality, Health, Safety & Environment - the foundation of our operations and commitment to excellence
            </p>

          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-10 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {policyData.map((policy) => {
            const colors = getColorClasses(policy.color);
            return (
              <div key={policy.id} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <policy.icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{policy.stats.value}</div>
                <div className="text-gray-600 text-sm">{policy.stats.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Policy Sections */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Policy Framework</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive QHSE policy framework ensures we deliver exceptional results while maintaining the highest standards of quality, health, safety, and environmental responsibility.
          </p>
        </div>

        <div className="space-y-6">
          {policyData.map((policy,index) => {
            const colors = getColorClasses(policy.color);
            const isExpanded = expandedSection === policy.id;
            
            return (
              <div
                key={policy.id}
                className={`bg-white rounded-2xl shadow-lg border-l-4 ${colors.border} overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'shadow-2xl' : 'hover:shadow-xl'
                }`}
              >
                {/* Policy Header */}
                <div
                  className="p-8 cursor-pointer"
                  onClick={() => toggleSection(policy.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <policy.icon className={`w-8 h-8 ${colors.icon}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{policy.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{policy.shortDesc}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-8 pb-8">
                    <div className="border-t border-gray-100 pt-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-4">Our Approach</h4>
                          <p className="text-gray-600 leading-relaxed mb-6">{policy.fullDesc}</p>
                          <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Commitments</h4>
                          <div className="space-y-3">
                            {policy.commitments.map((commitment, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                                <span className="text-gray-600 text-sm leading-relaxed">{commitment}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5" />
                            Full Policy Document
                          </h4>
                          <div className="bg-gray-50 rounded-lg p-6 max-h-96 overflow-y-auto">
                            <pre className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed font-sans">
                              {policy.fullPolicy}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Certification Section */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Certifications & Standards</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is validated through internationally recognized certifications and standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'ISO 9001:2015', desc: 'Quality Management' },
              { name: 'ISO 14001:2015', desc: 'Environmental Management' },
              { name: 'ISO 45001:2018', desc: 'Occupational Health & Safety' },
              { name: 'ISO 27001:2013', desc: 'Information Security' }
            ].map((cert, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Commitment to Excellence</h2>
          <p className="text-xl text-green-100">
            These policies guide every aspect of our operations, ensuring we deliver exceptional environmental consulting services while maintaining the highest standards of quality, health, safety, and environmental responsibility.
          </p>
        </div>
      </div>
    </div>
  );
}