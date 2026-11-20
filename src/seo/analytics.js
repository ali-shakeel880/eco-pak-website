// Lightweight, consent-neutral analytics hook. Does nothing unless a GA4
// Measurement ID is provided at build time via VITE_GA4_ID (e.g. in the
// GitHub Actions build env). Events: phone_click, whatsapp_click,
// email_click, generate_lead (contact form success).

const GA_ID = import.meta.env.VITE_GA4_ID;

export function initAnalytics() {
  if (!GA_ID || typeof window === 'undefined' || window.gtag) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
}

export function trackEvent(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}
