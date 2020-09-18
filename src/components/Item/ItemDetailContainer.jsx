import React, {useState, useEffect, useParams} from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailContainer= (props)=> {

    const [item, setItem] = useState(false);
    

    useEffect(() => {
        let sku = props.match.params.sku;
        
        console.log(sku);
        setTimeout(
            function(){
                fetch(                    
                    `https://api.bestbuy.com/v1/products/${sku}.json?show=sku,name,salePrice,image&apiKey=cMr020rNBextd4Z7Birt0wzY`
                )
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    setItem(data)
                })
            }, 3
        )
    }, [])

    

    if(item === false){
        return <div style={{margin: '4vh 7vw'}}>
            Obteniendo datos del producto desde la base de datos..
        </div>
    }else{
        return <div style={{margin: '4vh' }}>
            <ItemDetail
                min={1}
                max={10}
                initial={1} 
                name={item.name} 
                salePrice={item.salePrice} 
                image={item.image} />
        </div>
    }

}

export default ItemDetailContainer;