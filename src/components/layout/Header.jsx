import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.commsConsole}>
      <div className={styles.container}>
        {/* TODO: The Brand / Logo */}
        <div className={styles.brand}>
          <a href="#top" className={styles.logo}>
            <span className={styles.logoInitials}>R.M.</span>
            <span className={styles.logoTitle}>Design Technologist</span>
          </a>
        </div>

        <nav className={styles.navigation} aria-label="Main navigation">
          <ul className={styles.navList}>
            <li>
              <a href="#projects" className={styles.navLink}>Projects</a>
            </li>
            <li>
              <a href="#manifest" className={styles.navLink}>Résumé</a>
            </li>
            <li>
              <a href="#comms" className={`${styles.navLink} ${styles.primaryAction}`}>
                Comms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;