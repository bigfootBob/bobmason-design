import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SITE_METADATA } from './data/constants';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SkipLink from './components/accessibility/SkipLink';

import Home from './pages/Home';
import Lab from './pages/Lab';

import './App.scss';

function App() {
  useEffect(() => {
    document.title = SITE_METADATA.TITLE;
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        <SkipLink />
        
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lab" element={<Lab />} />
 
          {/* Fallback 404 Route */}
          <Route path="*" element={<div style={{ padding: '10rem', textAlign: 'center', color: 'white' }}>404 - Lost in the woods</div>} />
        </Routes>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;