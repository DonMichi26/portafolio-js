import React from 'react';
import styles from '../styles/components/Hero.module.css';
import profileImage from '../assets/profile.svg';

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textSection}>
        <p className={styles.greeting}>hola a todos, soy</p>
        <h1 className={styles.name}>Luis Magro</h1>
        <p className={styles.profession}>Estudiante de ingeniería de sistemas</p>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.outerCircle}>
          <div className={styles.middleCircle}>
            <div className={styles.imageCircle}>
              <img src={profileImage} alt="Mi perfil" className={styles.profilePic} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;