import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Mlogo from '../../components/ui/Mlogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className={styles.commsConsole}>
      <div className={styles.container}>

      <div className={styles.brand}>
          <NavLink to="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoInitials}>
              {!logoError ? (
                <Mlogo 
                  width={48} 
                  height={48} 
                  radius={6}
                  className="mr-4 rounded-md overflow-hidden" 
                  onError={() => setLogoError(true)} 
                />
              ) : (
                "M"
              )}
            </span>
            <span className={styles.logoTitle}>Bob Mason Design Technologist</span>
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
              <Link to="/#testimonials" className={styles.navLink} onClick={closeMenu}>Testimonials</Link>
            </li>
            <li>
              <Link to="/#comms" className={`${styles.navLink} ${styles.primaryAction}`} onClick={closeMenu}>Comms</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;