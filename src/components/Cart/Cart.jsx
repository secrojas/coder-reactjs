import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/images/cart-empty.svg";
import { ReactComponent as CartFull } from "../../assets/images/cart-full.svg";
import { ReactComponent as Close } from "../../assets/images/close.svg";
import { ReactComponent as Garbage } from "../../assets/images/garbage.svg";
import { STORAGE_PRODUCTS_CART, BASE_PATH} from "../../utils/constants";
import {
    removeArrayDuplicates,
    countDuplicatesItemArray,
    removeItemArray
} from "../../utils/arrayFunc";

import "./Cart.scss";

export default function Cart(props) {

    const { productsCart, getProductsCart, products } = props;
    const [cartOpen, setCartOpen] = useState(false);
    const widthCartContent = cartOpen ? 400 : 0;
    const [singelProductsCart, setSingelProductsCart] = useState([]);    

    useEffect(() => {
        const allProductsId = removeArrayDuplicates(productsCart);
        setSingelProductsCart(allProductsId);
      }, [productsCart]);

    const openCart = () => {
        setCartOpen(true);
        document.body.style.overflow = "hidden";
    };
    
    const closeCart = () => {
        setCartOpen(false);
        document.body.style.overflow = "scroll";
    };

    const emptyCart = () => {
        localStorage.removeItem(STORAGE_PRODUCTS_CART);
        getProductsCart();
    };

    const increaseQuantity = sku => {
      const arrayItemsCart = productsCart;
      arrayItemsCart.push(sku);
      localStorage.setItem(STORAGE_PRODUCTS_CART, arrayItemsCart);
      getProductsCart();
    };
  
    const decreaseQuantity = sku => {
      const arrayItemsCart = productsCart;
      const result = removeItemArray(arrayItemsCart, sku.toString());
      localStorage.setItem(STORAGE_PRODUCTS_CART, result);
      getProductsCart();
    };

    return (
        <>
            <Button variant="link" className="cart">
                {productsCart.length > 0 ? (
                <CartFull onClick={openCart} />
                ) : (
                <CartEmpty onClick={openCart} />
                )}
            </Button>
            <div className="cart-content" style={{ width: widthCartContent }}>
                <CartContentHeader
                    closeCart={closeCart}
                    emptyCart={emptyCart}
                />
                <div className="cart-content__products">
                    {singelProductsCart.map((idProductCart, index) => (
                        <CartContentProducts
                          key={index}
                          products={products}
                          idsProductsCart={productsCart}
                          idProductCart={idProductCart}
                          increaseQuantity={increaseQuantity}
                          decreaseQuantity={decreaseQuantity}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

function CartContentHeader(props) {
    const { closeCart, emptyCart } = props;
  
    return (
      <div className="cart-content__header">
        <div>
          <Close onClick={closeCart} />
          <h2>Carrito</h2>
        </div>
  
        <Button variant="link" onClick={emptyCart}>
          Vaciar
          <Garbage />
        </Button>
      </div>
    );
}

function CartContentProducts(props) {
    const {
      products,
      idsProductsCart,
      idProductCart,
      increaseQuantity,
      decreaseQuantity
    } = props;
  
    if (!products.loading && products.result) {

      // console.log(products.result.products);
      
      return products.result.products.map((product, index) => {  
            
        if (idProductCart == product.sku) {
          
          const quantity = countDuplicatesItemArray(product.sku, idsProductsCart);
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

function RenderProduct(props) {
    const { product, quantity, increaseQuantity, decreaseQuantity} = props;
  
    return (
      <div className="cart-content__product">
        <img src={product.image} alt={product.name} />
        <div className="cart-content__product-info">
          <div>
            <h3>{product.name.substr(0, 25)}...</h3>
            <p>{product.salePrice.toFixed(2)}</p>
          </div>
          <div>
            <p>En carrito: {quantity}</p>
            <div>
              <button onClick={() => increaseQuantity(product.sku)}>+</button>
              <button onClick={() => decreaseQuantity(product.sku)}>-</button>
            </div>
          </div>
        </div>
      </div>
    );
}