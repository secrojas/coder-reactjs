import React from 'react';

import ItemCount from './ItemCount';

const Carrito = ({carrito}) => (

    <div>
        <h2>Tu carrito de compras</h2>
        {carrito.length === 0
        ? <p>Carrito vacio!</p>  
        : carrito.map(producto =>(
            <ItemCount 
                key={producto.id}
                producto={producto}
            />        
        
        ))}
    </div>

);

export default Carrito;