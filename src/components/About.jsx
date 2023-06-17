import Academy from './Academy';
import Skills from './Skills';
import React from 'react';

const About = () => {
  return (
    <section
      className={`animeLeft`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        paddingBottom: '2rem',
      }}
    >
      <Academy />
      <Skills />
    </section>
  );
};

export default About;
