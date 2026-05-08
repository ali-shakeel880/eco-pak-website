import React, { useState } from 'react';
import { ChevronRight, Microscope, Globe, Users, Lightbulb, Target, Leaf, Heart, Home, Droplets, Building, CheckCircle, Award, BookOpen } from 'lucide-react';

export default function ResearchInstitute() {
  const [activeObjective, setActiveObjective] = useState(0);

  const objectives = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Sustainable Urbanization",
      description: "Developing eco-friendly urban planning solutions for Pakistan's growing cities, focusing on green infrastructure and sustainable development practices."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Resources Management",
      description: "Advanced research in water conservation, treatment technologies, and sustainable water resource management for Pakistan's water security."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Historical Places Preservation",
      description: "Environmental conservation strategies for protecting Pakistan's cultural heritage sites while maintaining ecological balance."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gender Equality Initiatives",
      description: "Research-based programs to eliminate gender discrimination and promote equal opportunities in environmental sectors."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Services Access",
      description: "Establishing systems to improve public awareness and access to environmental health services across Pakistan."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Poverty Eradication",
      description: "Sustainable development research aimed at creating economic opportunities through environmental solutions."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Women Empowerment",
      description: "Global initiatives to empower women in environmental sciences and sustainable development sectors."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Human Resource Development",
      description: "Training programs to develop environmental leaders and researchers who can drive cutting-edge environmental research."
    }
  ];

  const researchAreas = [
    {
      title: "Applied Environmental Research",
      description: "Cutting-edge research in environmental science, pollution control, and sustainable technology solutions for Pakistan's unique challenges.",
      icon: <Microscope className="w-12 h-12" />
    },
    {
      title: "Innovation & Technology Development",
      description: "Development of innovative environmental technologies, methodologies, and sustainable practices for industrial and municipal applications.",
      icon: <Lightbulb className="w-12 h-12" />
    },
    {
      title: "Policy Research & Development",
      description: "Strategic research to inform environmental policy decisions and regulatory frameworks at national and international levels.",
      icon: <Award className="w-12 h-12" />
    },
    {
      title: "Community-Based Solutions",
      description: "Grassroots research initiatives focused on community engagement and locally applicable environmental solutions.",
      icon: <Users className="w-12 h-12" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Eco Pak Research Institute</h1>
              <p className="text-xl text-green-100 mb-6">
                Established in 2016 under Section 42, the Eco Pak Research Institute stands as Pakistan's 
                premier environmental research facility, dedicated to sustainable development and innovative 
                solutions for our nation's environmental challenges.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-green-100">
                  Serving as a "global center of excellence for intellectual creativity" to foresee future 
                  environmental challenges, respond to current social demands, and contribute to scientific 
                  technologies for a prosperous society and natural environment.
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Eco Pak Research?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Established research facility since 2016</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Focus on Pakistan's sustainable development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Global center of excellence recognition</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Cutting-edge environmental research</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Future-focused problem solving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Purpose Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <Globe className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To create an excellent environment for future generations through sustainable research 
              and development initiatives that benefit Pakistan and humanity as a whole.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <Leaf className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Purpose</h3>
            <p className="text-gray-600">
              Research and development for sustainable growth in Pakistan, addressing the wellbeing 
              of people and the nation through innovative environmental solutions.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <Target className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Impact</h3>
            <p className="text-gray-600">
              Contributing to scientific technologies and social solutions that realize a prosperous 
              society while maintaining harmony with the natural environment.
            </p>
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Research Areas</h2>
            <p className="text-xl text-gray-600">Comprehensive environmental research for sustainable development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-green-600 mb-6">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Objectives Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Strategic Objectives</h2>
            <p className="text-xl text-gray-600">Our comprehensive approach to sustainable development in Pakistan</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Objectives List */}
            <div className="space-y-4">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    activeObjective === index
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-green-50'
                  }`}
                  onClick={() => setActiveObjective(index)}
                >
                  <div className="flex items-center">
                    <div className={`mr-4 ${activeObjective === index ? 'text-white' : 'text-green-600'}`}>
                      {objective.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{objective.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Objective Details */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-green-600 mb-6">
                {objectives[activeObjective].icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {objectives[activeObjective].title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {objectives[activeObjective].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Research Impact Stats */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Research Impact</h2>
          <p className="text-xl text-gray-600">Making a difference through environmental research since 2016</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-2">8+</div>
            <div className="text-gray-600 font-semibold">Years of Research</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600 font-semibold">Research Projects</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-600 font-semibold">Researchers Trained</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-gray-600 font-semibold">Published Studies</div>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Commitment to Pakistan</h2>
          <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            As Pakistan continues to develop, the Eco Pak Research Institute remains committed to addressing 
            the nation's environmental challenges through innovative research, sustainable solutions, and 
            the development of future environmental leaders. Our work contributes to the wellbeing of people 
            and the nation as a whole, creating a foundation for sustainable prosperity.
          </p>
        </div>
      </div>
    </div>
  );
}