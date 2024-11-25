import React from 'react';
import { Link } from 'react-router-dom';

const ItemProducto = ({ producto }) => {
  return (
    <div className="item-producto">
      <img src={producto.image} alt={producto.title} width="150" />
      <h3>{producto.title}</h3>
      <p>${producto.price}</p>
      <Link to={`/producto/${producto.id}`}>Ver detalles</Link>
    </div>
  );
};

export default ItemProducto;
