import React  from "react";
import { BASE_PATH } from "../../utils/constants";

export default function RenderProduct(props) {
    const { product, quantity, increaseQuantity, decreaseQuantity} = props;
  
    return (
      <div className="cart-content__product">
        <img src={`${BASE_PATH}/${product.image}`} alt={`ticket ${product.title}`} />
        <div className="cart-content__product-info">
          <div>
            <h3>{product.title.substr(0, 15)}...</h3>
            <p>$ {product.price}</p>
          </div>
          <div>
            <p>En carrito: {quantity}</p>
            <div >
              <button style={{marginLeft:'-80px'}} onClick={() => increaseQuantity(product.id)}>+</button>
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
            </div>
          </div>
        </div>
      </div>
    );
}