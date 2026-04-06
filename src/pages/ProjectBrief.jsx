import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import SEO from '../components/utils/Seo';
import styles from './ProjectBrief.module.scss';

const SECTIONS = [
  { key: 'description',      label: 'Overview' },
  { key: 'inspiration',      label: 'Inspiration' },
  { key: 'features',         label: 'Features' },
  { key: 'challenges',       label: 'Challenges' },
  { key: 'lessons',          label: 'Lessons Learned' },
  { key: 'futureDirections', label: 'Future Directions' },
];

const ProjectBrief = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <main id="main-content" className={styles.briefPage}>
        <div className={styles.container}>
          <h1 className={styles.notFound}>Project not found</h1>
          <Link to="/" className={styles.backLink}>&larr; Return to Base</Link>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className={styles.briefPage}>
      <SEO title={`${project.title} | Case Study`} description={project.description} />

      <div className={styles.container}>

        <Link to="/" className={styles.backLink}>&larr; Return to Base</Link>

        <header className={styles.briefHeader}>
          <span className={styles.categoryTag}>{project.category}</span>
          <h1 className={styles.title}>{project.title}</h1>
        </header>

        <div className={styles.sections}>
          {SECTIONS.map(({ key, label }) =>
            project[key] ? (
              <section key={key} className={styles.section}>
                <h2 className={styles.sectionLabel}>{label}</h2>
                <p className={styles.sectionBody}>{project[key]}</p>
              </section>
            ) : null
          )}
        </div>

      </div>
    </main>
  );
};

export default ProjectBrief;
