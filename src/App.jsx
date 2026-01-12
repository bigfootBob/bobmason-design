import React from 'react';
import SkipLink from './components/accessibility/SkipLink';
import ProjectCard from './components/ui/ProjectCard'; 

function App() {
  return (
    <div className="app-container">
      <SkipLink />
      
      <header role="banner" style={{ padding: '2rem', textAlign: 'center' }}>
        <nav role="navigation" aria-label="Main">
          <h1>Robert Mason</h1>
          <p>Accessibility Specialist | Design Technologist</p>
        </nav>
      </header>

      <main id="main-content" role="main" style={{ padding: '2rem' }}>
        
        <section className="intro">
          <h2>Recent Work</h2>
          <p>Projects focused on accessible UI and modern frontend architecture.</p>
        </section>

        <section className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
           
           <ProjectCard 
              title="Uncanny Coffee Hour"
              description="A fully accessible podcast platform featuring an AI co-host (Soercia). Built to ensure WCAG 2.1 compliance."
              tags={['Svelte', 'A11y', 'Audio API']}
              linkUrl="https://uncannycoffeehour.com" // Update this if needed
              linkText="Listen to Episodes"
              imageUrl="https://placehold.co/600x400/222/fff?text=Uncanny+Coffee" // Placeholder for now
           />

           <ProjectCard 
              title="Bob Mason Design System"
              description="A React-based component library demonstrating best practices in semantic HTML and keyboard navigation."
              tags={['React', 'Vite', 'CSS Modules']}
              linkUrl="#" 
              linkText="View Source on GitHub"
              imageUrl="https://placehold.co/600x400/0056b3/fff?text=Portfolio" 
           />

        </section>
      </main>

      <footer role="contentinfo" style={{ textAlign: 'center', padding: '2rem', marginTop: '2rem', borderTop: '1px solid #ddd' }}>
        <p>© {new Date().getFullYear()} Robert Mason</p>
      </footer>
    </div>
  );
}

export default App;