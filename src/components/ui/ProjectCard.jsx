import styles from './ProjectCard.module.scss';

const ProjectCard = ({ project }) => {
  const { title, category, description, link, isDarkMode } = project;

  return (
    <article className={styles.retroCard}>
      <div className={styles.cardVisual}>
        <div className={`${styles.wireframePlaceholder} ${isDarkMode ? styles.darkMode : ''}`}>
          {title}
        </div>
      </div>
      
      <div className={styles.cardContent}>
        <span className={styles.categoryTag}>{category}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
        
        <a href={link} className={styles.btnText} target="_blank" rel="noopener noreferrer">
          Review Documentation &rarr;
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;