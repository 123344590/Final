import React from 'react'; // Importa React
import "../estilos/PiePagina.css"
const PiePagina = () => {
  return (
    <footer>
      <p>&copy; Ropa Estrada.</p> 
      <p>Contacto: info@ropaestrada.com</p> {/* Información de contacto */}
    </footer>
  );
};

export default PiePagina; // Exporta el componente PiePagina para ser usado en App.js
