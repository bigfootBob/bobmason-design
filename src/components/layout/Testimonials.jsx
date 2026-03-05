import styles from './Testimonials.module.scss';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection} aria-labelledby="testimonials-heading">
      <div className={styles.container}>
        
        <header className={styles.sectionHeader}>
          <h2 id="testimonials-heading" className={styles.heading}>Peer Telemetry</h2>
          <p className={styles.subheading}>Performance logs and field reports from previous commands.</p>
          <div className={styles.divider}></div>
        </header>

        <div className={styles.logGrid}>
          {testimonials.map((rec) => (
            <blockquote key={rec.id} className={styles.testimonialCard}>
              <div className={styles.authorBlock}>
                <div className={styles.avatar}>{rec.avatarInitials}</div>
                <cite className={styles.authorMeta}>
                  <span className={styles.authorName}>{rec.name}</span>
                  <span className={styles.authorTitle}>{rec.title}</span>
                  <span className={styles.authorDate}>{rec.date}</span>
                </cite>
              </div>
              <p className={styles.quoteText}>"{rec.text}"</p>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;