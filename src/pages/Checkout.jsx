import React from "react";
import Sidebar from "../components/Sidebar";
import LoginCheckout from "../components/Checkout/LoginCheckout"

function Checkout(props) {
  
  const { products } = props;

  return (
    <div className="center">

      <aside id="sidebar">
        <Sidebar/>
      </aside>

      <section id="content" style={{
          textAlign: 'center',
          marginTop: '30px',        
          fontFamily:'Barlow',
        }}>
        <h2 style={{marginBottom:'20px'}}>{props.greeting}</h2>               
        <h4 style={{
          textAlign: 'center',
          marginTop: '10px',
          fontFamily:'Barlow',
          }}>
          Para finalizar la compra necesitamos tus datos
        </h4>

        <LoginCheckout
          products={products}
        />
      </section>            

      <div className="clearfix"></div>

    </div>
  );
}

export default Checkout;