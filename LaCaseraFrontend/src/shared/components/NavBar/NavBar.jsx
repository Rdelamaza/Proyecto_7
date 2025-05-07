import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';



import "./navbar.css";
import { AuthContext } from "../../../modules/auth/context/AuthContext";


export const NavBar =() => {
    const {user, logout}= useContext(AuthContext);

    const handleLogout = ()=> {
        logout();
    };
    
    return (
        <>
        <Navbar expand="lg" className="custom-navbar">
            <Container fluid>
                <Navbar.Brand href="/">La Casera</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mx-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>

                    <NavDropdown title="Mesa y Cocina" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/menaje">Menaje</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Manteleria
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Quincho
                    </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Hogar" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Baño</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Dormitorio
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                        Terraza
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action6">
                        Entrada
                    </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Decoración" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Deco1</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Deco2
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action5">
                        Deco3
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/contact">Contacto</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>

            <Form className="d-flex">
            </Form>
            </Navbar.Collapse>
            <div>
                {
                    !user ? (
                        <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
                    ) : (
                        <div className="navbar-user-info">
                            <span>{user.first_name} {user.last_name} </span>
                            <Nav.Link href="/" onClick={handleLogout}> Logout </Nav.Link>
                        </div>
                        

                    )
                }
            </div>
            <Nav.Link href="#accionregister">Registrate</Nav.Link>
            
        </Container>
        </Navbar>



            </>    
    );
    }
    
        



export default NavBar;