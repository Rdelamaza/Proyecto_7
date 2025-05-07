import React from "react";
import "./contact.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Contacto = () => {

    return(
        <>
        <div className="card_container">
            <CardGroup>
                <Card>
                    <Card.Body>
                    <Card.Title>Ubicación</Card.Title>
                        <div className="card" style={{ width: "100%", maxWidth: "600px" }}>
                            <div className="card-body p-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.666486228747!2d-71.43302072373373!3d-32.641703973720325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689bbccb1c5862d%3A0xc5a9c72fb9e51f03!2sAv.%20del%20Mar%201045%2C%202501119%20Maitencillo%2C%20Puchuncav%C3%AD%2C%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1745021315751!5m2!1ses-419!2scl"
                                width="100%"
                                height="300"  // Altura ajustada
                                style={{ border: "0", display: "block" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <div className="card-footer">
                            <p className="text-muted">Av. del Mar 1045, Maitencillo</p>
                        </div>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to
                        additional content.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body>
                    <Card.Title>Contacto</Card.Title>
                    <Card.Text>
                        <>
                        <p><strong>Teléfono:</strong> +56987654321</p>
                        <p><strong>Correo:</strong> lacasera@gmail.com</p>
                        </>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    
                    </Card.Footer>
                </Card>
                </CardGroup>
            </div>
        </>
    )
}

export default Contacto;