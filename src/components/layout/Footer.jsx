import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>BobMason.design</h3>
          <p>Designed and built in the Willamette Valley.</p>
        </div>
        
        <div className={styles.links}>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:your-email@example.com">Email</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {currentYear} Robert Joseph Mason. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;