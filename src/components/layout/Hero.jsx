import styles from './Hero.module.scss';
import profilePic from '../../assets/images/bobngracie-bw.jpg';
import { SITE_METADATA } from '../../data/constants';

const Hero = () => {
  return (
    <section className={styles.heroConsole}>
      <div className={styles.heroContent}>
        
      {/* <div className={styles.kickerGroup}>
        {SITE_METADATA.AVAILABLE_FOR_WORK && (
           <span className={styles.statusIndicator} title="Signal Active: Open to Work"></span>
        )}
        <span className={styles.kicker}>{SITE_METADATA.ROLE_TITLE}</span>
      </div> */}
        
        <h2 className={styles.heroHeadline}>
          UX + Dev + Agentic AI + PO 
        </h2>
        <h1 className={styles.humanBreak}>
          All in one human.
        </h1>

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