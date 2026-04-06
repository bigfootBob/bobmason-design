import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEO from './components/utils/Seo'; 
import GoogleAnalytics from './components/utils/GoogleAnalytics';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SkipLink from './components/accessibility/SkipLink';
import ScrollToAnchor from './components/utils/ScrollToAnchor';

import Home from './pages/Home';
import ProjectBrief from './pages/ProjectBrief';
import NotFound from './pages/NotFound';

import './App.scss';

function App() { 
  return (
    <Router>
      <div className="app-wrapper">
        <SEO />
        <GoogleAnalytics />
        
        <ScrollToAnchor />
        <SkipLink />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/:id" element={<ProjectBrief />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;