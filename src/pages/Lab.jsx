import React, { useEffect } from 'react';
import styles from './Lab.module.scss';
import { labExperiments } from '../data/lab';
import Button from '../components/ui/Button'; 
import { SITE_METADATA } from '../data/constants';

const Lab = () => {
  useEffect(() => {
    document.title = `The Lab | ${SITE_METADATA.TITLE}`;
  }, []);

  return (
    <main className={styles.labPage}>
      <div className={styles.container}>
        
        <header className={styles.labHeader}>
          <h1 className={styles.title}>The Skunkworks</h1>
          <p className={styles.subtitle}>
            Declassified experiments, multimedia architecture, and creative lore.
            This is where technical constraints meet visual exploration.
          </p>
        </header>

        <div className={styles.masonryGrid}>
          {labExperiments.map((item) => (
            <article key={item.id} className={styles.labCard}>
              
              {/* Image Frame (The "Museum Matte") */}
              <div className={styles.cardVisual}>
                <img 
                  src={`/assets/images/${item.image}`} 
                  alt={`Preview of ${item.title}`} 
                  className={styles.cardImg}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <span className={styles.categoryTag}>[❖] {item.category}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
                
                {/* Tags */}
                <ul className={styles.tagList}>
                  {item.tags.map(tag => (
                    <li key={tag} className={styles.tag}>{tag}</li>
                  ))}
                </ul>

                {/* Actions */}
                {item.link && (
                  <div className={styles.cardActions}>
                    <Button href={item.link} variant="design">
                      Inspect Artifact &rarr;
                    </Button>
                  </div>
                )}
              </div>

            </article>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Lab;