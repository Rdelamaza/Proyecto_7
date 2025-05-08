import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import{ Link } from 'react-router-dom';
import "./navbar.css";
import { AuthContext } from "../../../modules/auth/context/AuthContext";
import useCartContext from "../../../modules/cart/context/CartContext";
import { BsBag } from "react-icons/bs";


export const NavBar =() => {
    const {user, logout}= useContext(AuthContext);
    const {totalItems} = useCartContext();

    const handleLogout = ()=> {
        logout();
    };
    
    return (
        <>
        <Navbar expand="lg" className="custom-navbar">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">La Casera</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mx-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>

                    <NavDropdown title="Mesa y Cocina" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to="/menaje">Menaje</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="#action4">Manteleria</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="#action5">
                        Quincho
                    </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Hogar" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to="#action3">Baño</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="#action4">
                        Dormitorio
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="#action5">
                        Terraza
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="#action6">
                        Entrada
                    </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Decoración" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to="#action3">Deco1</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="#action4">
                        Deco2
                    </NavDropdown.Item>

                    <NavDropdown.Item as={Link} to="#action5">
                        Deco3
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>

                </Nav>

            <Form className="d-flex"></Form>
            </Navbar.Collapse>
            <div className="d-flex align-items-center"/>
            
            <Link to="/cart" className="cart-icon-container" aria-label="Bolsa de compras">
                <BsBag className="cart-icon" />
                    {totalItems > 0 && (
                <span className="cart-counter">
                    {totalItems}
                </span>
                )}
            </Link>



            <div>
                {
                    !user ? (
                        <Nav.Link as={Link} to="/login">Inicia Sesión o Registrate</Nav.Link>
                    ) : (
                        <div className="navbar-user-info">
                            <span>{user.first_name} {user.last_name} </span>
                            <Nav.Link as={Link} to= "/" onClick={handleLogout}> Logout </Nav.Link>
                        </div>
                        

                    )
                }
                
            </div>
        </Container>
        </Navbar>



            </>    
    );
    }
    
        

export default NavBar;