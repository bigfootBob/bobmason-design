import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.commsConsole}>
      <div className={styles.container}>

        <div className={styles.brand}>
          <NavLink to="/" className={styles.logo}>
            <span className={styles.logoInitials}>R.M.</span>
            <span className={styles.logoTitle}>Design Technologist</span>
          </NavLink>
        </div>

        <nav className={styles.navigation} aria-label="Main navigation">
          <ul className={styles.navList}>
            <li>
              <Link to="/#projects" className={styles.navLink}>Projects</Link>
            </li>
            <li>
              <Link to="/#resume" className={styles.navLink}>Résumé</Link>
            </li>
            <li>
              <NavLink 
                to="/lab" 
                className={({ isActive }) => 
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                Lab
              </NavLink>
            </li>
            <li>
              <Link to="/#comms" className={`${styles.navLink} ${styles.primaryAction}`}>Comms</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;