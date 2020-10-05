import React from "react";
import Sidebar from "../components/Sidebar";

function Checkout(props) { 
  return (
    <div className="center">
      <section id="content" style={{
        textAlign: 'center',
        marginTop: '30px',        
        fontFamily:'Barlow',
      }}>
        <h2 style={{marginBottom:'20px'}}>{props.greeting}</h2>
               
      </section>

      <aside id="sidebar">
      <Sidebar/>
      </aside>      

      <div className="clearfix"></div>

    </div>
  );
}

export default Checkout;