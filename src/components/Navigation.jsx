import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Phone, Mail, Menu, X, Leaf } from 'lucide-react';
import DropdownMenu from './DropdownMenu';
import { SITE } from '../seo/site.js';
import { trackEvent } from '../seo/analytics.js';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const { pathname } = useLocation();
  const closeMenu = () => setIsMenuOpen(false);
  const mobileLink = 'block px-3 py-3 text-white hover:text-green-200 hover:bg-white/10 rounded-lg transition-colors font-medium';

  // Close the mobile menu on navigation.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // While the mobile menu is open: lock page scroll, close on Escape,
  // and let other fixed UI (WhatsApp button) know via a body class.
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('mobile-menu-open');
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.body.classList.remove('mobile-menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aboutUsItems = [
    { label: 'About Eco Pak Services', to: '/about-eco-pak-services' },
    { label: 'CEO Message', path: 'ceo-message' },
    { label: 'Code of Conduct', path: 'code-of-conduct' },
    { label: 'Our Team', path: 'our-team' },
    { label: 'QHSE Policy', path: 'qhse-policy' },
    { label: 'Quality Policy', path: 'quality-policy' }
  ];

  const servicesItems = [
    { label: 'Environmental Laboratory Services', path: 'environmental-laboratory' },
    { label: 'Water & Wastewater Testing', path: 'water-wastewater-testing' },
    { label: 'Air Quality & Stack Emission Testing', path: 'air-quality-stack-emission-testing' },
    { label: 'Environmental Consultancy', path: 'environmental-consultancy' },
    { label: 'EIA, IEE & Environmental Approval', path: 'eia-iee-environmental-approval' },
    { label: 'Techno-Legal Services', path: 'techno-legal' },
    { label: 'Research Institute', path: 'research-institute' },
    { label: 'Design & Treatment Services', path: 'design-treatment' },
    { label: 'Wastewater Treatment Plants (ETP)', path: 'wastewater-treatment-plant' },
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
              {SITE.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} onClick={() => trackEvent('phone_click', { location: 'topbar' })} className="flex items-center space-x-2 hover:text-green-200">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>{p.display}</span>
                </a>
              ))}
              <a href={`mailto:${SITE.email}`} onClick={() => trackEvent('email_click', { location: 'topbar' })} className="flex items-center space-x-2 hover:text-green-200">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{SITE.email}</span>
              </a>
            </div>
            <div className="text-green-200">
              Leading Environmental Solutions Provider
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
           {/* Logo Section */}
{/* Logo Section */}
<Link to="/" className="group block rounded-xl overflow-hidden shadow-md   h-[50px]  lg:w-[130px]" >
  <img
    src="/logooo.jpeg" 
    alt="Eco Pak Services logo"
    width="150"
    height="53"
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
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu: fixed, independently scrollable panel below the header */}
        <div
          id="mobile-menu"
          className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-green-700 border-t border-green-500 overflow-y-auto overscroll-contain transition-opacity duration-200 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="px-4 pt-3 pb-24 space-y-1">
            {/* Mobile Contact Info */}
            <div className="border-b border-green-600 pb-3 mb-2 grid gap-1">
              {SITE.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} tabIndex={isMenuOpen ? 0 : -1} onClick={() => trackEvent('phone_click', { location: 'mobile_menu' })} className="flex items-center gap-2 text-green-100 text-sm py-1.5">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>{p.display}</span>
                </a>
              ))}
              <a href={`mailto:${SITE.email}`} tabIndex={isMenuOpen ? 0 : -1} className="flex items-center gap-2 text-green-100 text-sm py-1.5">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{SITE.email}</span>
              </a>
            </div>

            <Link to="/" tabIndex={isMenuOpen ? 0 : -1} className={mobileLink} onClick={closeMenu}>HOME</Link>

            {[
              { key: 'about', title: 'ABOUT US', items: aboutUsItems.map((i) => ({ label: i.label, to: i.to || `/about/${i.path}` })) },
              { key: 'services', title: 'SERVICES', items: servicesItems.map((i) => ({ label: i.label, to: `/services/${i.path}` })) },
            ].map((group) => {
              const open = openSection === group.key;
              return (
                <div key={group.key}>
                  <button
                    type="button"
                    tabIndex={isMenuOpen ? 0 : -1}
                    onClick={() => setOpenSection(open ? null : group.key)}
                    aria-expanded={open}
                    aria-controls={`mobile-${group.key}`}
                    className={`${mobileLink} w-full flex items-center justify-between`}
                  >
                    {group.title}
                    <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  <div id={`mobile-${group.key}`} className={`${open ? 'block' : 'hidden'} pb-2`}>
                    {group.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        tabIndex={isMenuOpen && open ? 0 : -1}
                        className="block ml-3 pl-4 pr-3 py-2.5 border-l border-green-500 text-green-100 hover:text-white hover:bg-white/10 rounded-r-lg transition-colors text-sm"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            <Link to="/projects" tabIndex={isMenuOpen ? 0 : -1} className={mobileLink} onClick={closeMenu}>PROJECTS</Link>
            <Link to="/clients" tabIndex={isMenuOpen ? 0 : -1} className={mobileLink} onClick={closeMenu}>CLIENTS</Link>

            <Link
              to="/contact"
              tabIndex={isMenuOpen ? 0 : -1}
              className="block mt-4 px-4 py-3 bg-white text-green-700 hover:bg-green-50 rounded-lg transition-colors font-semibold text-center shadow-lg"
              onClick={closeMenu}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}