import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';

// Import statement for React Router (this would be installed via npm)
// npm install react-router-dom

// Component for dropdown navigation
export default function DropdownMenu({ title, items, basePath = '' }){
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center px-4 py-2 text-white hover:text-green-300 transition-colors">
        {title}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-48 z-50">
          {items.map((item, index) => (
            <Link
              key={index}
              to={`${basePath}/${item.path}`}
              className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
