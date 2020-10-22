import React, {useState, useEffect, useContext} from "react";
import "./Cart.scss";
import { Button, Badge } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/images/cart-empty.svg";
import { ReactComponent as CartFull } from "../../assets/images/cart-full.svg";

import { STORAGE_PRODUCTS_CART} from "../../utils/constants";
import { CartContext } from '../../context/cartContext';

import {
    removeArrayDuplicates,
    countDuplicatesItemArray,
    removeItemArray
} from "../../utils/arrayFunc";

import CartContentHeader from "./CartContentHeader";
import CartContentProducts from "./CartContentProducts";
import CartContentFooter from "./CartContentFooter";

export default function Cart(props) {

    const { products } = props;

    const {productsCart, getProductsCart}  = useContext(CartContext);

    const [cartOpen, setCartOpen] = useState(false);
    const widthCartContent = cartOpen ? 350 : 0;
    const [singelProductsCart, setSingelProductsCart] = useState([]); 
    const [cartTotalPrice, setCartTotalPrice] = useState(0);   

    useEffect(() => {
        const allProductsId = removeArrayDuplicates(productsCart);
        setSingelProductsCart(allProductsId);
      }, [productsCart]);

    useEffect(() => {
      const productData = [];
      let totalPrice = 0;
  
      const allProductsId = removeArrayDuplicates(productsCart);
      allProductsId.forEach(productId => {
        const quantity = countDuplicatesItemArray(productId, productsCart);
        const productValue = {
          id: productId,
          quantity: quantity
        };
        productData.push(productValue);
      });
  
      if (products.length>0) {
        products.forEach(product => {
          productData.forEach(item => {
            if (product.id === item.id) {
              const totalValue = product.price * item.quantity;
              totalPrice = totalPrice + totalValue;
            }
          });
        });
      }
  
      setCartTotalPrice(totalPrice);
    }, [productsCart, products]);

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

    const increaseQuantity = id => {
      const arrayItemsCart = productsCart;
      arrayItemsCart.push(id);
      localStorage.setItem(STORAGE_PRODUCTS_CART, arrayItemsCart);
      getProductsCart();
    };
  
    const decreaseQuantity = id => {
      const arrayItemsCart = productsCart;
      const result = removeItemArray(arrayItemsCart, id.toString());
      localStorage.setItem(STORAGE_PRODUCTS_CART, result);
      getProductsCart();
    };

    return (
        <>
            <Button variant="link" className="cart" style={{backgroundColor:'#343A40'}}>
                {productsCart.length > 0 ? (
                <div>
                  <CartFull onClick={openCart} />
                  <Badge onClick={openCart} variant="warning" style={{marginLeft:'5px',marginTop:'5px',fontSize:'13px'}}>{productsCart.length}</Badge>
                </div>
                
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
                <CartContentFooter cartTotalPrice={cartTotalPrice} />
            </div>
        </>
    );
}