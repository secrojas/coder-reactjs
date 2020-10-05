import React from "react";
import { Container, Navbar, Nav,NavDropdown} from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import {Link} from 'react-router-dom';
import Cart from "../Cart/Cart";
import Login from "../Login"
import "./Menu.scss";

export default function Menu(props) {
  
  const { products } = props;

  return (
  
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="top-menu">
        <Container>
            <BrandNav /> 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="prueba">
                <NavDropdown title="Categorías" id="collasible-nav-dropdown" className="prueba" style={{color:'white',marginTop:'-9px'}}>
                  <Link to="/products" className="prueba">
                    <span style={{color:'black'}}>Productos</span>
                  </Link>                 
                </NavDropdown>                
                <Link to="/products" className="prueba">
                  Productos
                </Link>
                <Link to="/cart" className="prueba">
                  Carrito
                </Link>
                <Link to="/contact" className="prueba">
                  Contacto
                </Link> 
              </Nav>
              
              <Nav>
                <Cart                   
                  products={products}
                />
                <Login/> 
              </Nav>
            </Navbar.Collapse>
        </Container>
  </Navbar>
  );
}

function BrandNav() {
  return (
    <Navbar.Brand>
        <Logo />
        <Nav.Link>
              <Link to="/" >
                <h2>Coder Tienda</h2>
              </Link>            
        </Nav.Link>
    </Navbar.Brand>
  );
}