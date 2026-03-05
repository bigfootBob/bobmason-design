import React, { useEffect } from 'react';
import styles from './Lab.module.scss';
import { labExperiments } from '../data/lab';
import LabCard from '../components/ui/LabCard';
import { SITE_METADATA } from '../data/constants';

const Lab = () => {
  useEffect(() => {
    document.title = `The Lab | ${SITE_METADATA.TITLE}`;
  }, []);

  return (
    <main id="main-content" className={styles.labPage}>
      <div className={styles.container}>
        
        <header className={styles.labHeader}>
          <h1 className={styles.title}>The Skunkworks</h1>
          <p className={styles.subtitle}>
            Declassified experiments, multimedia architecture, and creative lore.
            This is where technical constraints meet visual exploration.
          </p>
          <div className={styles.divider}></div>
        </header>

        <div className={styles.masonryGrid}>
          {labExperiments.map((item) => (
            <LabCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </main>
  );
};

export default Lab;