import React, {useState } from "react";

import Item from "../components/Item";


function ItemList(props){ 

  const {
    productos: { result, loading, error }
  } = props;

  console.log(props);
 
  return(
    
    <div>
      { loading || !result      
      ? "Cargando.."
      : result.products.map((producto,index) => (     
          <Item
            key={producto.sku}
            producto={producto}
            productos={result.products}
            carrito={props.carrito}
            agregarProducto={props.agregarProducto}
          />          
        ))
      }
    </div>

  );
}

export default ItemList;
