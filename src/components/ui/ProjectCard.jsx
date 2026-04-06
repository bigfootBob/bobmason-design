import Button from './Button';
import styles from './ProjectCard.module.scss';

const sanitizeUrl = (url) => {
  if (!url) return null;
  if (url.startsWith('/')) return url; // allow internal paths
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:' ? url : null;
  } catch {
    return null;
  }
};

const ProjectCard = ({ project }) => {
  const { title, category, preview, previewHover, isDarkMode } = project;
  const link = sanitizeUrl(project.link);
  const repo = sanitizeUrl(project.repo);

  return (
    <article className={styles.retroCard}>
      <div className={`${styles.cardVisual} ${preview ? styles.hasSchematic : ''}`}>
        
        {preview ? (
          link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageLink}
              aria-label={`Open project: ${title}`}
            >
              <img
                src={`/assets/images/${preview}`}
                alt={`Schematic design for ${title}`}
                className={`${styles.schematicImg} ${styles.baseImg}`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              {previewHover && (
                <img
                  src={`/assets/images/${previewHover}`}
                  alt={`Hover preview for ${title}`}
                  className={`${styles.schematicImg} ${styles.hoverImg}`}
                  onError={(e) => {
                    e.target.style.opacity = '0';
                  }}
                />
              )}
            </a>
          ) : (
            <img 
              src={`/assets/images/${preview}`} 
              alt={`Schematic design for ${title}`} 
              className={styles.schematicImg}
              onError={(e) => {
                e.target.style.display = 'none'; 
              }}
            />
          )
        ) : (
          <div className={`${styles.wireframePlaceholder} ${isDarkMode ? styles.darkMode : ''}`}>
            {title}
          </div>
        )}

      </div>
      
      <div className={styles.cardContent}>
        <span className={styles.categoryTag}>{category}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDetail}>
          <strong>Description:</strong> {project.description}
        </p>
        <p className={styles.cardDetail}>
          <strong>Inspiration:</strong> {project.inspiration}
        </p>
        <p className={styles.cardDetail}>
          <strong>Features:</strong> {project.features}
        </p>
        <p className={styles.cardDetail}>
          <strong>Challenges:</strong> {project.challenges}
        </p>
        <p className={styles.cardDetail}>
          <strong>Lessons:</strong> {project.lessons}
        </p>
        <p className={styles.cardDetail}>
          <strong>Future Directions:</strong> {project.futureDirections}
        </p>
        <div className={styles.cardActions}>
          {link && (
            <Button href={link} variant="secondary">
              View Project &rarr;
            </Button>
          )}
        </div>
        <div className={styles.navlink}>
          {repo && (
            repo === 'proprietary codebase' ? (
              <span className={styles.proprietaryLabel}>&lt;/&gt; Proprietary Codebase</span>
            ) : (
              <Button href={repo} variant="ghost" icon="</>">
                Source Code
              </Button>
            )
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;