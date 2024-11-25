import React, { useState } from 'react';

const Carrito = () => {
  const [itemsCarrito, setItemsCarrito] = useState([]);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {itemsCarrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        itemsCarrito.map(item => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>Precio: ${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Carrito;
