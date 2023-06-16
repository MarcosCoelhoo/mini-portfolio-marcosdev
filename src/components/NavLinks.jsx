import styles from './NavLinks.module.css';
import { Laugh, SquareStack } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to={'/'} end>
        <SquareStack className={styles.icon} />
        Projetos
      </NavLink>

      <NavLink to={'/about'}>
        <Laugh className={styles.icon} />
        Sobre
      </NavLink>
    </nav>
  );
};

export default NavLinks;
