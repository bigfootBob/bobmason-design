import { Helmet } from 'react-helmet-async';
import styles from './Lab.module.scss';
import { labExperiments } from '../data/lab';
import LabCard from '../components/ui/LabCard';
import SEO from '../components/utils/Seo';

const easterEggItem = labExperiments.find(ex => ex.id === 'web-4');

const Lab = () => {

  return (
    <main id="main-content" className={styles.labPage}>
      <SEO 
        title="The Skunkworks | Lab" 
        description="Declassified experiments, multimedia architecture, and creative lore from the lab of Robert J. Mason." 
      />
      <Helmet>
        {easterEggItem?.slideImage && (
          <link 
            rel="preload" 
            as="image" 
            href={easterEggItem.slideImage} 
          />
        )}
      </Helmet>

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