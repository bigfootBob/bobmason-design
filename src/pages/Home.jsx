import Hero from '../components/layout/Hero';
import ProjectCard from '../components/ui/ProjectCard';
import ResumeTimeline from '../components/ui/ResumeTimeline';
import Testimonials from '../components/layout/Testimonials';
import Comms from '../components/layout/Comms';
import { projects } from '../data/projects';

const Home = () => {
  return (
    <>
      <main id="main-content" className='homePage'>

        <Hero />

        <section id="projects" className="databanks-section">
          <div className="section-header">
            <h2 className="section-title">
              Personal Projects
            </h2>
            <p className="section-subtitle">
              Things I built because I couldn't help myself.
            </p>
          </div>

          <div className="project-grid">
            {projects.filter(p => p.projectType === 'personal').map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="profprojects" className="databanks-section">
          <div className="section-header">
            <h2 className="section-title">
              Professional Projects
            </h2>
            <p className="section-subtitle">
              My previous work projects showcasing front-end development and design.
            </p>
          </div>

          <div className="project-grid">
            {projects.filter(p => p.projectType === 'professional').map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <div id="resume">
          <ResumeTimeline />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>

        <div id="comms">
          <Comms />
        </div>

      </main>

    </>
  );
};

export default Home;