import styles from './Academy.module.css';
import React from 'react';

const Academy = () => {
  return (
    <div className={styles.academy}>
      <h1 className="title">Educação</h1>

      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.date}>12/2021</p>
          <div className={styles.content}>
            <h2>Conclusão do Ensino Médio</h2>
            <p>EEEM - Raimundo Ribeiro da Costa</p>
          </div>
        </li>

        <li className={styles.item}>
          <p className={styles.date}>12/2021</p>
          <div className={styles.content}>
            <h2>Conclusão do Ensino Médio</h2>
            <p>EEEM - Raimundo Ribeiro da Costa</p>
          </div>
        </li>

        <li className={styles.item}>
          <p className={styles.date}>12/2021</p>
          <div className={styles.content}>
            <h2>Conclusão do Ensino Médio</h2>
            <p>EEEM - Raimundo Ribeiro da Costa</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Academy;
