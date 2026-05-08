import React from 'react';
import { Leaf, Recycle, Package, Users, Award, Calendar, Building, Globe, Zap, TreePine, CheckCircle, Factory } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Environmental Quality Standards Development",
    description: "Comprehensive framework development for Punjab Environmental Quality Standards covering Ambient Air, Gaseous Emissions, Noise, Vehicular Emissions, Drinking Water, Waste Water, and Biomedical Hazardous Waste. Formulated new standards for Surface Water, Soil, and Solid Hazardous Waste Guidelines.",
    category: "Standards & Policy",
    impact: "Complete EQS framework for Punjab Province",
    client: "World Bank - Punjab Green Development Program",
    year: "2024",
    status: "Completed",
    icon: CheckCircle,
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop&crop=center",
    tags: ["Government Project", "World Bank Funded", "Environmental Standards"]
  },
  {
    id: 2,
    title: "Punjab Cities Environmental Profiling",
    description: "Environmental profiling of 16 cities under Punjab Cities Program, strengthening municipal capacities for enhanced planning, resource management, and accountability systems while integrating environmental sustainability considerations.",
    category: "Urban Development",
    impact: "16 cities environmental assessment",
    client: "World Bank - Punjab Municipal Development Fund",
    year: "2024",
    status: "Completed",
    icon: Building,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop&crop=center",
    tags: ["Urban Planning", "Municipal Development", "Sustainability"]
  },
  {
    id: 3,
    title: "Green Pakistan Forest Reclamation",
    description: "Comprehensive surveys and data analysis for forest area reclamation and development under Green Pakistan Program. Provided evidence-based recommendations for sustainable forest management and ecosystem restoration.",
    category: "Forest Management",
    impact: "Large-scale forest reclamation program",
    client: "Government Planning & Development Board",
    year: "2024",
    status: "Completed",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center",
    tags: ["Reforestation", "Ecosystem Restoration", "International Funding"]
  },
  {
    id: 4,
    title: "Quaid-e-Azam Wind Park Assessment",
    description: "Led comprehensive environmental and social assessment studies for major wind energy project. Conducted extensive public consultations and secured environmental permits through rigorous World Bank approval processes.",
    category: "Renewable Energy",
    impact: "Major wind energy project facilitation",
    client: "World Bank - Renewable Energy Initiative",
    year: "2024",
    status: "Completed",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop&crop=center",
    tags: ["Wind Energy", "Social Assessment", "Public Consultation"]
  },
  {
    id: 5,
    title: "Sustainable Ramsar Wetlands Management",
    description: "Environmental monitoring and reporting for sustainable eco-tourism at Ramsar wetland sites. Developed comprehensive research data supporting sustainable tourism development while preserving critical ecosystems.",
    category: "Ecosystem Conservation",
    impact: "Ramsar wetland sites conservation",
    client: "World Bank - Eco-Tourism Program",
    year: "2024",
    status: "Ongoing",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
    tags: ["Wetland Conservation", "Eco-Tourism", "Biodiversity"]
  },
  {
    id: 6,
    title: "International Corporate Compliance",
    description: "Environmental compliance services for major international brands including Nestle (30+ projects), Honda Atlas, Tetra Pack, Coca Cola, Pepsi, and Unilever. Comprehensive assessments, monitoring, and sustainability reporting aligned with global standards.",
    category: "Corporate Services",
    impact: "50+ multinational compliance projects",
    client: "Multiple Fortune 500 Companies",
    year: "2024",
    status: "Ongoing",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center",
    tags: ["Corporate Compliance", "International Standards", "Sustainability"]
  }
];

const achievements = [
  {
    title: "1000+",
    subtitle: "Projects Completed",
    description: "Successfully executed projects across environmental sectors"
  },
  {
    title: "50+",
    subtitle: "International Clients",
    description: "Serving Fortune 500 companies and government entities"
  },
  {
    title: "15 Years",
    subtitle: "Industry Experience",
    description: "Established expertise in environmental consulting"
  },
  {
    title: "World Bank",
    subtitle: "Trusted Partner",
    description: "Multiple World Bank funded project implementations"
  }
];

const services = [
  "Environmental Quality Standards Development",
  "ZDHC & International Compliance Reporting", 
  "OSHA, NIOSH & IOSH Safety Compliance",
  "Carbon Footprint & ESG Implementation",
  "Industrial Environmental Monitoring",
  "Sustainable Tourism & Ecosystem Management"
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Leaf className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Environmental</span> Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Eco Pak Services has executed thousands of 
            environmental projects with strategic planning and innovative approaches. Our comprehensive portfolio 
            spans government initiatives, international compliance, and corporate sustainability solutions.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-8 text-sm text-gray-500 flex-wrap gap-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Established Track Record</span>
            </div>
            <div className="flex items-center">
              <Package className="w-4 h-4 mr-2" />
              <span>Multi-Sector Expertise</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>Global Client Base</span>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">{achievement.title}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{achievement.subtitle}</div>
              <div className="text-sm text-gray-600">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <IconComponent className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="text-sm text-gray-500 mb-1">Project Impact</div>
                    <div className="font-semibold text-green-600 text-sm">{project.impact}</div>
                    <div className="text-xs text-gray-500 mt-1">Client: {project.client}</div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-gray-600">Comprehensive environmental solutions across multiple sectors and compliance frameworks</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Company Mission */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Our Environmental Leadership</h3>
            <p className="text-lg leading-relaxed max-w-5xl mx-auto opacity-95">
              At Eco Pak Services, we take pride in our tireless efforts under the strategic leadership of 
              Dr. Abdul Hafeez Nasir. Our optimistic and strategic approach has enabled us to execute thousands of projects 
              across environmental disciplines. From developing Environmental Quality Standards to managing complex 
              international compliance requirements, we deliver evidence-based solutions that promote sustainable development 
              and environmental stewardship across government, corporate, and international sectors.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <Globe className="w-8 h-8 mx-auto mb-2 opacity-90" />
                <div className="font-semibold">International Standards</div>
                <div className="text-sm opacity-80">OSHA, NIOSH, IOSH, ZDHC Compliance</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Award className="w-8 h-8 mx-auto mb-2 opacity-90" />
                <div className="font-semibold">World Bank Partner</div>
                <div className="text-sm opacity-80">Multiple funded project implementations</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Factory className="w-8 h-8 mx-auto mb-2 opacity-90" />
                <div className="font-semibold">Corporate Excellence</div>
                <div className="text-sm opacity-80">Fortune 500 environmental solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}