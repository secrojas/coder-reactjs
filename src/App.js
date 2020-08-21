import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importo mis componentes

import NavBar from './components/NavBar';
import Slider from './components/Slider';
import Footer from './components/Footer';

import Home from './components/Home';

function App() {
  return (
    <div className="App">

      <NavBar />

      <Slider />

      <Home 
          greeting='Pagina Principal'
      />

      <Footer />

    </div>
  );
}

export default App;
