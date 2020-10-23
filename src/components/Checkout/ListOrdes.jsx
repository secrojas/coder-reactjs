import React, {useState,useEffect} from "react";
import {getFirestone} from '../../utils/firebase';
import { Table, Badge } from "react-bootstrap";

export default function ListOrders(props) {

    const {email} = props;

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const db = getFirestone();
        const orderCollection = db.collection("orders")
        const ordersUserCollection=orderCollection.where('buyer.email','==',email);
        
        ordersUserCollection.get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log('No data!');
          }
          setOrders(querySnapshot.docs.map(doc => {
            return ({ id: doc.id, ...doc.data() });
          }));
        })
        .catch((error) => {
          console.log("There was an error trying to get the orders of the user: ", error);
        })
      }, []);

    return(
        <Table responsive striped bordered hover style={{marginTop:'30px'}}>
            <thead>
                <tr>
                    <th>Número de seguimiento</th>
                    <th>Estado</th>
                    <th>Monto</th>                
                </tr>
            </thead>
            <tbody>
                {orders.map((order, index) => (
                    <tr>
                        <td>
                            <p style={{fontFamily:'Barlow',color:"black",textAlign:'left'}}>
                                {order.id}
                            </p>          
                        </td>
                        <td>
                            <Badge variant="warning" style={{fontFamily:'Barlow',fontWeight:'bold',textAlign:'center'}}>
                                {order.estado}
                            </Badge>
                        </td>
                        <td>
                            <p style={{fontFamily:'Barlow',color:"black",textAlign:'center'}}>
                                $ {order.total}
                            </p>          
                        </td>
                    </tr>                    
                ))}
            </tbody>
        </Table> 
    )
}
