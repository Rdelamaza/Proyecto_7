import { useContext, useState } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import{ Link } from 'react-router-dom';
import "./navbar.css";
import { AuthContext } from "../../../modules/auth/context/authContext";
import useCartContext from "../../../modules/cart/context/CartContext";
import { BsBag, BsPersonPlus, BsPersonX } from "react-icons/bs";
import { IconContext } from 'react-icons';


export const NavBar =() => {
    const {user, logout}= useContext(AuthContext);
    const {totalItems} = useCartContext();
    const [expanded, setExpanded] = useState(false);


    const handleLogout = ()=> {
        setExpanded(false);
        logout();
    };

    const handleNavSelect = (eventKey) => {
        setExpanded(false);

    };

    return (
        <>
        <Navbar sticky="top" expand="lg" className="custom-navbar" expanded={expanded} onToggle={setExpanded} >
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                    src="/image.png"
                    alt="Logo La Casera"
                    width="50"  
                    height="50"
                    className="me-3"
                    style={{borderRadius:'50px'}}
                />
                <span className="d-none d-sm-inline">La Casera</span>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse >
                <Nav className="mx-auto my-1 my-lg-0"
                navbarScroll
                onSelect={handleNavSelect}>

                    <NavDropdown title="Menaje" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="/menaje"eventKey="/menaje">Juegos de vajilla</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#action4"eventKey="set-te">Set de té</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#action4"eventKey="set-cafe">Set de café</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#action4"eventKey="alcuzas">Alcuzas</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Textil" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="#action3" eventKey={"manteleria"}>
                            Mantelería
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#action4" eventKey={"cojines"}>
                            Cojines
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#action5" eventKey={"telas"}>
                            Telas
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#action6" eventKey={"ropa-cama"}>
                            Ropa de cama
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Decoración" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="#action3" eventKey={"mesa"}>
                            Mesa
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#action4" eventKey={""}>
                            
                        </NavDropdown.Item>

                        <NavDropdown.Item as={Link} to="#action5" eventKey={"bano"}>
                            Baño
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contact" eventKey={"/contact"}>Contacto</Nav.Link>
                    <Nav.Link as={Link} to="/about" eventKey={"/about"}>Nosotras</Nav.Link>

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
                                <Nav.Link as={Link} to="/login">
                                    <IconContext.Provider value={{ size: '1.5em' }}>
                                    <BsPersonPlus />
                                    </IconContext.Provider>
                                </Nav.Link>
                                ) : (
                                <div className="navbar-user-info" style={{ display: 'flex', alignItems: 'center' }}>
                                    <span>{user.first_name} {user.last_name} </span>
                                    <Nav.Link as={Link} to="/" onClick={handleLogout}>
                                        <IconContext.Provider value={{ size: '1.5em' }}>
                                        <BsPersonX />
                                        </IconContext.Provider>
                                    </Nav.Link>
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