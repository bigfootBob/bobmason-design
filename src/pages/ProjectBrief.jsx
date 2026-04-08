import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import SEO from '../components/utils/Seo';
import styles from './ProjectBrief.module.scss';

const SECTIONS = [
  { key: 'inspiration', label: 'Overview' },
  { key: 'features',    label: 'Features' },
  { key: 'stack',       label: 'Tech Stack' },
  { key: 'challenges',  label: 'Challenges' },
  { key: 'lessons',     label: 'Lessons Learned' },
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
      <SEO title={`${project.title} | Case Study`} description={project.inspiration || project.description} />

      <div className={styles.container}>

        <Link to="/" className={styles.backLink}>&larr; Return to Base</Link>

        <header className={styles.briefHeader}>
          <span className={styles.categoryTag}>{project.category}</span>
          <h1 className={styles.title}>{project.title}</h1>
        </header>

        {project.gallery && project.gallery.length > 0 && (
          <div className={styles.gallery}>
            {project.gallery.map((img) => (
              <figure key={img.src} className={styles.galleryItem}>
                <img src={img.src} alt={img.alt} className={styles.galleryImg} />
              </figure>
            ))}
          </div>
        )}

        <div className={styles.sections}>
          {SECTIONS.map(({ key, label }) => {
            const value = project[key];
            if (!value || (Array.isArray(value) && value.length === 0)) return null;
            return (
              <section key={key} className={styles.section}>
                <h2 className={styles.sectionLabel}>{label}</h2>
                {Array.isArray(value) ? (
                  <ul className={styles.bulletList}>
                    {value.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : (
                  <p className={styles.sectionBody}>{value}</p>
                )}
              </section>
            );
          })}
        </div>

      </div>
    </main>
  );
};

export default ProjectBrief;
