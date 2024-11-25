import React from 'react'; // Importa la librería React
import ReactDOM from 'react-dom'; // Importa la librería para renderizar el componente en el DOM
import App from './App'; // Importa el componente principal App
import './index.css'; // Importa los estilos globales (opcional)

ReactDOM.render( // Método que se encarga de renderizar el componente en la página
  <App />, // Renderiza el componente App dentro del div con id "root"
  document.getElementById('root') // Selecciona el elemento con id "root" para renderizar el componente
);
