import React, { useState } from 'react';
import styles from './LabCard.module.scss';
import Button from './Button'; 

const LabCard = ({ item }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleThumbnailClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <article className={styles.labCard}>
      
      <header className={styles.cardHeader}>
        <div className={styles.headerLeft}>
          {item.image && (
            <div 
              className={`${styles.thumbnailFrame} ${isAnimating ? styles.wigglePop : ''}`}
              onClick={handleThumbnailClick}
              role="button"
              tabIndex="0"
              aria-label="Wiggle image"
            >
              <img 
                src={`/assets/images/${item.image}`} 
                alt={`${item.title} artifact preview`} 
                className={styles.thumbnailImg}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          )}
        </div>
        
        <div className={styles.headerRight}>
          <span className={styles.categoryTag}>[❖] {item.category}</span>
        </div>
      </header>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDesc}>{item.description}</p>
        
        <ul className={styles.tagList}>
          {item.tags.map(tag => (
            <li key={tag} className={styles.tag}>{tag}</li>
          ))}
        </ul>

        {item.link && (
          <div className={styles.cardActions}>
            <Button href={item.link} variant="design">
              Inspect Artifact &rarr;
            </Button>
          </div>
        )}
      </div>

    </article>
  );
};

export default LabCard;