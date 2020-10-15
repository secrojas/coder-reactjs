import React, {useState,useEffect} from 'react';
import './assets/css/App.css';
import 'react-toastify/dist/ReactToastify.css';
import useFetch from "./components/hooks/useFetch";
import { urlApiProducts } from "./utils/constants";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { ToastContainer} from "react-toastify";
import { CartProvider } from './context/cartContext';

//Paginas
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import Productos from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

//Importo mis componentes
import Slider from './components/Slider';
import Footer from './components/Footer';
import NavbarPage from './components/Menu/Nav/NavbarPage';
import ItemDetailContainer from './components/Item/ItemDetailContainer';

//Firebase
import {getFirestone} from './utils/firebase';
import { map } from "lodash";

const db=getFirestone();

function App() {    

  const [items, setItems] = useState([]);  
  
  useEffect(()=> {    
    db.collection("items")
    .orderBy("title")
    .get()
    .then((response)=>{
      const arrayTask=[];
      map(response.docs, (item)=>{
        const data=item.data();
        data.id=item.id;
        arrayTask.push(data);
      });
      setItems(arrayTask);
    });    
  },[])    

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          
          <NavbarPage products={items}/>
          
          <Slider />

          <Switch>
            <Route exact path="/">
                <Home 
                    products={items}
                />
                <ToastContainer
                  position="bottom-left"
                  autoClose={5000}
                  hideProgressBar
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnVisibilityChange={false}
                  draggable
                  pauseOnHover={false}
                />
              </Route>

              <Route path='/itemdetail/:id' component={ItemDetailContainer}/>
              
              <Route path="/products/categories/:id">
                <Categorias/>
              </Route>

              <Route path="/products">
                <Productos 
                    greeting='Todos nuestros eventos disponibles'
                    products={items}
                />
                <ToastContainer
                  position="bottom-left"
                  autoClose={5000}
                  hideProgressBar
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnVisibilityChange={false}
                  draggable
                  pauseOnHover={false}
                />
              </Route>
              
              <Route path="/cart">
                <Cart 
                    greeting='Carrito de compras'
                    products={items}
                />
              </Route>
              <Route path="/checkout">
                <Checkout 
                    greeting='Checkout de la venta'
                    products={items}
                />
              </Route>
          </Switch>
        </CartProvider>

        <Footer />

      </BrowserRouter>
      
    </div>
  );
}

export default App;
