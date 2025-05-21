import React from "react";

const profileData = {
  nombre: "Luis Magro",
  profesion: "Estudiante de ingeniería de sistemas",
  universidad: "Universidad (puedes poner tu universidad aquí)",
  ubicacion: "Perú", // O tu ciudad/país
};

const biographyData = {
  descripcion: "Soy un estudiante apasionado por la tecnología, el desarrollo web y la programación. Me gusta aprender nuevas herramientas y enfrentar desafíos que me permitan crecer profesionalmente.",
};

const contactData = {
  email: "magrocolqui@gmail.com",
  github: "https://github.com/tu_usuario_github",
};

function Info({ className }) {
  return (
    <section className={`portfolio-info ${className || ''}`}>
      <div>
        <h2>Sobre mí</h2>
        <p><strong>Nombre:</strong> {profileData.nombre}</p>
        <p><strong>Profesión:</strong> {profileData.profesion}</p>
        <p><strong>Universidad:</strong> {profileData.universidad}</p>
        <p><strong>Ubicación:</strong> {profileData.ubicacion}</p>
      </div>
      <div>
        <h3>Biografía</h3>
        <p>{biographyData.descripcion}</p>
      </div>
      <div>
        <h3>Contacto</h3>
        <p>
          <strong>Email:</strong> <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
        </p>
        <p>
          <strong>GitHub:</strong> <a href={contactData.github} target="_blank" rel="noopener noreferrer">{contactData.github}</a>
        </p>
      </div>
    </section>
  );
}

export default Info;