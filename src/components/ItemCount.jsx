import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Item/Item.scss";

export function ItemCount({
  max,
  min,
  initial,
  cuenta,
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
          <span style={{ color: "black", fontSize: "18px", fontWeight:'bold', fontFamily:'Barlow' }}> {contador} </span>
          <button onClick={incrementar} className="btnMas">
            {" "}
            +{" "}
          </button>

          <div>
            <Button variant="warning" style={{backgroundColor:'#EF811A',color:'white',fontFamily:'Barlow'}}> Agregar: {contador}</Button>
          </div>

          <div className="clearfix"></div>
          
      </div>
    );
}

export default ItemCount;
