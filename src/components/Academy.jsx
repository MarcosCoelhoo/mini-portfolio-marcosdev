import styles from './Academy.module.css';
import React from 'react';

const Academy = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const json = await (await fetch('./about.json')).json();

      setData(json[0].academy);
    }

    fetchData();
  }, []);

  if (data === null) return null;
  return (
    <div className={styles.academy}>
      <h1 className="title">Educação</h1>

      <ul className={styles.list}>
        {data.map((item) => (
          <li key={item.id} className={styles.item}>
            <p className={styles.date}>{item.date}</p>
            <div className={styles.content}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Academy;
