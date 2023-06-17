import styles from './Skills.module.css';
import React from 'react';

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1 className="title">Habilidades</h1>

      <ul className={styles.list}>
        <li className={styles.item}>
          <p>Javascrip</p>
        </li>

        <li className={styles.item}>
          <p>HTML</p>
        </li>

        <li className={styles.item}>
          <p>CSS</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
