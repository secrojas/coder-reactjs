import React, {useState, useEffect, useContext} from "react";
import { Container, Row, Col,Table, Alert, Button } from "react-bootstrap";
import { BASE_PATH } from "../utils/constants";
import {
    removeArrayDuplicates,
    countDuplicatesItemArray
} from "../utils/arrayFunc";
import { STORAGE_PRODUCTS_CART} from "../utils/constants";

import { CartContext } from '../context/cartContext';

import { toast } from "react-toastify";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {Link} from 'react-router-dom';

import {getFirestone} from '../utils/firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const db=getFirestone();

export default function CheckoutStep(props) {

    const { products, email, nombre } = props;
    
    const userInfo = {
      name:nombre,
      email:email
    }    

    const {productsCart}  = useContext(CartContext);    

    const [singelProductsCart, setSingelProductsCart] = useState([]);

    const [setOrderId, setError ] = useState();

    var listadoItems = [];
    const [itemsCarrito, setItemsCarrito] = useState({});
    
    const emptyCart = () => {
      localStorage.removeItem(STORAGE_PRODUCTS_CART);      
    };

    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    
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

    const guardarPedido = ()=>{
      if(itemsCarrito.length>0)
      {
        const orders= db.collection("orders");
        const newOrder ={
          buyer:userInfo,
          items:itemsCarrito,
          total:cartTotalPrice,
          date:firebase.firestore.Timestamp.fromDate(new Date()),
        };
        orders.add(newOrder).then(({id})=>{
          setOrderId(id);
          toast.info(`Pedido generado exitosamente. Número de seguimiento: ${id}.`);
        }).catch(err =>{
          setError(err);
        });        
        emptyCart();
      }
    }
    

    useEffect(() => {
        const allProductsId = removeArrayDuplicates(productsCart);
        setSingelProductsCart(allProductsId);
      }, [productsCart]);  

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
           <Container style={{marginBottom:'30px'}}>
             <h1 style={{textAlign:'center',marginTop:'30px'}}>{props.greeting}</h1>
             <Row>
               <Col sm={2}></Col>
               <Col sm={8}>
               <p style={{textAlign:'center',marginTop:'30px'}}>Detalle del pedido:</p>
               <Table striped bordered hover style={{marginTop:'30px'}}>
                <thead>
                  <tr>
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
                      listadoItems={listadoItems}                     
                      setItemsCarrito={setItemsCarrito}
                    />
                  ))}
                </tbody>
              </Table>              
              </Col>
            </Row>  
                    
          </Container>  
          <div style={{alignContent:'center'}}>
              <p>Total del pedido: $ {cartTotalPrice.toFixed(2)}</p>
              <Button onClick={()=>guardarPedido()} variant="warning" size="sm">Confirmar Pedido</Button>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            />      
        </>
      )
    }  
}

function CartContentProducts(props) {
    const {
      products,
      idsProductsCart,
      idProductCart,
      listadoItems,
      setItemsCarrito   
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
              listadoItems={listadoItems}
              setItemsCarrito={setItemsCarrito}                         
            />
          );
        }
      });
    }
    return null;
}

function RenderProduct(props) {
    const { product, quantity, listadoItems,setItemsCarrito} = props; 
    
    useEffect(() => {
        getItemsCart();
    }, []);   

    const getItemsCart = () => {

        const item = {
          id:product.id,
          quantity:quantity,
          title:product.title,
          price:product.price
        }        
                
        listadoItems.push(item);
        setItemsCarrito(listadoItems);       
    }
  
    return (
      <>
      <tr> 
        <td>
          <p style={{fontFamily:'Barlow',color:"black",fontWeight:'bold',textAlign:'left'}}>
            {product.title.substr(0, 50)}...
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
            
    );
}
