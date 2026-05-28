import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SEO from './components/utils/Seo';
import GoogleAnalytics from './components/utils/GoogleAnalytics';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SkipLink from './components/accessibility/SkipLink';
import ScrollToAnchor from './components/utils/ScrollToAnchor';

import Home from './pages/Home';
import ProjectBrief from './pages/ProjectBrief';
import Timer from './pages/Timer';
import NotFound from './pages/NotFound';

import './App.scss';

const BARE_ROUTES = ['/timer'];

function AppShell() {
  const { pathname } = useLocation();
  const bare = BARE_ROUTES.includes(pathname);

  return (
    <div className="app-wrapper">
      <SEO />
      <GoogleAnalytics />
      <ScrollToAnchor />
      {!bare && <SkipLink />}
      {!bare && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:id" element={<ProjectBrief />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!bare && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;