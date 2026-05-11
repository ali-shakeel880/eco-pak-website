import React, { useState, useEffect } from 'react';
import { ChevronRight, Phone, Mail, Facebook, Linkedin, Instagram, CheckCircle, Award, Users, Clock, Leaf, Droplets, Recycle, Sun, ArrowRight, Calendar, Eye, Target, Shield, Globe, Beaker, FileText, Cog, TreePine, Calculator } from 'lucide-react';

import { Link } from 'react-router-dom';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [isSlideChanging, setIsSlideChanging] = useState(false);
  
  const slides = [
    {
      title: "Leading Environmental Solutions",
      subtitle: "Eco Pak Services",
      description: "Delivering comprehensive environmental services with 9+ years of expertise in environmental approvals, consulting, and sustainable solutions",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Advanced Laboratory Services", 
      subtitle: "Precision Testing & Analysis",
      description: "State-of-the-art environmental testing facilities providing accurate air quality, water, and soil analysis services",
      image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Expert Environmental Consultancy",
      subtitle: "Compliance & Sustainability",
      description: "Professional guidance for environmental impact assessments, regulatory compliance, and sustainable development strategies",
      image: "https://images.unsplash.com/photo-1446714276218-bd84d334af98?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Innovative Treatment Solutions",
      subtitle: "Water & Waste Management",
      description: "Custom-designed treatment systems for industrial wastewater, air emissions control, and environmental remediation",
      image: "https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const services = [
    {
      icon: <Beaker className="w-12 h-12" />,
      title: "Environmental Laboratory Services",
      description: "Eco Pak Services Research Institute had been established in 2025 under the section 42, Therefore the purpose of establishment was Research and development for sustainability…",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/services/environmental-laboratory"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Environmental Consultancy", 
      description: "Eco Pak Services is familiar with the legal requirements and procedure for environmental studies and its approval as per Environmental Protection Act 1997 of Pakistan…",
      image: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/services/environmental-consultancy"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Techno Legal Services",
      description: "Eco Pak Services  Enviro-Engineering is an environmental consulting firm aims at providing the specialized services independently, in all aspects of Compliance to the Local as well as…",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/services/techno-legal"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Research Institute",
      description: "Eco Pak Services  Research Institute had been established in 2025 under the section 42, There for the purpose of establishment was Research and development for the sustainable…",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/services/research-institute"
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Treatment & Design Services",
      description: "Eco Pak Services scientists and engineers have designed wastewater treatment facilities of different Capacity. Our experience encompasses advanced wastewater treatment…",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/services/design-treatment"
    },
    {
      icon: <Calculator className="w-12 h-12" />,
      title: "Carbon Footprint",
      description: "A fundamental component of these regulations is the need to measure the cradle-to-grave 'Carbon Footprint' involved in the development, production, distribution and disposal…",
      image: "https://images.unsplash.com/photo-1683632399116-c70282c0d552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcmJvbiUyMGZvb3RwcmludHxlbnwwfHwwfHx8MA%3D%3D",
      link: "/services/carbon-footprint"
    }
  ];

  const stats = [
    { number: "9+", label: "Years of Excellence", icon: <Clock className="w-8 h-8" /> },
    { number: "500+", label: "Projects Completed", icon: <CheckCircle className="w-8 h-8" /> },
    { number: "200+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
    { number: "50+", label: "Expert Team", icon: <Award className="w-8 h-8" /> }
  ];

  const values = [
    {
      icon: <Eye className="w-16 h-16" />,
      title: "Our Vision",
      description: "To be the leading environmental solutions provider, creating a sustainable future for generations to come through innovative technologies and expert services."
    },
    {
      icon: <Target className="w-16 h-16" />,
      title: "Our Mission", 
      description: "Delivering comprehensive environmental services with integrity, expertise, and commitment to environmental protection and regulatory compliance."
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: "Quality Assurance",
      description: "Maintaining the highest standards in all our services through rigorous quality control processes and continuous improvement initiatives."
    }
  ];

  const nextSlide = () => {
    if (!isSlideChanging) {
      setIsSlideChanging(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsSlideChanging(false);
      }, 200);
    }
  };

  const goToSlide = (index) => {
    if (!isSlideChanging && index !== currentSlide) {
      setIsSlideChanging(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsSlideChanging(false);
      }, 200);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [isSlideChanging]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.6);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-slideInFromRight {
          animation: slideInFromRight 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-slideInFromLeft {
          animation: slideInFromLeft 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-slideInFromTop {
          animation: slideInFromTop 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-slideInFromBottom {
          animation: slideInFromBottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }
        
        .glass-effect {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .hero-overlay {
          background: linear-gradient(135deg, rgba(5, 46, 22, 0.85) 0%, rgba(34, 197, 94, 0.7) 100%);
        }
        
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .hero-bg-image {
          transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .hero-bg-image.active {
          opacity: 1;
          transform: scale(1);
        }
        
        .hero-bg-image.inactive {
          opacity: 0;
          transform: scale(1.05);
        }

        .slide-content-wrapper {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .slide-content-wrapper.slide-changing {
          opacity: 0;
          transform: translateY(30px);
        }

        .slide-content-wrapper.slide-active {
          opacity: 1;
          transform: translateY(0);
        }

        .progress-bar {
          position: relative;
          height: 3px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #22c55e, #16a34a);
          border-radius: 2px;
          transform-origin: left;
          animation: progressAnimation 7s linear infinite;
        }

        @keyframes progressAnimation {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 hero-bg-image ${
                index === currentSlide ? 'active' : 'inactive'
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
              }}
            />
          ))}
        </div>
        
        {/* Professional Overlay */}
        <div className="absolute inset-0 hero-overlay"></div>
        
        {/* Main Content */}
        <div className="relative z-20 min-h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6 text-center">
            {/* Company Badge - Always visible */}
            <div className="text-white mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 glass-effect animate-zoomIn">
                <Leaf className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-sm font-medium text-white/90">Environmental Excellence Since 2015</span>
              </div>
            </div>
            
            {/* Dynamic slide content with enhanced animations */}
            <div className={`slide-content-wrapper ${isSlideChanging ? 'slide-changing' : 'slide-active'}`}>
              <div className="text-white">
                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow leading-tight animate-slideInFromTop">
                  {slides[currentSlide].title}
                </h1>
                
                {/* Subtitle */}
                <h2 className="text-xl md:text-2xl font-light mb-6 text-green-100 opacity-90 animate-slideInFromLeft" style={{ animationDelay: '0.2s' }}>
                  {slides[currentSlide].subtitle}
                </h2>
                
                {/* Description */}
                <p className="text-lg md:text-xl mb-10 opacity-90 max-w-4xl mx-auto leading-relaxed text-white/90 animate-slideInFromRight" style={{ animationDelay: '0.4s' }}>
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
            
            {/* Static CTA Button and Trust Indicators */}
            <div className="text-white">
              {/* CTA Button - Always visible and active */}
          
  <div className="flex justify-center mb-12">
    <Link
      to="/contact"
      className="group inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 animate-glow hover:shadow-2xl cursor-pointer z-30 relative"
    >
      <Phone className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
      Contact Us Today
      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  </div>


              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm">ISO Certified</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm">Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm">Award Winning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex space-x-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 glass-effect">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/40 hover:bg-white/60 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
        
       
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="about">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div
            data-animate
            id="about-content"
            className={`${isVisible['about-content'] ? 'animate-fadeInUp' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-2 mb-8">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-medium">9 Years of Excellence</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Making Environmental <span className="text-green-600">Changes</span> That Matter
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
             Eco Pak Services group was established during the year 2015. The group has been providing different environmental services like Environmental approvals, Environmental Impact Assessment (EIA), Initial Environmental Examination (IEE), analytical monitoring, wastewater treatment systems installation, air emission control devices and legal services. The company also deals in import and manufacturing of different industrial and laboratory equipments.
            </p>
            
          <Link
  to="/about/code-of-conduct"
  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
>
  Learn More About Us
  <ArrowRight className="ml-2 w-5 h-5" />
</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-animate
                id={`stat-${index}`}
                className={`text-center hover-lift ${
                  isVisible[`stat-${index}`] ? 'animate-scaleIn' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4 text-green-200">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
<section className="py-20 bg-gradient-to-br from-green-50 to-blue-50" id="services">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      data-animate
      id="services-header"
      className={`text-center mb-16 ${
        isVisible['services-header'] ? 'animate-fadeInUp' : 'opacity-0'
      }`}
    >
      <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-2 mb-6">
        <Cog className="w-5 h-5 mr-2" />
        <span className="font-medium">Our Solutions</span>
      </div>
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 px-4">
        Comprehensive <span className="text-green-600">Environmental Services</span>
      </h2>
      
      <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full"></div>
    </div>
    
    <div className="space-y-12 lg:space-y-16">
      {services.map((service, index) => (
        <div
          key={index}
          data-animate
          id={`service-${index}`}
          className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          } ${
            isVisible[`service-${index}`] 
              ? index % 2 === 0 ? 'animate-fadeInLeft' : 'animate-fadeInRight'
              : 'opacity-0'
          }`}
        >
          {/* Content Card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <div className="text-green-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* Image Container */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover-lift">
              <div className="aspect-w-16 aspect-h-10 sm:aspect-h-9">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div
            data-animate
            id="values-header"
            className={`text-center mb-16 ${
              isVisible['values-header'] ? 'animate-fadeInUp' : 'opacity-0'
            }`}
          >
            <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-2 mb-6">
              <Target className="w-5 h-5 mr-2" />
              <span className="font-medium">Our Foundation</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                data-animate
                id={`value-${index}`}
                className={`text-center p-8 bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl hover:from-green-50 hover:to-green-100 transition-all duration-500 hover-lift border border-gray-100 ${
                  isVisible[`value-${index}`] ? 'animate-scaleIn' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-green-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Focus */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div
            data-animate
            id="environmental-header"
            className={`text-center mb-16 ${
              isVisible['environmental-header'] ? 'animate-fadeInUp' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold mb-6">Environmental Excellence</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Being eco-friendly today is becoming more and more important. And it goes far beyond just turning off the light when you're out of home or separating your garbage for recycling. It's your lifestyle!
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Recycle className="w-10 h-10" />, percentage: "98%", label: "Recycling Efficiency" },
              { icon: <Droplets className="w-10 h-10" />, percentage: "85%", label: "Water Treatment" },
              { icon: <TreePine className="w-10 h-10" />, percentage: "92%", label: "Ecosystem Protection" },
              { icon: <Sun className="w-10 h-10" />, percentage: "88%", label: "Renewable Energy" }
            ].map((item, index) => (
              <div
                key={index}
                data-animate
                id={`env-stat-${index}`}
                className={`text-center hover-lift ${
                  isVisible[`env-stat-${index}`] ? 'animate-scaleIn' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 glass-effect">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.percentage}</h3>
                <p className="opacity-90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-500 text-white relative overflow-hidden" id="contact">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Forest background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div
            data-animate
            id="cta-content"
            className={`${isVisible['cta-content'] ? 'animate-fadeInUp' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Environmental Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for professional environmental solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link
  to="/contact"
  className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover-lift inline-flex items-center justify-center"
>
  <Phone className="w-5 h-5 mr-2" />
  Get Quote
</Link>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300 hover-lift"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}