import styles from './Footer.module.scss';
import { SOCIALS, SITE_METADATA } from '../../data/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.commsFooter}>
      <div className={styles.container}>
        
        <div className={styles.branding}>
          <span className={styles.logoInitials}>R.M.</span>
          <p className={styles.signoff}>
            Architected in the Willamette Valley.<br/>
            Powered by podcasts and exceptionally strong coffee.
          </p>
        </div>

        <div className={styles.linkGrid}>
          <div className={styles.linkColumn}>
            <span className={styles.columnHeader}>Frequencies</span>
            <a 
              href={SOCIALS.GITHUB}
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}>GitHub</a>
            <a 
              href={SOCIALS.LINKEDIN} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}>LinkedIn</a>
          </div>
          
          <div className={styles.linkColumn}>
            <span className={styles.columnHeader}>Navigation</span>
            <a href="#projects" className={styles.link}>Projects</a>
            <a href="#resume" className={styles.link}>Resume</a>
          </div>
        </div>

      </div>
      
      <div className={styles.copyright}>
        &copy; {currentYear} Robert J. Mason.
      </div>
    </footer>
  );
};

export default Footer;