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

const toJpg = (filename) => filename.replace(/\.webp$/i, '.jpg');

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
              <picture className={styles.basePicture}>
                <source srcSet={`/assets/images/${preview}`} type="image/webp" />
                <img
                  src={`/assets/images/${toJpg(preview)}`}
                  alt={`Schematic design for ${title}`}
                  className={styles.schematicImg}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </picture>
              {previewHover && (
                <picture className={styles.hoverPicture}>
                  <source srcSet={`/assets/images/${previewHover}`} type="image/webp" />
                  <img
                    src={`/assets/images/${toJpg(previewHover)}`}
                    alt={`Hover preview for ${title}`}
                    className={`${styles.schematicImg} ${styles.hoverImg}`}
                    onError={(e) => { e.target.style.opacity = '0'; }}
                  />
                </picture>
              )}
            </a>
          ) : (
            <picture>
              <source srcSet={`/assets/images/${preview}`} type="image/webp" />
              <img
                src={`/assets/images/${toJpg(preview)}`}
                alt={`Schematic design for ${title}`}
                className={styles.schematicImg}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </picture>
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
        {[
          ['Inspiration', project.inspiration],
          ['Features', project.features],
          ['Tech Stack', project.stack],
          ['Challenges', project.challenges],
          ['Lessons', project.lessons],
          ['Future Directions', project.futureDirections],
        ].map(([label, value]) => {
          if (!value || (Array.isArray(value) && value.length === 0)) return null;
          return Array.isArray(value) ? (
            <div key={label} className={styles.cardDetail}>
              <strong>{label}:</strong>
              <ul className={styles.bulletList}>
                {value.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ) : (
            <p key={label} className={styles.cardDetail}><strong>{label}:</strong> {value}</p>
          );
        })}
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