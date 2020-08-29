import React, {useState } from "react";

import Item from "../components/Item";

function ItemList({carrito,agregarProducto}){

  const [productos] = useState([
    { id: 1, nombre: "Producto A", precio: 10, imagen:"producto1.jpg" },
    { id: 2, nombre: "Producto B", precio: 20, imagen:"producto2.jpg" },
    { id: 3, nombre: "Producto C", precio: 30, imagen:"producto3.jpg"},
  ]);

  

  return(
    
    <div>

      {productos.map((producto) => (      

        <Item
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />

      ))}

    </div>

  );
}

export default ItemList;
