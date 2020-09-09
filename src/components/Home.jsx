import React, { useState, useEffect } from "react";


import Carrito from "../components/Carrito";
import ItemList from "../components/ItemList";
import useFetch from "./hooks/useFetch";
import { urlApiProducts } from "../utils/constants";

function Home(props) { 
  
  const productos = useFetch(urlApiProducts, null);  

  //State para el carrito de compras
  const [carrito, agregarProducto] = useState([]);

  const eliminarProducto = (sku) => {
    agregarProducto(carrito.filter((item) => item.sku !== sku));
  };  

  // const result = useFetch(urlApiProducts, null);

  // console.log(result);
    
  return (
    <div className="center">
      <section id="content">
        
        <h1>{props.greeting}</h1>

        <ItemList 
          productos={productos}
          carrito={carrito} 
          agregarProducto={agregarProducto}
        />

      </section>

      <aside id="sidebar">

        <Carrito carrito={carrito} eliminarProducto={eliminarProducto} />

      </aside>

      <div className="clearfix"></div>

    </div>
  );
}

export default Home;
