import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PlanetDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, description, image } = location.state || {}; // Datos recibidos desde el estado

  // Si no hay datos, mostramos un mensaje de error
  if (!id) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Planeta no encontrado</h1>
        <p>Por favor, regresa a la lista de planetas.</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      {/* Botón para regresar */}
      <button
        onClick={() => navigate(-1)} // Regresa a la pantalla anterior
        style={{
          position: '-moz-initial',
          top: '180px',
          left: '180px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.5rem',
        }}
      >
        ⬅
      </button>
      <h1>{name}</h1>
      <img src={image} alt={name} style={{ width: '300px', borderRadius: '8px' }} />
      <p style={{ marginTop: '1rem' }}>{description}</p>
    </div>
  );
};

export default PlanetDetail;
