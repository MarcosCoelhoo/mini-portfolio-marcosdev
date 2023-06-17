import styles from './Skills.module.css';
import React from 'react';

const Skills = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const json = await (await fetch('./about.json')).json();

      setData(json[0].skills);
    }

    fetchData();
  }, []);

  if (data === null) return null;
  return (
    <div className={styles.skills}>
      <h1 className="title">Habilidades</h1>

      <ul className={styles.list}>
        {data.map((skill, index) => (
          <li key={index} className={styles.item}>
            <p>{skill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
