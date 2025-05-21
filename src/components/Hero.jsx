import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/Hero.module.css';
import profileImage from '../assets/profile.svg';

function Hero({ name = "Luis Magro", profession = "Estudiante de ingeniería de sistemas" }) {
  return (
    <section className={styles.heroContainer} aria-label="Presentación personal">
      <div className={styles.textSection}>
        <p className={styles.greeting}>Hola a todos, soy</p>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.profession}>{profession}</p>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.outerCircle}>
          <div className={styles.middleCircle}>
            <div className={styles.imageCircle}>
              <img
                src={profileImage}
                alt="Mi perfil"
                className={styles.profilePic}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
};

export default Hero;