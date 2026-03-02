import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  // mobile header
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.commsConsole}>
      <div className={styles.container}>

        <div className={styles.brand}>
          <NavLink to="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoInitials}>R.M.</span>
            <span className={styles.logoTitle}>Design Technologist</span>
          </NavLink>
        </div>

        <button 
          className={`${styles.mobileToggle} ${isMenuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className={styles.hamburger}></span>
        </button>

        <nav 
          className={`${styles.navigation} ${isMenuOpen ? styles.isOpen : ''}`} 
          aria-label="Main navigation"
        >
          <ul className={styles.navList}>
            <li>
              <Link to="/#projects" className={styles.navLink} onClick={closeMenu}>Projects</Link>
            </li>
            <li>
              <Link to="/#resume" className={styles.navLink} onClick={closeMenu}>Résumé</Link>
            </li>
            <li>
              <NavLink 
                to="/lab" 
                className={({ isActive }) => 
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
                onClick={closeMenu}
              >
                Lab
              </NavLink>
            </li>
            <li>
              <Link to="/#comms" className={`${styles.navLink} ${styles.primaryAction}`} onClick={closeMenu}>Comms</Link>
            </li>
          </ul>
        </nav>

        {/* <nav className={styles.navigation} aria-label="Main navigation">
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
        </nav> */}
      </div>
    </header>
  );
};

export default Header;