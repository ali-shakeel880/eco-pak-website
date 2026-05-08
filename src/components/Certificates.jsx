import React from 'react';
import { Award, Building2, Shield, Leaf } from 'lucide-react';

export default function Certificates() {

  const certificates = [
    {
      id: 1,
      title: "Certificate of Incorporation",
      description: "Official company registration certificate",
      thumbnail: "img/certificate/certificate-1-small.jpg",
      fullImage: "img/certificate/certificate-1.jpg",
      category: "Corporate",
      icon: Building2,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Environmental Laboratory Certificate",
      description: "Certified by Government of Punjab for environmental testing",
      thumbnail: "img/certificate/certificate-2-small.jpg",
      fullImage: "img/certificate/certificate-2.jpg",
      category: "Environmental",
      icon: Leaf,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "RICI Certification",
      description: "Research and Industrial Certification Institute accreditation",
      thumbnail: "img/certificate/certificate-RICI-1-small.jpg",
      fullImage: "img/certificate/certificate-RICI-1.jpg",
      category: "Quality",
      icon: Award,
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "RICI Additional Certificate",
      description: "Secondary RICI certification documentation",
      thumbnail: "img/certificate/certificate-RICI-2-small.jpg",
      fullImage: "img/certificate/certificate-RICI-2.jpg",
      category: "Quality",
      icon: Award,
      color: "bg-purple-500"
    },
    {
      id: 5,
      title: "RICI Management Certificate",
      description: "Management system certification from RICI",
      thumbnail: "img/certificate/certificate-RICI-management-small.jpg",
      fullImage: "img/certificate/certificate-RICI-management.jpg",
      category: "Management",
      icon: Shield,
      color: "bg-indigo-500"
    },
    {
      id: 6,
      title: "PNAC Accreditation",
      description: "Pakistan National Accreditation Council certification",
      thumbnail: "img/certificate/certificate-PNAC-small.jpg",
      fullImage: "img/certificate/certificate-PNAC.jpg",
      category: "Accreditation",
      icon: Shield,
      color: "bg-red-500"
    },
    {
      id: 7,
      title: "ISO 45001:2018",
      description: "Occupational Health and Safety Management Systems",
      thumbnail: "img/certificate/certificate_PakGreen-45001-small.jpg",
      fullImage: "img/certificate/certificate_PakGreen-45001.jpg",
      category: "Safety",
      icon: Shield,
      color: "bg-orange-500"
    }
  ];

  const categories = [...new Set(certificates.map(cert => cert.category))];

  const openLightbox = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeLightbox = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Certificates & Accreditations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eco Pak Services - Certified Excellence in Environmental Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-white rounded-full shadow-sm border text-sm font-medium text-gray-700 hover:shadow-md transition-shadow"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => {
            const IconComponent = certificate.icon;
            return (
              <div
                key={certificate.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                  <img
                    src={certificate.thumbnail}
                    alt={certificate.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjUgNzVIMTc1VjEyNUgxMjVWNzVaIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMTQwIDkwTDE2MCAyMTBMMTgwIDkwIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 ${certificate.color} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transform group-hover:scale-105 transition-transform duration-300`}>
                    <IconComponent size={12} />
                    {certificate.category}
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {certificate.description}
                  </p>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-green-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Company Info */}
        <div className="mt-16 text-center bg-white rounded-2xl shadow-sm p-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Commitment to Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our comprehensive certifications demonstrate our unwavering commitment to quality, 
              environmental responsibility, and safety standards. Each certificate represents our 
              dedication to providing world-class environmental engineering solutions while 
              maintaining the highest professional standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}