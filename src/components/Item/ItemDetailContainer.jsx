import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import Loading from "../Loading";

//Firebase
import {getFirestone} from '../../utils/firebase';
import { useParams } from 'react-router-dom';

const ItemDetailContainer= (props)=> {

    const [item, setItem] = useState({});

    const {id} = useParams();

    // useEffect(()=> {  
    //     var evento = db.collection('items').doc(id);
    //     evento.get().then(function(doc){
    //         if(doc.exists){
    //             setItem(doc.data());
    //         }
    //     }); 
    // },[])

    useEffect(() => {        
        const db = getFirestone()
        const itemCollection = db.collection('items');
        const item = itemCollection.doc(id);
    
        item.get()
        .then((doc) => {
          if (!doc.exists) {
            console.log("Item does not exist!");
            return true;
          }
          const dataQuery = doc.data();
          console.log(dataQuery);
          setItem({ id: doc.id, ...doc.data() });
        })
        .catch((error) => {
          console.log('Error searching item: ', error);
        })
      }, [id]);

    if(JSON.stringify(item)==='{}'){
        return <div style={{margin: '4vh 7vw'}}>
            <Loading />
        </div>
    }else{
        return <div style={{margin: '4vh' }}>
            <ItemDetail
                min={0}
                max={10}
                initial={1}
                id={item.id} 
                title={item.title}
                description={item.description} 
                price={item.price} 
                image={item.image} />
        </div>
    }

}

export default ItemDetailContainer;