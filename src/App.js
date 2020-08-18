import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar mis componentes

import NavBar from './components/NavBar';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <NavBar />

      <Slider />

      <header className="App-header">              

        <section className="componentes"> 

          <br/><br/><br/><br/><br/><br/>         

        </section>

      </header>

      <Footer />

    </div>
  );
}

export default App;
