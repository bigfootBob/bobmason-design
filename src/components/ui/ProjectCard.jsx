import Button from './Button';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({ project }) => {
  const { title, category, description, link, repo, preview, isDarkMode } = project;

  return (
    <article className={styles.retroCard}>
      <div className={`${styles.cardVisual} ${preview ? styles.hasSchematic : ''}`}>
        
        {preview ? (
          <img 
            src={`/assets/images/${preview}`} 
            alt={`Schematic design for ${title}`} 
            className={styles.schematicImg}
            onError={(e) => {
              e.target.style.display = 'none'; 
            }}
          />
        ) : (
          <div className={`${styles.wireframePlaceholder} ${isDarkMode ? styles.darkMode : ''}`}>
            {title}
          </div>
        )}

      </div>
      
      <div className={styles.cardContent}>
        <span className={styles.categoryTag}>{category}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
        
        <div className={styles.cardActions}>
          {link && (
            <Button href={link} variant="secondary">
              Review &rarr;
            </Button>
          )}

          {repo && (
            <Button href={repo} variant="ghost" icon="</>">
              Source Code
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;