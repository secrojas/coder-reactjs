import React, {useState, useEffect, useContext} from "react";
import { Container, Row, Col,Table, Alert } from "react-bootstrap";
import { STORAGE_PRODUCTS_CART} from "../utils/constants";
import { BASE_PATH } from "../utils/constants";
import {
    removeArrayDuplicates,
    countDuplicatesItemArray,
    removeItemArray
} from "../utils/arrayFunc";

import "../components/Cart/Cart.scss";

import { CartContext } from '../context/cartContext';

import {Link} from 'react-router-dom';

export default function Cart(props) {

    const { products } = props;

    const {productsCart, getProductsCart}  = useContext(CartContext);

    const [singelProductsCart, setSingelProductsCart] = useState([]);    

    useEffect(() => {
        const allProductsId = removeArrayDuplicates(productsCart);
        setSingelProductsCart(allProductsId);
      }, [productsCart]);

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

    if(singelProductsCart.length===0)
    {
      return(
        <>
          <Container>
             <h1 style={{textAlign:'center',marginTop:'30px',fontFamily:'Barlow'}}>{props.greeting}</h1>
             <Row>
               <Col sm={2}></Col>
               <Col sm={8} style={{marginTop:'30px',marginBottom:'100px'}}>
               <Alert variant="warning">
                  <Alert.Heading style={{fontFamily:'Barlow',color:'black'}}>Actualmente no hay items agregados</Alert.Heading>
                  <p style={{fontFamily:'Barlow',color:'black'}}>
                    Podes volver al listado de productos para realizar alguna compra.
                  </p>
                  <hr />
                  <p className="mb-0" style={{width:'170px',backgroundColor:'#0098d3',padding:'10px',borderRadius:'12px',textAlign:'center',fontFamily:'Barlow'}}>
                    <Link to="/products" style={{textDecoration:'none',color:'white',fontWeight:'500'}}>
                      Volver a productos
                    </Link>
                  </p>
                </Alert>
               </Col>
              </Row>
            </Container>
        </>
      )
    }
    else
    {
      return(
        <>
           <Container>
             <h1 style={{textAlign:'center',marginTop:'30px'}}>{props.greeting}</h1>
             <Row>
               <Col sm={2}></Col>
               <Col sm={8}>
               <Table striped bordered hover style={{marginTop:'30px'}}>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Imagen</th>
                     <th>Nombre</th>
                     <th>Precio</th>
                    <th>Cantidad</th>
                   </tr>
                </thead>
                 <tbody>
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
                </tbody>
              </Table>
              </Col>
            </Row>          
          </Container>        
        </>
      )
    }  
}

function CartContentProducts(props) {
    const {
      products,
      idsProductsCart,
      idProductCart,
      increaseQuantity,
      decreaseQuantity
    } = props;
  
    if (products.length>0) {
      
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
      <>
      <tr>
        <td>
          <p style={{fontFamily:'Barlow',color:"black",fontWeight:'bold',textAlign:'center'}}>
            {product.id}
          </p>          
        </td>
        <td>
          <p style={{textAlign:'center'}}>
            <img src={`${BASE_PATH}/${product.image}`} alt={`ticket ${product.title}`} style={{width:'70px'}}/>
          </p>
        </td>
        <td>
          <p style={{fontFamily:'Barlow',color:"black",fontWeight:'bold',textAlign:'left'}}>
            {product.title.substr(0, 25)}...
          </p>
        </td>
        <td>
          <p style={{fontFamily:'Barlow',color:"black",fontWeight:'bold',textAlign:'center'}}>
            {product.price}
          </p>
        </td>
        <td>
          <p style={{fontFamily:'Barlow',color:"black",fontWeight:'bold',textAlign:'center'}}>
            {quantity}
          </p>
        </td>
      </tr>
      </>
      // <button onClick={() => increaseQuantity(product.sku)}>+</button>
      // <button onClick={() => decreaseQuantity(product.sku)}>-</button>
            
    );
}
