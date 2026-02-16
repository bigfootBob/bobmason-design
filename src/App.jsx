import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// pages
import Home from './pages/Home';
// import Work from './pages/Work';
// import Lab from './pages/Lab';
// import About from './pages/About';

// styles
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
      
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/work" element={<Work />} /> */}
          {/* <Route path="/lab" element={<Lab />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          
          {/* Fallback 404 Route */}
          <Route path="*" element={<div style={{ padding: '10rem', textAlign: 'center', color: 'white' }}>404 - Lost in the woods</div>} />
        </Routes>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;