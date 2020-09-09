import React from "react";

import { ItemCarrito } from "./ItemCarrito";

const Carrito = ({ carrito, eliminarProducto }) => (
  <div>
    <h2>Tu carrito de compras</h2>
    {carrito.length === 0 ? (
      <p>Carrito vacio!</p>
    ) : (
      carrito.map((producto) => (
        <ItemCarrito
          eliminarProducto={eliminarProducto}
          key={producto.sku}
          producto={producto}
        />
      ))
    )}
  </div>
);

export default Carrito;
