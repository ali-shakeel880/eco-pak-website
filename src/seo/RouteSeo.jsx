import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { findRoute } from './routes.js';
import { buildHead } from './head.js';

// Keeps <head> in sync on client-side navigation. The initial values are
// written into static HTML at build time by scripts/prerender.mjs.
export default function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const h = buildHead(findRoute(pathname));
    document.title = h.title;

    document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
    for (const m of h.metas) {
      const el = document.createElement('meta');
      if (m.name) el.setAttribute('name', m.name);
      else el.setAttribute('property', m.property);
      el.setAttribute('content', m.content);
      el.setAttribute('data-seo', '');
      document.head.appendChild(el);
    }
    if (h.canonical) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = h.canonical;
      link.setAttribute('data-seo', '');
      document.head.appendChild(link);
    }

    let ld = document.getElementById('ld-json');
    if (h.jsonLd) {
      if (!ld) {
        ld = document.createElement('script');
        ld.type = 'application/ld+json';
        ld.id = 'ld-json';
        document.head.appendChild(ld);
      }
      ld.textContent = JSON.stringify(h.jsonLd);
    } else if (ld) {
      ld.remove();
    }
  }, [pathname]);

  return null;
}
