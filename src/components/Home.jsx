import React, { useState } from "react";


import Carrito from "../components/Carrito";
import ItemList from "../components/ItemList";

function Home(props) {  

  //State para el carrito de compras
  const [carrito, agregarProducto] = useState([]);

  const eliminarProducto = (id) => {
    agregarProducto(carrito.filter((item) => item.id !== id));
  };

  const promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve(
        "PROMESA funcionando"
      )
    },2000);
  });

  promise.then(result => {
    console.log(result);
  });
    
  return (
    <div className="center">
      <section id="content">
        
        <h1>{props.greeting}</h1>

        <ItemList carrito={carrito} agregarProducto={agregarProducto}/>
        
      </section>

      <aside id="sidebar">

        <Carrito carrito={carrito} eliminarProducto={eliminarProducto} />

      </aside>

      <div className="clearfix"></div>

    </div>
  );
}

export default Home;
