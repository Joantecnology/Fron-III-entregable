import React from 'react'

const header = ({ quantity }) => {
  return (
    <header>
      <h1>Carrito de compras</h1>
      <p>
        Cantidad de productos <span>{quantity}</span>
      </p>
    </header>
  );
};

export default header;