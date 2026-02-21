import styles from './Hero.module.scss';
// TODO: import profilePic from '../../assets/profile-placeholder.jpg';

const Hero = () => {
  return (
    <section className={styles.heroConsole}>
      <div className={styles.heroContent}>
        
        <div className={styles.kickerGroup}>
          <span className={styles.statusIndicator}></span>
          <span className={styles.kicker}>Front-End Developer & Strategist</span>
        </div>
        
        <h1 className={styles.heroHeadline}>
          UX + Dev + Understanding product + agentic AI all in one human.
        </h1>
        
        <div className={styles.heroActions}>
          <span className={styles.retroBadge}>CSPO Certified</span>
          <a href="#projects" className={styles.btnPrimary}>Access Databanks</a>
        </div>

      </div>

      <div className={styles.heroVisual}>
        <div className={styles.portraitFrame}>
          <div className={styles.halftoneImgPlaceholder}></div>
          {/* placeholder for pic */}
          {/* <img src={profilePic} alt="Robert J. Mason" className={styles.halftoneImg} /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;