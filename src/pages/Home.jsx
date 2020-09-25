import React from "react";
import ItemList from "../components/ItemList";

function Home(props) { 

  const { products} = props;  

  // const eliminarProducto = (sku) => {
  //   setProductsCart(productsCart.filter((item) => item.sku !== sku));
  // };
    
  return (
    <div className="center">
      <section id="content" style={{
        textAlign: 'center',
        marginTop: '2vh',
      }}>
        <h2>Productos destacados</h2>
        <ItemList 
          products={products}
        />        
      </section>

      <aside id="sidebar">

        {/* <Carrito carrito={productsCart} eliminarProducto={eliminarProducto} /> */}
        <h3 style={{
          textAlign: 'center',
          marginTop: '2vh',
        }}>
          Sidebar de novedades
        </h3>

        <p style={{textAlign:'center',fontFamily:'Barlow',marginTop:'20px'}}>Actualmente sin contenido.</p>

      </aside>      

      <div className="clearfix"></div>

    </div>
  );
}

export default Home;