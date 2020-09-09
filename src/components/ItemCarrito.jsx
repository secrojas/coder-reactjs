import React, { useState } from "react";

export function ItemCarrito({ producto, eliminarProducto }) {
  
  const { name, salePrice, image, sku, contador} = producto;

  return (
    <div>
      <article className="article-item" id="article-template">
        <h2>{name}</h2>

        <div className="image-wrap">
          <img
            src="/images/producto1.jpg"
            alt="producto"
          />
        </div>

        <h2>$ {salePrice}</h2>

        <div>
          <span style={{ color: "red", fontSize: "20px" }}> {contador} </span>
          <div>
            <button href="/carrito" className="btnComprar" type="button" onClick={()=>eliminarProducto(sku)}>
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
