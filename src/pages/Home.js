import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Bienvenidos a InfoPlanetas</h1>
      <p style={{ fontSize: '1.2rem', margin: '1rem 0' }}>
        InfoPlanetas es una aplicación diseñada para explorar y conocer más sobre los planetas de nuestro sistema solar. Aquí encontrarás información detallada sobre cada planeta, imágenes impresionantes y datos fascinantes. 
      </p>
      <h2>Contáctenos</h2>
      <p style={{ margin: '0.5rem 0' }}>
        📧 <strong>Correo:</strong> <a href="mailto:infoplanetas@gmail.com">infoplanetas@gmail.com</a>
      </p>
      <p style={{ margin: '0.5rem 0' }}>
        📞 <strong>Teléfono:</strong> <a href="tel:+573233653775">323 365 3775</a>
      </p>
      <p style={{ margin: '0.5rem 0' }}>
        📷 <strong>Instagram:</strong> <a href="https://instagram.com/infoplanetasbasico" target="_blank" rel="noopener noreferrer">@infoplanetasbasico</a>
      </p>
    </div>
  );
};

export default Home;
