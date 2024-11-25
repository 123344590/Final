import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BotonAñadirCarrito from '../componentes/BotonAñadirCarrito';
import "../estilos/BotonAñadirCarrito.css"

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        const respuesta = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProducto(respuesta.data);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      }
    };
    cargarProducto();
  }, [id]);

  const manejarAñadirAlCarrito = () => {
    // Lógica para añadir al carrito
    console.log(`${producto.title} añadido al carrito`);
  };

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} width="200" />
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <BotonAñadirCarrito onClick={manejarAñadirAlCarrito} />
    </div>
  );
};

export default DetalleProducto;
