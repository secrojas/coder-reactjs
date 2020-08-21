import React from 'react';

function Link(){
    return(
        <a
          className="App-link"
          href="/catalogo"
          target="_blank"
          rel="noopener noreferrer"
          style={{textDecorationLine:"none",color:"black",fontFamily:"Barlow"}}
        >
          Ir al catálogo
        </a>
    );
}

function Home(props){

    return(
        <div>
            <br/>

            {/* uso del props */}
            <h1>{props.greeting}
            <br/><br/>
            <Link/>            
            </h1>

            <br/>
        </div>
        
    )
}

export default Home;