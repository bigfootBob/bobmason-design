import React from 'react';
import SkipLink from './components/accessibility/SkipLink';
import ProjectCard from './components/ui/ProjectCard'; 
import { projectData } from './data/projects'; 

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
              {/* Debugging: Check if data exists in the console */}
              {console.log("Current Data:", projectData)}

            {projectData.map((project) => (
              <ProjectCard 
                key={project.id} 
                {...project}
              />
            ))}
           {/* {projectData.map((project) => (
             <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                linkUrl={project.linkUrl}
                linkText={project.linkText}
                imageUrl={project.imageUrl}
             />
           ))} */}

        </section>
      </main>

      <footer role="contentinfo" style={{ textAlign: 'center', padding: '2rem', marginTop: '2rem', borderTop: '1px solid #ddd' }}>
        <p>© {new Date().getFullYear()} Robert Mason</p>
      </footer>
    </div>
  );
}

export default App;