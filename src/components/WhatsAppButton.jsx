import React, { useState, useEffect, useRef } from 'react';
import { trackEvent } from '../seo/analytics.js';

const WhatsAppButton = () => {
  // Phone numbers with priority (only 2 numbers as requested)
  const phoneNumbers = [
    { 
      number: "923001050996", 
      priority: 1, 
      label: "Primary Support",
      message: "Hello! I'm contacting your primary support line."
    },
    { 
      number: "923001050977", 
      priority: 2, 
      label: "Sales Team",
      message: "Hello! I'm interested in your services and products."
    }
  ];

  const [showOptions, setShowOptions] = useState(false);
  const rootRef = useRef(null);

  // Close the options popup on outside tap/click or Escape.
  useEffect(() => {
    if (!showOptions) return undefined;
    const onDown = (e) => rootRef.current && !rootRef.current.contains(e.target) && setShowOptions(false);
    const onKey = (e) => e.key === 'Escape' && setShowOptions(false);
    document.addEventListener('pointerdown', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [showOptions]);
  
  // Sort by priority (lowest number = highest priority)
  const sortedNumbers = phoneNumbers.sort((a, b) => a.priority - b.priority);
  
  const handleWhatsAppClick = (phoneData) => {
    const encodedMessage = encodeURIComponent(phoneData.message);
    const whatsappUrl = `https://wa.me/${phoneData.number}?text=${encodedMessage}`;
    trackEvent('whatsapp_click', { location: 'floating_button' });
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setShowOptions(false);
  };

  const handlePrimaryClick = () => {
    // Show options menu instead of directly calling
    setShowOptions(!showOptions);
  };

  return (
    <div ref={rootRef} className="whatsapp-fab fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Options menu */}
      {showOptions && (
        <div role="menu" className="absolute bottom-full mb-3 right-0 bg-white rounded-lg shadow-lg border border-gray-200 p-2 w-56 max-w-[calc(100vw-2rem)]">
          <div className="text-sm font-medium text-gray-700 px-3 py-2 border-b border-gray-100">
            Choose Contact Method
          </div>
          {sortedNumbers.map((phoneData) => (
            <button
              key={phoneData.number}
              role="menuitem"
              onClick={() => handleWhatsAppClick(phoneData)}
              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-green-50 rounded flex items-center justify-between transition-colors duration-200"
            >
              <div>
                <div className="font-medium">{phoneData.label}</div>
                <div className="text-xs text-gray-500">{`+${phoneData.number.slice(0, 2)} ${phoneData.number.slice(2, 5)} ${phoneData.number.slice(5)}`}</div>
              </div>
              {phoneData.priority === 1 && (
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Priority
                </span>
              )}
            </button>
          ))}
          <button
            onClick={() => setShowOptions(false)}
            className="w-full text-center px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 rounded mt-1 border-t border-gray-100"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Single WhatsApp button with integrated options */}
      <div className="relative">
        {!showOptions && (
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping motion-reduce:hidden" aria-hidden="true" />
        )}
        <button
          onClick={handlePrimaryClick}
          className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 relative group"
          aria-label="Contact us on WhatsApp"
          aria-haspopup="menu"
          aria-expanded={showOptions}
        >
          <svg
            width="32"
            height="32"
            className="w-7 h-7 sm:w-8 sm:h-8"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"/>
          </svg>
          
          {/* Three dots indicator inside the button */}
          <div className="absolute top-1 right-1 flex space-x-0.5">
            <div className="w-1 h-1 bg-white rounded-full opacity-70"></div>
            <div className="w-1 h-1 bg-white rounded-full opacity-70"></div>
            <div className="w-1 h-1 bg-white rounded-full opacity-70"></div>
          </div>
          
          {/* Long press indicator (appears on hover) */}
          <div className="hidden md:block absolute -top-9 right-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-75 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Click to choose contact
          </div>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;