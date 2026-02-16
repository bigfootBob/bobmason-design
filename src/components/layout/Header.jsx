import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* TODO: Logo / Brand */}
        <div className={styles.brand}>
          <NavLink to="/" className={styles.logo}>
            BobMason<span>.design</span>
          </NavLink>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/work" className={({ isActive }) => isActive ? styles.active : ''}>
                Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/lab" className={({ isActive }) => isActive ? styles.active : ''}>
                Lab
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>
                About
              </NavLink>
            </li>
            <li>
              <a href="mailto:your-email@example.com" className={styles.ctaBtn}>
                Let's Talk
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;