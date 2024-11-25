// Importamos los hooks de React, useState y useEffect, y el hook useParams de react-router-dom
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams para obtener los parámetros de la URL
import axios from 'axios';  // Importamos axios para realizar la petición HTTP

const DetalleProducto = () => {
  // Usamos el hook useParams para obtener el parámetro "id" de la URL (la id del producto)
  const { id } = useParams();  // "id" es el parámetro que recibimos de la ruta
  const [producto, setProducto] = useState(null);  // Creamos un estado local para almacenar el producto cargado

  // useEffect se ejecuta cuando el componente se monta y cada vez que el parámetro "id" cambia
  useEffect(() => {
    // Función asincrónica para cargar los detalles del producto desde la API
    const cargarProducto = async () => {
      try {
        // Realizamos una petición GET usando axios para obtener los datos del producto según su id
        const respuesta = await axios.get(`https://fakestoreapi.com/products/${id}`);
        
        // Si la respuesta es exitosa, guardamos los datos del producto en el estado
        setProducto(respuesta.data);
      } catch (error) {
        // Si hay un error en la solicitud, lo mostramos en la consola
        console.error("Error al cargar el producto:", error);
      }
    };

    // Llamamos a la función para cargar el producto
    cargarProducto();
  }, [id]);  // El efecto se vuelve a ejecutar cada vez que cambia el valor de "id"

  // Mientras esperamos la respuesta, mostramos un mensaje de "Cargando..."
  if (!producto) return <p>Cargando...</p>;

  // Cuando los datos se han cargado, renderizamos la información del producto
  return (
    <div>
      {/* Mostramos el título del producto */}
      <h2>{producto.title}</h2>
      
      {/* Mostramos la imagen del producto con el ancho de 200px */}
      <img src={producto.image} alt={producto.title} width="200" />
      
      {/* Mostramos la descripción del producto */}
      <p>{producto.description}</p>
      
      {/* Mostramos el precio del producto */}
      <p>Precio: ${producto.price}</p>
    </div>
  );
};

export default DetalleProducto;
