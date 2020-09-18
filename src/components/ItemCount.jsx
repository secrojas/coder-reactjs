import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ItemCount({
  max,
  min,
  initial,
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

  return (
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
          <Button                
            className="btnComprar"
            type="button"    
          >
            Agregar: X
          </Button>
        </div>

        <div className="clearfix"></div>
        
    </div>
  );
}

export default ItemCount;
