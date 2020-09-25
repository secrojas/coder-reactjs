import React from 'react';
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

//Importo mis componentes
import Slider from './components/Slider';
import Footer from './components/Footer';
import Menu from './components/Menu';
import ItemDetailContainer from './components/Item/ItemDetailContainer';

function App() {  

  const products = useFetch(urlApiProducts, null);

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Menu 
            products={products}
          />
          
          <Slider />

          <Switch>
            <Route exact path="/">
                <Home 
                    products={products}
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

              <Route path='/itemdetail/:sku' component={ItemDetailContainer}/>

              <Route path="/categories">
                <Categorias 
                    greeting='Categorías mas importantes'
                />
              </Route>

              <Route path="/products">
                <Productos 
                    greeting='Todos nuestros productos disponibles'
                    products={products}
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
                    products={products}
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
