import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.commsConsole}>
      <div className={styles.container}>
        {/* TODO: The Brand / Logo */}
        <div className={styles.brand}>
          <a href="#top" className={styles.logo}>
            <span className={styles.logoInitials}>R.M.</span>
            <span className={styles.logoTitle}>Agentic Architect</span>
          </a>
        </div>

        <nav className={styles.navigation} aria-label="Main navigation">
          <ul className={styles.navList}>
            <li>
              <a href="#projects" className={styles.navLink}>Databanks</a>
            </li>
            <li>
              <a href="#manifest" className={styles.navLink}>Manifest</a>
            </li>
            <li>
              <a href="#comms" className={`${styles.navLink} ${styles.primaryAction}`}>
                Open Comms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;