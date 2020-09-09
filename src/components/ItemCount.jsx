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
  const seleccionarProducto = (sku) => {
    const producto = productos.find((producto) => producto.sku === sku);
    agregarProducto([...carrito,{...producto, contador}]);
    setContador(initial);

  };

  return (
    <div> 
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
                onClick={() => seleccionarProducto(producto.sku)}                
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
    </div>
  );
}

export default ItemCount;
