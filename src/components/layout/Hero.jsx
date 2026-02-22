import styles from './Hero.module.scss';
import profilePic from '../../assets/images/bobngracie-bw.jpg';

const Hero = () => {
  return (
    <section className={styles.heroConsole}>
      <div className={styles.heroContent}>
        
        <div className={styles.kickerGroup}>
          <span className={styles.statusIndicator}></span>
          <span className={styles.kicker}>Front-End Developer & Strategist</span>
        </div>
        
        <h1 className={styles.heroHeadline}>
          UX + Dev + Product + Agentic AI
          <span className={styles.humanBreak}>All in one human.</span>
        </h1>
        
        {/* <div className={styles.heroActions}>
          <span className={styles.retroBadge}>CSPO Certified</span>
          <a href="#projects" className={styles.btnPrimary}>Access Databanks</a>
        </div> */}

      </div>

      <div className={styles.heroVisual}>
        <div className={styles.portraitFrame}>
          <img 
            src={profilePic} 
            alt="Robert Mason and his dog, a professional design technologist team." 
            className={styles.halftoneImg} 
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;