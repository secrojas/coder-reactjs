import React, {useState,useEffect} from 'react';
import './assets/css/App.css';
import useFetch from "./components/hooks/useFetch";
import { urlApiProducts } from "./utils/constants";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { STORAGE_PRODUCTS_CART } from "./utils/constants";

//Importo mis componentes
import Slider from './components/Slider';
import Footer from './components/Footer';
import Home from './components/Home';
import Productos from './components/Products';
import Categorias from './components/Categorias';
import Cart from './components/Cart';
import Menu from './components/Menu';

import ItemDetailContainer from './components/Item/ItemDetailContainer';


function App() {  

  const products = useFetch(urlApiProducts, null);
  // console.log(products.result);

  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    getProductsCart();
  }, []);

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);

    if (idsProducts) {
      const idsProductsSplit = idsProducts.split(",");
      setProductsCart(idsProductsSplit);
    } else {
      setProductsCart([]);
    }
  };

  const addProductCart = (sku, name) => {
    const idsProducts = productsCart;
    idsProducts.push(sku);
    setProductsCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
    getProductsCart();
    toast.success(`${name} agregado al carrito correctamente.`);    
  };

  return (
    <div className="App">
      <BrowserRouter>
        
        <Menu 
          productsCart={productsCart}
          getProductsCart={getProductsCart}
          products={products}
        />
        <Slider />

          <Switch>
            <Route exact path="/">
              <Home 
                  products={products}
                  productsCart={productsCart}
                  setProductsCart={setProductsCart}
                  addProductCart={addProductCart}
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
                  productsCart={productsCart}
                  setProductsCart={setProductsCart}
                  addProductCart={addProductCart}
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
              />
            </Route>
            
          </Switch>

        <Footer />

      </BrowserRouter>
      
    </div>
  );
}

export default App;
