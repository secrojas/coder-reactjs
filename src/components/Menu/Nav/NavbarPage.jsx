import React, { useState, useEffect } from 'react';
import { Image} from "react-bootstrap";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu } from "mdbreact";

import Login from "../../Login"
import Cart from "../../Cart/Cart";

//Firebase
import {getFirestone} from '../../../utils/firebase';
import { map } from "lodash";

const db=getFirestone();

export default function NavbarPage(props) {   

  const [state, setState] = useState(false); 

  const toggleCollapse = () => {
    setState({ isOpen: !state.isOpen });
  }

  const { products } = props;

  const [categories, setCategories] = useState([]);  
  
  useEffect(()=> {    
    db.collection("categories")
    .orderBy("name")
    .get()
    .then((response)=>{
      const arrayTask=[];
      map(response.docs, (item)=>{
        const data=item.data();
        data.id=item.id;
        arrayTask.push(data);
      });
      setCategories(arrayTask);
    });    
  },[])  

  return (
    
      <MDBNavbar color="default-color" dark expand="md" style={{backgroundColor:'#343a40'}}>
        <MDBNavbarBrand>
          <MDBNavLink to="/" >
            <Image src="../../../images/logo-365.png" style={{width:'50px'}}/>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-md-inline">Categorías</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">

                  {categories.map((category,index) => (     
                    <MDBNavLink to={{pathname: `/products/categories/${category.id}`}} style={{marginLeft:'10px',color:'black'}}>{category.name}</MDBNavLink>        
                  ))}

                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/products">Productos</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/cart">Carrito</MDBNavLink>
            </MDBNavItem>            
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
                <Cart                   
                  products={products}
                />
            </MDBNavItem>
            <MDBNavItem>                
              <Login/> 
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>             */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>    
    );
}
