import React from "react";

function Cart(props) { 
    
  return (
    <div className="center">
      <section id="content">
        
        <h1>{props.greeting}</h1>

      </section>

      <div className="clearfix"></div>

    </div>
  );
}

export default Cart;
