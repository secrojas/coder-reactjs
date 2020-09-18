import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import CartIcon from '../CartIcon';
import {Link} from 'react-router-dom';
import Cart from "../Cart/Cart";

import "./Menu.scss";

export default function Menu(props) {
  const { productsCart, getProductsCart, products } = props;

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
                
                <NavDropdown title="Mi cuenta" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/profile" className="prueba">
                      Perfil
                    </Link>                    
                  </NavDropdown.Item>                               
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/orders"  className="prueba">
                    Pedidos
                  </Link>                  
                  </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Cart 
                  productsCart={productsCart}
                  getProductsCart={getProductsCart}
                  products={products}
                />
                {/* <CartIcon /> */}
                
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

function MenuNav() {
  return (
    <Nav className="mr-auto">
      <Nav.Link href="#">Productos</Nav.Link>
      <Nav.Link href="#">Carrito</Nav.Link>
      <Nav.Link href="#">Contacto</Nav.Link>
    </Nav>
  );
}