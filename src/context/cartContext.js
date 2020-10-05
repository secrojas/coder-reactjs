import React, { useState,useEffect } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { STORAGE_PRODUCTS_CART } from "../utils/constants";

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  
    const [productsCart, setProductsCart] = useState([]);

    useEffect(() => {
        getProductsCart();
    }, []);

    const getProductsCart = () => {
        const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);

        if (idsProducts) {
        const idsProductsSplit = idsProducts.split(",");
        setProductsCart(idsProductsSplit);
        } else {
        setProductsCart([]);
        }
    };

    const addProductCart = (id, name, qty) => {
        const idsProducts = productsCart;

        var i;
        for (i = 0; i < qty; i++) 
        {
            idsProducts.push(id);
        }
        // idsProducts.push(id);
        setProductsCart(idsProducts);
        localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
        getProductsCart();
        toast.success(`${name} agregado al carrito correctamente.`);    
    };  
  
    return (        
        <CartContext.Provider value={{productsCart, setProductsCart, getProductsCart, addProductCart}}>
            {props.children}
        </CartContext.Provider>
    )
}