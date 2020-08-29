import React from "react";

import ItemCount from "./ItemCount";

function Item({producto,productos,carrito,agregarProducto}){

  const { nombre, precio} = producto;

  return(
    
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

        <ItemCount
            min={1}
            max={10}
            initial={1}            
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
        />

      </article>
    </div>

  );
}

export default Item;
