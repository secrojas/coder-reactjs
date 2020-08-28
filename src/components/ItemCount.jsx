import React, { useState } from "react";

export function ItemCount({
  max,
  min,
  initial,
  producto,
  carrito,
  agregarProducto,
  productos,
}) {
  const [contador, setContador] = useState(initial);

  const { nombre, precio, id, imagen } = producto;

  const incrementar = () => {
    if (contador < max) {
      setContador((prevCounter) => {
        return prevCounter + 1;
      });
    } else {
      console.log("Máximo permitido!");
    }
  };

  const disminuir = () => {
    if (contador > min) {
      setContador((prevCounter) => {
        return prevCounter - 1;
      });
    } else {
      console.log("Mínimo permitido!");
    }
  };

  //agregar producto al carrito
  const seleccionarProducto = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    agregarProducto([...carrito,{...producto, contador}]);
  };

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

        {productos ? (
          <div>
            <button onClick={disminuir} className="btnMenos">
              {" "}
              -{" "}
            </button>
            <span style={{ color: "red", fontSize: "20px" }}> {contador} </span>
            <button onClick={incrementar} className="btnMas">
              {" "}
              +{" "}
            </button>

            <div>
              <button
                href="/carrito"
                className="btnComprar"
                type="button"
                onClick={() => seleccionarProducto(id)}
                
              >
                Agregar al carrito
              </button>
            </div>

            <div className="clearfix"></div>
          </div>
        ) : (
          <div>
            <button onClick={disminuir} className="btnMenos">
              {" "}
              -{" "}
            </button>
            <span style={{ color: "red", fontSize: "20px" }}> {contador} </span>
            <button onClick={incrementar} className="btnMas">
              {" "}
              +{" "}
            </button>

            <div>
              <button href="/carrito" className="btnComprar" type="button">
                Eliminar
              </button>
            </div>

            <div className="clearfix"></div>
          </div>
        )}
      </article>
    </div>
  );
}

export default ItemCount;
