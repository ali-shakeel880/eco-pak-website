import React, { useState } from 'react';

export default function Clients() {
  const [selectedClient, setSelectedClient] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const clients = [
    {
      id: 1,
      name: "Coca-Cola",
      industry: "Beverages & Soft Drinks",
      logo: "https://logos-world.net/wp-content/uploads/2020/03/Coca-Cola-Logo-700x394.png",
      description: "Leading global beverage company with extensive operations in Pakistan."
    },
    {
      id: 2,
      name: "Unilever Pakistan",
      industry: "Consumer Goods & FMCG",
      logo: "https://profit.pakistantoday.com.pk/wp-content/uploads/2019/07/unilever-1.jpg",
      description: "Multinational consumer goods company with major manufacturing facilities."
    },
    {
      id: 3,
      name: "Tetra Pak",
      industry: "Food Packaging & Processing",
      logo: "https://logos-world.net/wp-content/uploads/2023/03/Tetra-Pak-Logo-500x281.png",
      description: "World leader in food processing and packaging solutions."
    },
    {
      id: 4,
      name: "Haier",
      industry: "Home Appliances & Electronics",
      logo: "https://logos-world.net/wp-content/uploads/2023/03/Haier-Logo-500x281.png",
      description: "Global leader in home appliances and consumer electronics."
    },
    {
      id: 5,
      name: "Kolson",
      industry: "Food & Snacks Manufacturing",
      logo: "https://upload.wikimedia.org/wikipedia/en/8/8e/Kolson_logo.png",
      description: "Leading Pakistani food and snacks manufacturing company."
    },
    {
      id: 6,
      name: "Happilac Paints",
      industry: "Paints & Coatings",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6hELRu25KhrDwwO2YKRH7yX1r6dFLVCegxg&s",
      description: "Premium paint and coating solutions provider in Pakistan."
    },
    {
      id: 7,
      name: "Sapphire",
      industry: "Textiles & Fashion",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Sapphire-logo.png",
      description: "Leading textile and fashion brand in Pakistan."
    },
    {
      id: 8,
      name: "Gourmet Foods",
      industry: "Food Processing & Distribution",
      logo: "https://www.gourmetpakistan.com/gourmet/compressed/logos/g-restaurants.webp",
      description: "Premium food processing and distribution company."
    },
    {
      id: 9,
      name: "Kamal Textiles",
      industry: "Textile Manufacturing",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrn21kQQ4c2RY63PlXmD8BPWYyr6k15TvxeA&s",
      description: "Established textile manufacturing company with modern facilities."
    },
    {
      id: 10,
      name: "Asia Feeds",
      industry: "Animal Feed & Agriculture",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCK1kDlnyuBlocPVHVpDLVO3iJEZZ2vy5p-Q&s",
      description: "Leading animal feed and agricultural products manufacturer."
    },
    {
      id: 11,
      name: "Punjab Industries",
      industry: "Industrial Manufacturing",
      logo: "https://i.dawn.com/large/2013/09/523a5fa462a21.jpg",
      description: "Major industrial manufacturing company in Punjab region."
    },
    {
      id: 12,
      name: "Sadaqat Ltd",
      industry: "Trading & Distribution",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFbzErtv_wgdg/company-logo_200_200/company-logo_200_200/0/1630535303433?e=2147483647&v=beta&t=AHgbQHVMzmY3xY26gWNrkyIs8OGz4pPmflLuLEc7PnI",
      description: "Established trading and distribution company."
    },
    {
      id: 13,
      name: "Amin Textile",
      industry: "Textile Manufacturing",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaChVrIoZ5tUOn3fd9BI77CQO4Xmc6cCG3HQ&s",
      description: "Quality textile manufacturing with sustainable practices."
    },

  ];

  const handleImageError = (clientId) => {
    setImageErrors(prev => ({ ...prev, [clientId]: true }));
  };

  const getBackupImage = (client) => {
    const colors = ['FF6B35', '8E44AD', '3498DB', '27AE60', 'E74C3C', 'F39C12', '16A085', '9B59B6'];
    const color = colors[client.id % colors.length];
    return `https://via.placeholder.com/200x100/${color}/FFFFFF?text=${encodeURIComponent(client.name.toUpperCase())}`;
  };

  const fadeInStyle = {
    opacity: 0,
    transform: 'translateY(-10px)',
    animation: 'fadeIn 0.3s ease-out forwards'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
             Eco Pak Services
            </h1>
            <h2 className="text-3xl font-light mb-6">Our Valued Clients</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Trusted by leading companies across diverse industries for comprehensive environmental solutions and sustainable engineering practices
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Statistics Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-green-100 hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-green-600 mb-2">{clients.length}+</div>
            <div className="text-gray-600 font-medium">Trusted Clients</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-purple-100 hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-orange-100 hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-orange-600 mb-2">8</div>
            <div className="text-gray-600 font-medium">Industry Sectors</div>
          </div>
        </div>

        {/* Client Portfolio Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Client Portfolio</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are proud to serve industry leaders across Pakistan, delivering excellence in environmental engineering
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {clients.map((client) => (
              <div 
                key={client.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
                onClick={() => setSelectedClient(selectedClient === client.id ? null : client.id)}
              >
                {/* Logo Container */}
                <div className="p-6 pb-4">
                  <div className="w-full h-24 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden border border-gray-200">
                    <img 
                      src={imageErrors[client.id] ? getBackupImage(client) : client.logo}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      onError={() => handleImageError(client.id)}
                    />
                  </div>
                </div>

                {/* Client Info */}
                <div className="px-6 pb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {client.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    {client.industry}
                  </p>

                  {/* Expandable Description */}
                  {selectedClient === client.id && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200" style={fadeInStyle}>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {client.description}
                      </p>
                      <div className="mt-3 flex items-center text-xs text-green-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Environmental solutions provided
                      </div>
                    </div>
                  )}

                  {/* Hover indicator */}
                  <div className="mt-3 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center">
                      <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                      Trusted environmental partner
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Our Commitment to Excellence</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering world-class environmental engineering solutions that drive sustainable growth for leading enterprises
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Sustainable Solutions</h4>
              <p className="text-gray-600 leading-relaxed">
                Innovative eco-friendly engineering practices that harmonize environmental protection with business excellence, ensuring long-term sustainability for our partners.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Proven Excellence</h4>
              <p className="text-gray-600 leading-relaxed">
                Over 15 years of distinguished expertise in delivering complex environmental engineering projects across diverse industries with uncompromising quality standards.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Industry Leadership</h4>
              <p className="text-gray-600 leading-relaxed">
                Customized engineering solutions meticulously designed to address specific industry challenges while ensuring full regulatory compliance and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-50 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Engineering Tomorrow's Environmental Solutions Today
            </h4>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our distinguished clientele and experience the difference that professional environmental engineering makes for sustainable business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-600">Project Success Rate</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Technical Support</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">ISO</div>
              <p className="text-gray-600">Certified Standards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}