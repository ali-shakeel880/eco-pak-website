import './App.css';

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Breadcrumbs from './components/Breadcrumbs';
import RouteSeo from './seo/RouteSeo';
import { SERVICE_PAGES } from './content/servicePages.js';

// Route-level code splitting: only the current page's code is downloaded.
// Pages are prerendered to static HTML at build time (scripts/prerender.mjs).
const Projects = lazy(() => import('./components/Projects'));
const Certificates = lazy(() => import('./components/Certificates'));
const Clients = lazy(() => import('./components/Clients'));
const Contact = lazy(() => import('./components/Contact'));
const CEOMessage = lazy(() => import('./components/CEOMessage'));
const CodeOfConduct = lazy(() => import('./components/CodeOfConduct'));
const OurTeam = lazy(() => import('./components/OurTeam'));
const QHSEPolicy = lazy(() => import('./components/QHSEPolicy'));
const QualityPolicy = lazy(() => import('./components/QualityPolicy'));
const EnvironmentalLaboratory = lazy(() => import('./components/EnvironmentalLaboratory'));
const EnvironmentalConsultancy = lazy(() => import('./components/EnvironmentalConsultancy'));
const TechnoLegal = lazy(() => import('./components/TechnoLegal'));
const DesignTreatment = lazy(() => import('./components/DesignTreatment'));
const ResearchInstitute = lazy(() => import('./components/ResearchInstitute'));
const CarbonFootprint = lazy(() => import('./components/CarbonFootprint'));
const AboutEcoPak = lazy(() => import('./components/AboutEcoPak'));
const ServicePage = lazy(() => import('./components/ServicePage'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = () => {
  return (
    <>
      <RouteSeo />
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Breadcrumbs />

        <main>
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about-eco-pak-services" element={<AboutEcoPak />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />

              {/* About Us Routes */}
              <Route path="/about/ceo-message" element={<CEOMessage />} />
              <Route path="/about/code-of-conduct" element={<CodeOfConduct />} />
              <Route path="/about/our-team" element={<OurTeam />} />
              <Route path="/about/qhse-policy" element={<QHSEPolicy />} />
              <Route path="/about/quality-policy" element={<QualityPolicy />} />

              {/* Services Routes */}
              <Route path="/services/environmental-laboratory" element={<EnvironmentalLaboratory />} />
              <Route path="/services/environmental-consultancy" element={<EnvironmentalConsultancy />} />
              <Route path="/services/techno-legal" element={<TechnoLegal />} />
              <Route path="/services/research-institute" element={<ResearchInstitute />} />
              <Route path="/services/design-treatment" element={<DesignTreatment />} />
              <Route path="/services/carbon-footprint" element={<CarbonFootprint />} />

              {/* Keyword-focused service landing pages */}
              {Object.values(SERVICE_PAGES).map((page) => (
                <Route key={page.path} path={page.path} element={<ServicePage page={page} />} />
              ))}

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
};

export default App;
