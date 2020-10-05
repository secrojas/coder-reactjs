import React from "react";
import ItemList from "../components/ItemList";
import Sidebar from "../components/Sidebar";

function Home(props) { 

  //State para el carrito de compras
  // const [carrito, agregarProducto] = useState([]);
  // const [productsCart, setProductsCart] = useState([]);

  const { products} = props; 
    
  return (
    <div className="center">
      <section id="content" style={{
        textAlign: 'center',
        marginTop: '30px',        
        fontFamily:'Barlow',
      }}>
        <h2>{props.greeting}</h2>
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
