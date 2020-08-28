import React, { useState } from "react";

export function ItemCarrito({ producto, eliminarProducto }) {
  const { nombre, precio, id, contador } = producto;

  return (
    <div>
      <article className="article-item" id="article-template">
        <h2>{nombre}</h2>

        <div className="image-wrap">
          <img
            src="/images/producto1.jpg"
            alt="producto"
          />
        </div>

        <h2>$ {precio}</h2>

        <div>
          <span style={{ color: "red", fontSize: "20px" }}> {contador} </span>
          <div>
            <button href="/carrito" className="btnComprar" type="button" onClick={()=>eliminarProducto(id)}>
              Eliminar
            </button>
          </div>

          <div className="clearfix"></div>
        </div>
      </article>
    </div>
  );
}

export default ItemCarrito;
