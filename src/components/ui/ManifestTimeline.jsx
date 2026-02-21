import { experience } from '../../data/experience';
import styles from './ManifestTimeline.module.scss';

const ManifestTimeline = () => {
  return (
    <section className={styles.manifestSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>The Manifest</h2>
        <p className={styles.sectionSubtitle}>Service record, architectural leadership, and credentials.</p>
      </div>

      <div className={styles.timeline}>
        {experience.map((item) => (
          <div 
            key={item.id} 
            className={`${styles.timelineNode} ${item.type === 'certification' ? styles.certNode : ''}`}
          >
            <div className={styles.nodeMarker}></div>
            
            <div className={styles.nodeCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.date}>{item.date}</span>
              </div>
              <h4 className={styles.organization}>{item.organization}</h4>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManifestTimeline;