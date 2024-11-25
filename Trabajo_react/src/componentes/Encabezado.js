import React from 'react'; // Importa React
import "../estilos/Encabezado.css"
const Encabezado = () => {
  return (
    <header>
      <h1>Ropa Estrada</h1> {/* Título de la tienda */}
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li> {/* Enlace a la página principal */}
          <li><a href="/tienda">Tienda</a></li> {/* Enlace a la tienda */}
          <li><a href="/carrito">Carrito</a></li> {/* Enlace al carrito */}
        </ul>
      </nav>
    </header>
  );
};

export default Encabezado; // Exporta el componente Encabezado para ser usado en App.js
