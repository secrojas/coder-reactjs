import React, {Component} from 'react';
import Image from 'react-bootstrap/Image'

class Slider extends Component{

    render(){
        return(
            // <div id="slider" className="slider-big">
            //     <h1>Bienvenido a la tienda virtual</h1>                
            // </div>
            <Image src="http://localhost:3000/images/365.png" fluid />
        );
    }
}

export default Slider;