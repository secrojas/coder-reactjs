import React, { useState } from "react";

import ItemCount from "../components/ItemCount";
import Carrito from "../components/Carrito";

function Link() {
  return (
    <a
      className="App-link"
      href="/catalogo"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecorationLine: "none",
        color: "black",
        fontFamily: "Barlow",
      }}
    >
      Ir al catálogo
    </a>
  );
}

function Home(props) {
  //crear listado de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Producto 1", precio: 50, imagen:"producto1.jpg" },
    { id: 2, nombre: "Producto 2", precio: 70, imagen:"producto2.jpg" },
    { id: 3, nombre: "Producto 3", precio: 180, imagen:"producto3.jpg"},
  ]);

  //State para el carrito de compras
  const [carrito, agregarProducto] = useState([]);

  const eliminarProducto = (id) => {
    agregarProducto(carrito.filter((item) => item.id !== id));
  };


    
  return (
    <div className="center">
      <section id="content">
        {/* uso del props */}
        <h1>
          {props.greeting}
          <br />
          <br />
          <Link />
        </h1>

        {productos.map((producto) => (
          <ItemCount
            min={1}
            max={10}
            initial={0}
            key={producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
          />
        ))}
      </section>
      <aside id="sidebar">
        <Carrito carrito={carrito} eliminarProducto={eliminarProducto} />
      </aside>

      <div className="clearfix"></div>
    </div>
  );
}

export default Home;
