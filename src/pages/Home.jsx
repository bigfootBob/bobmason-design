import Hero from '../components/layout/Hero';
import ProjectCard from '../components/ui/ProjectCard';
import ResumeTimeline from '../components/ui/ResumeTimeline';
import Comms from '../components/layout/Comms';
import { projects } from '../data/projects';

const Home = () => {
  return (
    <>
      <main>

        <Hero />

        <section id="projects" className="databanks-section" style={{ maxWidth: '1200px', margin: '6rem auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '3rem', borderBottom: '4px solid var(--color-console-charcoal)', paddingBottom: '1rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-tos-olive)', margin: '0 0 0.5rem 0', textTransform: 'uppercase' }}>
              Active Projects
            </h2>
            <p style={{ fontSize: '1.1rem', opacity: '0.8', margin: 0 }}>
              Current experiments in front-end architecture and product design.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <div id="resume">
          <ResumeTimeline />
        </div>

        <div id="comms">
          <Comms />
        </div>

      </main>

    </>
  );
};

export default Home;