import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Show success message
      setShowSuccess(true);
      setEmail('');
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-green-400 mb-3">Eco Pak Services</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Pakistan's premier environmental solutions provider, committed to sustainable development and environmental protection through innovative services and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                {/* Social media links can be added here */}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/environmental-laboratory" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 block">Environmental Laboratory</Link></li>
              <li><Link to="/services/environmental-consultancy" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 block">Environmental Consultancy</Link></li>
              <li><Link to="/services/techno-legal" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 block">Techno-Legal Services</Link></li>
              <li><Link to="/services/research-institute" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 block">Research Institute</Link></li>
              <li><Link to="/services/design-treatment" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 block">Design & Treatment Services</Link></li>
              <li><Link to="/services/carbon-footprint" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 block">Carbon Footprint</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about/ceo-message" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 block">About Us</Link></li>
              <li><Link to="/about/our-team" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 block">Our Team</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 block">Projects</Link></li>
              <li><Link to="/clients" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 block">Clients</Link></li>
              <li><Link to="/about/qhse-policy" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 block">QHSE Policy</Link></li>
              <li><Link to="/about/quality-policy" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 block">Quality Policy</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Get In Touch</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <div>
                  <p className="text-gray-300">info@ecopakservices.com</p>
                  <p className="text-gray-400 text-sm">General Inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <div>
                  <a href="tel:+923001050996" className="text-gray-300 hover:underline block">
                    +92 300 1050996
                  </a>
                  <a href="tel:+923001050977" className="text-gray-300 hover:underline block">
                    +92 300 1050977
                  </a>
                  <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="text-gray-300">Lahore, Pakistan</p>
                  <p className="text-gray-400 text-sm">Head Office</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h5 className="font-semibold mb-3 text-green-400">Stay Updated</h5>
              <p className="text-gray-400 text-sm mb-3">Subscribe to our newsletter for environmental insights and updates.</p>
              
              {/* Success Message */}
              {showSuccess && (
                <div className="mb-3 p-3 bg-green-500 bg-opacity-20 border border-green-400 rounded-md">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-green-400 text-sm font-medium">
                      Successfully subscribed to our newsletter!
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-r-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Strip */}
      <div className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center mb-4">
            <h5 className="text-green-400 font-semibold mb-2">Certified & Accredited</h5>
            <p className="text-gray-400 text-sm">Trusted by leading organizations and certified by international standards</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-400 text-sm font-medium">ISO 9001:2015</div>
            <div className="text-gray-400 text-sm font-medium">ISO 14001:2015</div>
            <div className="text-gray-400 text-sm font-medium">OHSAS 18001</div>
            <div className="text-gray-400 text-sm font-medium">NEQS Compliant</div>
            <div className="text-gray-400 text-sm font-medium">EPA Approved</div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black bg-opacity-30 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Eco Pak Services. All rights reserved.
              </p>
              {/* <div className="flex space-x-4">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</Link>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</Link>
                <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Sitemap</Link>
              </div> */}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Powered by sustainable technology</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;