import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, Facebook, Linkedin, Instagram, Send, CheckCircle, AlertCircle, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    recipient: 'info@ecopakservices.com'
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // EmailJS configuration for different recipients
  const emailConfig = {
    'ceo@ecopakservices.com': {
      serviceId: 'service_i14ihut',
      templateId: 'template_0sojtqv',
      publicKey: 'BuOru05yW6AElFy1x'
    },
    'info@ecopakservices.com': {
      serviceId: 'service_6uv76tf',
      templateId: 'template_z1px7fa',
      publicKey: '_8Defa9DJBLN4Z18c'
    },
    'director@ecopakservices.com': {
      serviceId: 'service_udsmcqg',
      templateId: 'template_qwckgmj',
      publicKey: 'e-4fiTBaD1n3BXc-k'
    },
    
  };

  // Initialize EmailJS
  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize with default public key
      window.emailjs.init(emailConfig['info@ecopakservices.com'].publicKey);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    setIsLoading(true);
    setStatus('');

    try {
      // Get configuration for selected recipient
      const config = emailConfig[formData.recipient];
      
      if (!config) {
        throw new Error('Invalid recipient configuration');
      }

      // Re-initialize EmailJS with the correct public key for the recipient
      window.emailjs.init(config.publicKey);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: formData.recipient,
        subject: formData.subject || 'Contact Form Submission',
        message: formData.message,
        reply_to: formData.email
      };

      // Send email using EmailJS
      const result = await window.emailjs.send(
        config.serviceId,
        config.templateId,
        templateParams
      );

      console.log('Email sent successfully:', result);
      setStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        recipient: 'info@ecopakservices.com'
      });

    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('send_error');
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone Numbers',
      items: ['+92 300 1050996', '+92 300 1050977'],
      action: (item) => window.open(`tel:${item}`)
    },
    {
      icon: Mail,
      label: 'Email Addresses',
      items: ['ceo@ecopakservices.com', 'info@ecopakservices.com','director@ecopakservices.com'],
      action: (item) => window.open(`mailto:${item}`)
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our expert team for innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((contact, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-xl mr-4">
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{contact.label}</h3>
                </div>
                <div className="space-y-2">
                  {contact.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      onClick={() => contact.action(item)}
                      className="block w-full text-left text-gray-600 hover:text-green-600 hover:bg-green-50 p-2 rounded-lg transition-all duration-200"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}

        

            {/* Business Hours Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg mr-3">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-red-500 font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-xl mr-4">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Send us a Message</h3>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center animate-pulse">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                  <span className="text-red-700">Please fill in all required fields.</span>
                </div>
              )}

              {status === 'send_error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                  <span className="text-red-700">Failed to send message. Please try again or contact us directly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Recipient Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Send to</label>
                  <div className="relative">
                    <select
                      name="recipient"
                      value={formData.recipient}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white appearance-none pr-10"
                    >
                      <option value="info@ecopakservices.com">General Inquiries - info@ecopakservices.com</option>
                       <option value="ceo@ecopakservices.com">CEO - ceo@ecopakservices.com</option>
                       <option value="director@ecopakservices.com">Director - director@ecopakservices.com</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    rows="6"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-3" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">
                * Required fields. We'll get back to you within 24 hours.
              </div>

            
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}