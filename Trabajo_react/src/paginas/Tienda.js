import React, { useEffect, useState } from 'react'; // Importa React y hooks useEffect, useState
import axios from 'axios'; // Importa Axios para realizar peticiones HTTP
import "../estilos/Tienda.css"

const Tienda = () => {
  const [productos, setProductos] = useState([]); // Hook para almacenar los productos
  const [loading, setLoading] = useState(true); // Hook para saber si los productos están cargando

  useEffect(() => {
    const obtenerProductos = async () => { // Función para obtener los productos de la API
      try {
        const respuesta = await axios.get('https://fakestoreapi.com/products'); // Llama a la API de productos
        setProductos(respuesta.data); // Guarda los productos obtenidos en el estado
        setLoading(false); // Cambia el estado de loading a false una vez que los productos se hayan cargado
      } catch (error) {
        console.error('Error al cargar los productos:', error); // Muestra cualquier error si la petición falla
      }
    };

    obtenerProductos(); // Llama a la función para obtener los productos
  }, []); // El arreglo vacío indica que el efecto se ejecuta solo una vez al montar el componente

  if (loading) return <p>Cargando productos...</p>; // Muestra un mensaje mientras se cargan los productos

  return (
    <div>
      <h2>Lista de Productos</h2>
      <div className="productos">
        {productos.map(producto => (
          <div key={producto.id} className="producto">
            <h3>{producto.title}</h3> {/* Muestra el título del producto */}
            <p>{producto.description}</p> {/* Muestra la descripción del producto */}
            <p>Precio: ${producto.price}</p> {/* Muestra el precio del producto */}
            <a href={`/producto/${producto.id}`}>Ver más</a> {/* Enlace a la página de detalles del producto */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tienda; // Exporta el componente Tienda para ser usado en App.js
