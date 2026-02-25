import { experience } from '../../data/experience';
import styles from './ResumeTimeline.module.scss';

const ResumeTimeline = () => {
  return (
    <section className={styles.resumeSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Résumé</h2>
        <p className={styles.sectionSubtitle}>Service record credentials.</p>
      </div>

      <div className={styles.timeline}>
        {experience.map((item) => (
          <div 
            key={item.id} 
            className={`
              ${styles.timelineNode} 
              ${item.type === 'certification' ? styles.certNode : ''} 
              ${item.type === 'currentrole' ? styles.currNode : ''}
            `}
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

export default ResumeTimeline;