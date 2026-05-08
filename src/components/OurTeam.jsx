import React from 'react';
import { Award, Leaf, MapPin, Calendar, Users } from 'lucide-react';

export default function OurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Fatima Khan",
      role: "Senior Environmental Scientist",
      image: "https://plus.unsplash.com/premium_photo-1681074963522-00ca908dce4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFraXN0YW4lMjB3b21hbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Leading expert in Pakistan's air quality management with 12+ years of experience in Lahore's environmental challenges.",
      specialties: ["Air Quality", "Urban Pollution", "Policy Research"],
      location: "Lahore, Punjab",
      experience: "12 years",
      projects: 45
    },
    {
      id: 2,
      name: "Muhammad Ahmad",
      role: "Water Resources Engineer",
      image: "https://images.unsplash.com/photo-1615786929277-306bca9329bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBha2lzdGFuJTIwbWFuJTIwaW4lMjBwZW50JTIwY29hdHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Specialist in Pakistan's water crisis solutions and Indus River basin management systems.",
      specialties: ["Water Management", "River Systems", "Irrigation"],
      location: "Islamabad, ICT",
      experience: "8 years",
      projects: 32
    },
    {
      id: 3,
      name: "Dr. Ayesha Malik",
      role: "Climate Change Researcher",
      image: "https://plus.unsplash.com/premium_photo-1676106976576-6eec6dfa5d01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFraXN0YW4lMjB3b21hbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Expert in Pakistan's climate adaptation strategies and monsoon pattern analysis.",
      specialties: ["Climate Analysis", "Adaptation Planning", "Weather Patterns"],
      location: "Karachi, Sindh",
      experience: "15 years",
      projects: 67
    },
    {
      id: 4,
      name: "Hassan Ali",
      role: "Forest Conservation Specialist",
      image: "https://media.istockphoto.com/id/488872080/photo/young-professional-busy-in-thoughts.webp?a=1&b=1&s=612x612&w=0&k=20&c=u5_K3We02xbKFACSyV5Nqt3fMg9Sr5_hB_hZj76MEjU=",
      description: "Focuses on Pakistan's deforestation issues and northern region forest preservation.",
      specialties: ["Forest Management", "Biodiversity", "Conservation"],
      location: "Gilgit, GB",
      experience: "10 years",
      projects: 28
    },
    {
      id: 5,
      name: "Dr. Zara Sheikh",
      role: "Agricultural Sustainability Expert",
      image: "https://images.unsplash.com/photo-1639323949180-772f1932c225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBha2lzdGFuJTIwd29tYW4lMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D",
      description: "Specializes in sustainable farming practices for Pakistan's agricultural sector.",
      specialties: ["Sustainable Agriculture", "Soil Health", "Crop Management"],
      location: "Faisalabad, Punjab",
      experience: "11 years",
      projects: 39
    },
    {
      id: 6,
      name: "Bilal Shah",
      role: "Renewable Energy Analyst",
      image: "https://media.istockphoto.com/id/505121089/photo/middle-eastern-businessman-advertising.webp?a=1&b=1&s=612x612&w=0&k=20&c=hH3b9LGs6E8ypiMnwxhc7m8Jy9Eqst-95xdkBSwlDBw=",
      description: "Expert in Pakistan's solar and wind energy potential, focusing on rural electrification.",
      specialties: ["Solar Energy", "Wind Power", "Grid Integration"],
      location: "Quetta, Balochistan",
      experience: "7 years",
      projects: 24
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Leaf className="w-4 h-4" />
            Pakistan Environmental Experts
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated Pakistani environmental professionals working to address our nation's unique environmental challenges and create sustainable solutions.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Image Section */}
              <div className="relative p-8 pb-4">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                </div>
              </div>

              {/* Specialties */}
              <div className="px-8 pb-4">
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Professional Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-green-500" />
                      <span>Location</span>
                    </div>
                    <span className="font-medium text-gray-800">{member.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>Experience</span>
                    </div>
                    <span className="font-medium text-gray-800">{member.experience}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span>Projects</span>
                    </div>
                    <span className="font-medium text-gray-800">{member.projects}+ completed</span>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-200 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Contributing to Pakistan's Environmental Future</h2>
          <p className="text-xl text-green-100 mb-8">
            Our team is committed to addressing Pakistan's environmental challenges through research, innovation, and sustainable solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-green-100">Projects Completed</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-green-100">Years Combined Experience</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-green-100">Major Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}