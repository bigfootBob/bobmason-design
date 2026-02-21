import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.commsFooter}>
      <div className={styles.container}>
        
        <div className={styles.branding}>
          <span className={styles.logoInitials}>R.M.</span>
          <p className={styles.signoff}>
            Architected in the Willamette Valley.<br/>
            Powered by agentic workflows and exceptionally strong coffee.
          </p>
        </div>

        <div className={styles.linkGrid}>
          <div className={styles.linkColumn}>
            <span className={styles.columnHeader}>Frequencies</span>
            <a href="https://github.com/BigfootBob" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
          </div>
          
          <div className={styles.linkColumn}>
            <span className={styles.columnHeader}>Navigation</span>
            <a href="#projects" className={styles.link}>Databanks</a>
            <a href="#manifest" className={styles.link}>Manifest</a>
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