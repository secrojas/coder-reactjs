import React from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
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
            <Nav className="mr-auto">
                <Nav.Link  className="prueba">
                  <Link to="/categories" className="prueba">
                    Categorías
                  </Link>                  
                </Nav.Link>
                <Nav.Link  className="prueba">
                  <Link to="/products" className="prueba">
                    Productos
                  </Link>                  
                </Nav.Link>
                <Nav.Link  className="prueba">
                  <Link to="/cart" className="prueba">
                    Carrito
                  </Link>                  
                </Nav.Link>
                <Nav.Link  className="prueba">
                  <Link to="/contact" className="prueba">
                    Contacto
                  </Link>                  
                </Nav.Link>
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