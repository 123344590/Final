import React from 'react'; // Importa React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa las herramientas para el enrutamiento en React
import Encabezado from './componentes/Encabezado'; // Importa el componente Encabezado
import Inicio from './paginas/Inicio'; // Importa la página de Inicio
import Tienda from './paginas/Tienda'; // Importa la página Tienda
import Carrito from './paginas/Carrito'; // Importa la página Carrito
import DetalleProducto from './paginas/DetalleProducto'; // Importa la página DetalleProducto
import PiePagina from './componentes/PiePagina'; // Importa el componente PiePagina (si lo tienes)

const App = () => {
  return (
    <Router> {/* Envolvemos toda la aplicación con BrowserRouter para manejar las rutas */}
      <Encabezado /> {/* Componente de encabezado que se muestra en todas las páginas */}
      <Routes> {/* Definimos las rutas para que el usuario navegue entre páginas */}
        <Route path="/" element={<Inicio />} /> {/* Ruta para la página de inicio */}
        <Route path="/tienda" element={<Tienda />} /> {/* Ruta para la tienda */}
        <Route path="/carrito" element={<Carrito />} /> {/* Ruta para la página del carrito */}
        <Route path="/producto/:id" element={<DetalleProducto />} /> {/* Ruta para la página de detalles del producto, con parámetro id */}
      </Routes>
      <PiePagina /> {/* Pie de página que se muestra al final de todas las páginas */}
    </Router>
  );
};

export default App; // Exporta el componente App para ser usado en index.js
