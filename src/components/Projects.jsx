import styles from './Projects.module.css';
import { Code2, Link2 } from 'lucide-react';
import React from 'react';

const Projects = () => {
  return (
    <section className={`animeLeft ${styles.container}`}>
      <ul className={styles.projects}>
        <li className={styles.item}>
          <div className={styles.content}>
            <h2>Dream Streaming</h2>
            <p>
              Dream é um site de streaming que foi criado usando HTML, CSS e JS,
              junto da API do TMDB.
            </p>
          </div>

          <div className={styles.links}>
            <a href="#" data-text="Ver código" title="Ver código">
              <Code2 className={styles.icon} />
            </a>

            <a href="#" data-text="Ver website" title="Ver website">
              <Link2 className={styles.icon} />
            </a>
          </div>
        </li>

        <li className={styles.item}>
          <div className={styles.content}>
            <h2>Dream Streaming</h2>
            <p>
              Dream é um site de streaming que foi criado usando HTML, CSS e JS,
              junto da API do TMDB.
            </p>
          </div>

          <div className={styles.links}>
            <a href="#" data-text="Ver código" title="Ver código">
              <Code2 className={styles.icon} />
            </a>

            <a href="#" data-text="Ver website" title="Ver website">
              <Link2 className={styles.icon} />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
