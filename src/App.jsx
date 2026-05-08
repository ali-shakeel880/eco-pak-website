
import './App.css'


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Clients from './components/Clients';

import Contact from './components/Contact';
import Navigation from './components/Navigation';
import CEOMessage from './components/CEOMessage';
import CodeOfConduct from './components/CodeOfConduct';
import OurTeam from './components/OurTeam';
import QHSEPolicy from './components/QHSEPolicy';
import QualityPolicy from './components/QualityPolicy';
import EnvironmentalLaboratory from './components/EnvironmentalLaboratory';
import EnvironmentalConsultancy from './components/EnvironmentalConsultancy';
import TechnoLegal from './components/TechnoLegal';
import DesignTreatment from './components/DesignTreatment';
import ResearchInstitute from './components/ResearchInstitute';
import CarbonFootprint from './components/CarbonFootprint';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  return (
    
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact/>} />
            
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
          </Routes>
        </main>
        <WhatsAppButton />
        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
  <Footer/>
</footer>
      </div>
    </Router>
  );
};

export default App;