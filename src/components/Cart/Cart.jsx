import React, {useState, useEffect, useContext} from "react";
import { Button, Badge } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { ReactComponent as CartEmpty } from "../../assets/images/cart-empty.svg";
import { ReactComponent as CartFull } from "../../assets/images/cart-full.svg";
import { ReactComponent as Close } from "../../assets/images/close.svg";
import { ReactComponent as Garbage } from "../../assets/images/garbage.svg";
import { STORAGE_PRODUCTS_CART} from "../../utils/constants";
import {
    removeArrayDuplicates,
    countDuplicatesItemArray,
    removeItemArray
} from "../../utils/arrayFunc";

import "./Cart.scss";

import { CartContext } from '../../context/cartContext';
import { BASE_PATH } from "../../utils/constants";

export default function Cart(props) {

    const { products } = props;

    const {productsCart, getProductsCart}  = useContext(CartContext);

    const [cartOpen, setCartOpen] = useState(false);
    const widthCartContent = cartOpen ? 400 : 0;
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
            if (product.id == item.id) {
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
            <Button variant="link" className="cart">
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
  
    if (products.length>0 ) {

      // console.log(products.result.products);
      
      return products.map((product, index) => {  
            
        if (idProductCart == product.id) {
          
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

function RenderProduct(props) {
    const { product, quantity, increaseQuantity, decreaseQuantity} = props;
  
    return (
      <div className="cart-content__product">
        <img src={`${BASE_PATH}/${product.image}`} alt={`ticket ${product.title}`} />
        <div className="cart-content__product-info">
          <div>
            <h3>{product.title.substr(0, 25)}...</h3>
            <p>$ {product.price}</p>
          </div>
          <div>
            <p>En carrito: {quantity}</p>
            <div>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
            </div>
          </div>
        </div>
      </div>
    );
}

function CartContentFooter(props) {
  const { cartTotalPrice } = props;

  return (
    <div className="cart-content__footer">
      <div>
        <p>Total a abonar: </p>
        <p>$ {cartTotalPrice.toFixed(2)}</p>
      </div>
      <Link to="/checkout" style={{textDecoration:'none',color:'black'}}>
        <Button>Checkout</Button>
      </Link>
    </div>
  );
}