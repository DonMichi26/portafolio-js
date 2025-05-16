import React from 'react';
import styles from '../styles/components/SliderbarLeft.module.css';
import gmailIcon from '../assets/gmail.svg';
import githubIcon from '../assets/github.svg';

// Componente funcional SidebarLeft
function SidebarLeft() {
  return (
    // Contenedor principal del sidebar izquierdo
    <div className={styles.sidebarLeft}>
      <ul className={styles.iconList}>
        <li>
          <a
            href="mailto:magrocolqui@gmail.com?subjet=Hola&body=escribeme cuando puedas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gmailIcon} alt="Gmail" className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/tu_usuario_github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className={styles.icon} />
          </a>
        </li>
      </ul>
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otros archivos
export default SidebarLeft;