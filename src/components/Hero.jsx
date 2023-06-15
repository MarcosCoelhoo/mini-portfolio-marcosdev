import styles from './Hero.module.css';
import { Github, FileText } from 'lucide-react';
import React from 'react';

const Hero = () => {
  return (
    <header className={styles.hero}>
      <img
        className={styles.image}
        src="https://avatars.githubusercontent.com/u/101224501?v=4"
        alt="Foto perfil Marcos Coelho"
      />

      <div className={styles.info}>
        <h1>Marcos Coelho</h1>
        <p>Desenvolvedor Front End</p>
      </div>

      <div className={styles.links}>
        <a href="https://github.com/MarcosCoelhoo">
          <Github className={styles.icon} />
          Github
        </a>

        <a href="#">
          <FileText className={styles.icon} /> Currículo
        </a>
      </div>
    </header>
  );
};

export default Hero;
