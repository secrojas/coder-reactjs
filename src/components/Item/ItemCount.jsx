import React, { useState,useContext } from "react";
import { Button } from "react-bootstrap";
import "./Item.scss";
import { ToastContainer} from "react-toastify";

import { CartContext } from '../../context/cartContext';

export function ItemCount({
  max,
  min,
  initial,
  id,
  title}) {
    const [contador, setContador] = useState(initial);
    
    const {addProductCart}  = useContext(CartContext);

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
            {contador
            ?
            <Button 
              variant="warning" 
              style={{backgroundColor:'#EF811A',color:'white',fontFamily:'Barlow'}}
              onClick={() => addProductCart(id, title, contador)}
            > 
              Agregar: {contador}
            </Button>
            :
              <p style={{marginTop:'10px',fontFamily:'Barlow'}}>Indicar una cantidad válida para agregar item</p>
            }
            
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange={false}
              draggable
              pauseOnHover={false}
            />
          </div>

          <div className="clearfix"></div>
          
      </div>
    );
}

export default ItemCount;
