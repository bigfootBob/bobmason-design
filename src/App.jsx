import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SITE_METADATA } from './data/constants';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SkipLink from './components/accessibility/SkipLink';
import ScrollToAnchor from './components/utils/ScrollToAnchor';

import Home from './pages/Home';
import Lab from './pages/Lab';
import NotFound from './pages/NotFound';

import './App.scss';

function App() {
  useEffect(() => {
    document.title = SITE_METADATA.TITLE;
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        
        <ScrollToAnchor />

        <SkipLink />

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lab" element={<Lab />} />
          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;