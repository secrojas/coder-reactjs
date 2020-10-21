/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import ItemList from "../components/Item/ItemList";
import Sidebar from "../components/Sidebar";

function Home(props) { 

  const { products} = props;  
      
  return (
    <div className="center">
      <section id="content" style={{
        textAlign: 'center',
        marginTop: '30px',        
        fontFamily:'Barlow',
      }}>
        <h2 style={{marginBottom:'20px'}}>Nuestros eventos destacados</h2>
        <ItemList 
          products={products}
        />        
      </section>

      <aside id="sidebar">
        <Sidebar/>
      </aside>      

      <div className="clearfix"></div>

    </div>
  );
}

export default Home;