import React from 'react';
import { Facebook, Instagram } from 'react-bootstrap-icons';
import "./footer.css";
import { Container, Row, Col } from 'react-bootstrap'; // Importa los componentes de React Bootstrap

export const Footer = () => {
    return (
        <>
        <footer className="bg-grey py-4"> {/* Añadí py-4 para un poco de padding vertical */}
            <Container>
                <Row>
                    <Col md={4} className="mb-4">
                        <h5>La Casera</h5>
                        <p>Menaje y decoracion</p>
                    </Col>

                    <Col md={4} className="mb-4">
                        <h5>Enlaces rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-black">Inicio</a></li>
                            <li><a href="/about" className="text-black">Nuestro Equipo</a></li>
                            <li><a href="/contact" className="text-black">Contacto</a></li>
                        </ul>
                    </Col>

                    <Col md={4} className="mb-4">
                        <h5>Síguenos</h5>
                        <ul className="list-unstyled d-flex justify-content-center">
                            <li className="me-3">
                                <a href="https://www.facebook.com/p/%F0%9D%90%8B%F0%9D%90%9A-%F0%9D%90%82%F0%9D%90%9A%F0%9D%90%AC%F0%9D%90%9E%F0%9D%90%AB%F0%9D%90%9A-100086087177134/" className="text-black" target="_blank" rel="noopener noreferrer">
                                    <Facebook size={24} /> {/* Usando el componente Facebook */}
                                </a>
                            </li>
                            <li className="me-1">
                                <a href="https://www.instagram.com/__lacasera/?hl=es" className="text-black" target="_blank" rel="noopener noreferrer">
                                    <Instagram size={24} /> {/* Usando el componente Instagram */}
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>

            <hr className="bg-black" />

            <div className="text-center">
                <p>&copy; 2025 La Casera. Todos los derechos reservados.(Raimundo De La Maza)</p>
            </div>
            </Container>
        </footer>
        </>
    );
};

export default Footer;