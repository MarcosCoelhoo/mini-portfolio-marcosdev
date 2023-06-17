import styles from './Projects.module.css';
import { Code2, Link2 } from 'lucide-react';
import React from 'react';

const Projects = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const json = await (await fetch('./projects.json')).json();

      setData(json);
    }
    fetchData();
  }, []);

  if (data === null) return null;
  return (
    <section className={`animeLeft ${styles.container}`}>
      <ul className={styles.projects}>
        {data.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.content}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>

            <div className={styles.links}>
              <a href={item.repo} data-text="Ver código" title="Ver código">
                <Code2 className={styles.icon} />
              </a>

              {item.web && (
                <a href={item.web} data-text="Ver website" title="Ver website">
                  <Link2 className={styles.icon} />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
