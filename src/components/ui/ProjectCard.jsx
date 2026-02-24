import styles from './ProjectCard.module.scss';

const ProjectCard = ({ project }) => {
  // Destructure 'preview' from your project data
  const { title, category, description, link, repo, preview, isDarkMode } = project;

  return (
    <article className={styles.retroCard}>
      {/* We add a modifier class 'hasSchematic' if a preview exists.
         This allows us to remove padding in the CSS so the image fits perfectly.
      */}
      <div className={`${styles.cardVisual} ${preview ? styles.hasSchematic : ''}`}>
        
        {preview ? (
          // --- OPTION A: THE SCHEMATIC IMAGE ---
          <img 
            src={`/assets/images/${preview}`} 
            alt={`Schematic design for ${title}`} 
            className={styles.schematicImg}
            onError={(e) => {
              // Safety Net: If the image fails to load, hide it and reveal a fallback
              e.target.style.display = 'none'; 
            }}
          />
        ) : (
          // --- OPTION B: THE WIREFRAME FALLBACK ---
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
            <a href={link} className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
              Review Docs &rarr;
            </a>
          )}
          {repo && (
            <a href={repo} className={styles.btnSecondary} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;


// import styles from './ProjectCard.module.scss';

// const ProjectCard = ({ project }) => {
//   const { title, category, description, link, repo, preview, isDarkMode } = project;

//   return (
//     <article className={styles.retroCard}>
//       <div className={styles.cardVisual}>
//         <div className={`${styles.wireframePlaceholder} ${isDarkMode ? styles.darkMode : ''}`}>
//           {title}
//           {preview && (
//             <img 
//               src={`/assets/images/${preview}`}
//               alt={title} 
//               className="preview-img-element"
//               onError={() => handleImageError(index)}
//             />
//           )}

//         </div>
//       </div>
      
//       <div className={styles.cardContent}>
//         <span className={styles.categoryTag}>{category}</span>
//         <h3 className={styles.cardTitle}>{title}</h3>
//         <p className={styles.cardDesc}>{description}</p>
        
//         <a href={link} className={styles.btnText} target="_blank" rel="noopener noreferrer">
//           Review &rarr;
//         </a>

//         {repo && (
//           <a href={repo} className={styles.btnSecondary} target="_blank" rel="noopener noreferrer" aria-label={`View source code for ${title}`}>
//             Source Code &rarr;
//           </a>
//         )}
//       </div>
//     </article>
//   );
// };

// export default ProjectCard;