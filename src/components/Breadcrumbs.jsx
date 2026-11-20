import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { findRoute } from '../seo/routes.js';

// Visible breadcrumb trail; mirrors the BreadcrumbList JSON-LD for the route.
export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const route = findRoute(pathname);
  if (!route.breadcrumb) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
      <ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center text-sm text-gray-500">
        {route.breadcrumb.map((c, i) => {
          const last = i === route.breadcrumb.length - 1;
          return (
            <li key={c.name} className="flex items-center">
              {i > 0 && <ChevronRight className="w-4 h-4 mx-1 text-gray-400" aria-hidden="true" />}
              {last || !c.path ? (
                <span aria-current={last ? 'page' : undefined} className={last ? 'text-green-700 font-medium' : ''}>{c.name}</span>
              ) : (
                <Link to={c.path} className="hover:text-green-700">{c.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
