import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, Menu, X, Leaf } from 'lucide-react';
import DropdownMenu from './DropdownMenu';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aboutUsItems = [
    { label: 'CEO Message', path: 'ceo-message' },
    { label: 'Code of Conduct', path: 'code-of-conduct' },
    { label: 'Our Team', path: 'our-team' },
    { label: 'QHSE Policy', path: 'qhse-policy' },
    { label: 'Quality Policy', path: 'quality-policy' }
  ];

  const servicesItems = [
    { label: 'Environmental Laboratory Services', path: 'environmental-laboratory' },
    { label: 'Environmental Consultancy', path: 'environmental-consultancy' },
    { label: 'Techno-Legal Services', path: 'techno-legal' },
    { label: 'Research Institute', path: 'research-institute' },
    { label: 'Design & Treatment Services', path: 'design-treatment' },
    { label: 'Carbon Footprint', path: 'carbon-footprint' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Contact Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-green-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+92 300 1050996</span>
              </div>
                <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+92 300 1050977</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@ecopakservices.com</span>
              </div>
            </div>
            <div className="text-green-200">
              Leading Environmental Solutions Provider
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl backdrop-blur-sm' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
           {/* Logo Section */}
{/* Logo Section */}
<Link to="/" className="group block rounded-xl overflow-hidden shadow-md   h-[50px]  lg:w-[130px]" >
  <img
    src="/logooo.jpeg" 
    alt="Eco Pak Logo"
    className="h-[49px] w-30 lg:h-[53px] lg:w-[150px] object-contain group-hover:scale-105 transition-transform duration-300"
  />
</Link>



            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link 
                to="/" 
                className="px-3 xl:px-4 py-2 text-white hover:text-green-200 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base"
              >
                HOME
              </Link>
              
              <DropdownMenu 
                title="ABOUT US" 
                items={aboutUsItems} 
                basePath="/about"
                className="px-3 xl:px-4 py-2 text-white hover:text-green-200 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base"
              />
              
              <DropdownMenu 
                title="SERVICES" 
                items={servicesItems} 
                basePath="/services"
                className="px-3 xl:px-4 py-2 text-white hover:text-green-200 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base"
              />
              
              <Link 
                to="/projects" 
                className="px-3 xl:px-4 py-2 text-white hover:text-green-200 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base"
              >
                PROJECTS
              </Link>
              
              <Link 
                to="/clients" 
                className="px-3 xl:px-4 py-2 text-white hover:text-green-200 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base"
              >
                CLIENTS
              </Link>
              
              {/* <Link 
                to="/certificates" 
                className="px-3 xl:px-4 py-2 text-white hover:text-green-200 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base"
              >
                CERTIFICATES
              </Link> */}
              <Link 
                to="/contact" 
                className="px-4 xl:px-6 py-2 bg-white text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 font-semibold text-sm xl:text-base shadow-lg hover:shadow-xl ml-2"
              >
                CONTACT US
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-green-700 border-t border-green-500">
            <div className="px-4 py-2 space-y-1">
              {/* Mobile Contact Info */}
              <div className="border-b border-green-600 pb-3 mb-3">
                <div className="flex items-center space-x-2 text-green-100 text-sm mb-2">
                  <Phone className="h-4 w-4" />
                  <span>+92 300 1050996</span>
                  
                </div>
                 <div className="flex items-center space-x-2 text-green-100 text-sm mb-2">
                  <Phone className="h-4 w-4" />
                  <span>+92 300 1050997</span>
                  
                </div>
                <div className="flex items-center space-x-2 text-green-100 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>info@ecopakservices.pk</span>
                </div>
              </div>

              <Link 
                to="/" 
                className="block px-3 py-3 text-white hover:text-green-200 hover:bg-white/10 rounded-lg transition-all font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              
              {/* Mobile About Us Submenu */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-white font-medium border-b border-green-600">
                  ABOUT US
                </div>
                {aboutUsItems.map((item) => (
                  <Link
                    key={item.path}
                    to={`/about/${item.path}`}
                    className="block px-6 py-2 text-green-100 hover:text-white hover:bg-white/10 rounded-lg transition-all text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Services Submenu */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-white font-medium border-b border-green-600">
                  SERVICES
                </div>
                {servicesItems.map((item) => (
                  <Link
                    key={item.path}
                    to={`/services/${item.path}`}
                    className="block px-6 py-2 text-green-100 hover:text-white hover:bg-white/10 rounded-lg transition-all text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              <Link 
                to="/projects" 
                className="block px-3 py-3 text-white hover:text-green-200 hover:bg-white/10 rounded-lg transition-all font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECTS
              </Link>
              
              <Link 
                to="/clients" 
                className="block px-3 py-3 text-white hover:text-green-200 hover:bg-white/10 rounded-lg transition-all font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                CLIENTS
              </Link>
              
              <Link 
                to="/certificates" 
                className="block px-3 py-3 text-white hover:text-green-200 hover:bg-white/10 rounded-lg transition-all font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                CERTIFICATES
              </Link>
              
              <Link 
                to="/careers" 
                className="block px-3 py-3 text-white hover:text-green-200 hover:bg-white/10 rounded-lg transition-all font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                CAREERS
              </Link>
              
              <Link 
                to="/contact" 
                className="block mx-3 my-3 px-4 py-3 bg-white text-green-600 hover:bg-green-50 rounded-lg transition-all font-semibold text-center shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}