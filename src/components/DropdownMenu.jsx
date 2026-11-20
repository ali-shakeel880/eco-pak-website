import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

// Desktop dropdown. Links are always present in the HTML (hidden with CSS when
// closed) so search engines can discover them; opens on hover and keyboard focus.
export default function DropdownMenu({ title, items, basePath = '' }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setIsOpen(false);
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((o) => !o)}
        className="flex items-center px-4 py-2 text-white hover:text-green-300 transition-colors"
      >
        {title}
        <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
      </button>

      <div
        className={`absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-48 z-50 whitespace-nowrap ${isOpen ? 'block' : 'hidden'}`}
      >
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.to || `${basePath}/${item.path}`}
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
