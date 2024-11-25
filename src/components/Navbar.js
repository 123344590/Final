import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.link}>Inicio</Link>
        </li>
        <li>
          <Link to="/planets" className={styles.link}>Planetas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
