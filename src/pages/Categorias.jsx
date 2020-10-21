import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../components/Loading";
import { Container, Row } from "react-bootstrap";
import Item from '../components/Item/Item';
import { ToastContainer} from "react-toastify";

//Firebase
import {getFirestone} from '../utils/firebase';

function Categorias(props) { 
  
  const {id} = useParams();

  const [category, setCategory] = useState([]);

  const [items, setItems] = useState([]);
  
  useEffect(() => {        
    const db = getFirestone()
    const categoriesCollection = db.collection('categories');
    const category = categoriesCollection.doc(id);

    category.get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("Item does not exist!");
        return true;
      }
      const dataQuery = doc.data();
      console.log(dataQuery);
      setCategory({ id: doc.id, ...doc.data() });
    })
    .catch((error) => {
      console.log('Error searching item: ', error);
    })
  }, [id]);

  useEffect(() => {
    const db = getFirestone();
    const itemCollection = db.collection("items")
    const categoryItemCollection=itemCollection.where('category_id','==',id);
    
    categoryItemCollection.get()
    .then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('No data!');
      }
      setItems(querySnapshot.docs.map(doc => {
        return ({ id: doc.id, ...doc.data() });
      }));
    })
    .catch((error) => {
      console.log("There was an error trying to get the item of the category: ", error);
    })
  }, [items]); 

  return (
    <>
    <section style={{
        textAlign: 'center',
        marginTop: '30px',        
        fontFamily:'Barlow',
      }}>
      <h2 style={{marginBottom:'20px'}}>Eventos de la categoria: <span style={{color:'#F47E1F'}}>{category.name}</span></h2>               
    </section>

    <Container>
      <Row>
      { !items.length>0      
      ? (<Loading />)
      : items.map((producto,index) => (     
          <Item
            key={producto.id}
            producto={producto}
            products={items}
          />          
        ))
      }
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
     </Row>
    </Container>
    </>
  );
}

export default Categorias;
