import styles from './Hero.module.scss';
import profilePicWebP from '../../assets/images/bobngracie-bw.webp'; 
import profilePicJpg from '../../assets/images/bobngracie-bw.jpg';

const Hero = () => {
  return (
    <section className={styles.heroConsole}>
      
      <div className={styles.heroContent}>
        <h2 className={styles.heroHeadline}>
          UX + Dev + Agentic AI + PO 
        </h2>
        <h1 className={styles.humanBreak}>
          All in one human.
        </h1>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.portraitFrame}>
          <picture>
            <source srcSet={profilePicWebP} type="image/webp" />
            <img 
              src={profilePicJpg} 
              alt="Robert Mason and his dog, a professional design technologist team." 
              className={styles.halftoneImg} 
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;