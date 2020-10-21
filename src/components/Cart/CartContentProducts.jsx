import React  from "react";
import RenderProduct from "./RenderProduct";

import {
    countDuplicatesItemArray
} from "../../utils/arrayFunc";

export default function CartContentProducts(props) {
    const {
      products,
      idsProductsCart,
      idProductCart,
      increaseQuantity,
      decreaseQuantity
    } = props;
  
    if (products.length>0 ) {

      // console.log(products.result.products);
      
      return products.map((product, index) => {  
            
        if (idProductCart === product.id) {
          
          const quantity = countDuplicatesItemArray(product.id, idsProductsCart);
          return (
            <RenderProduct
              key={index}
              product={product}
              quantity={quantity} 
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}             
            />
          );
        }
      });
    }
    return null;
}