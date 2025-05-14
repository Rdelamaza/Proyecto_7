import "./contact.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";
import {  EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';
import {ContactForm} from  '../../components/ContactForm'


export const Contacto = () => {

    return(
        <>
            <div className="card_container">
                <CardGroup>
                    <Card>
                        <Card.Body>
                        <Card.Title>¡Visitanos!</Card.Title>
                            <div className="card" style={{ width: "100%", maxWidth: "600px" }}>
                                <div className="card-body p-0">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.666486228747!2d-71.43302072373373!3d-32.641703973720325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689bbccb1c5862d%3A0xc5a9c72fb9e51f03!2sAv.%20del%20Mar%201045%2C%202501119%20Maitencillo%2C%20Puchuncav%C3%AD%2C%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1745021315751!5m2!1ses-419!2scl"
                                    width="100%"
                                    height="300"
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

                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">¡Estamos para responder todas tus dudas!</Card.Title>
                            
                            <ContactForm/>

                        </Card.Body>
                    </Card>

                    <Card className="shadow-sm border-0" style={{ fontSize: '1.1rem' }}> {/* Texto agrandado */}
                        <Card.Body>
                            <Card.Title as="h3" className="mb-4"> {/* Título más grande */}
                            Contacto
                            </Card.Title>
                            
                                <div className="d-flex flex-column gap-3"> {/* Espaciado entre elementos */}
                                    <div>
                                        <TelephoneFill className="text-primary" size={20} /> {/* Ícono teléfono */}
                                        <span>
                                        <strong>Teléfono:</strong> +56 9 8765 4321
                                        </span>
                                    </div>
                                
                                <div>
                                    <EnvelopeFill className="text-primary" size={20} /> {/* Ícono correo */}
                                    <span>
                                        <strong>Correo:</strong> lacasera@gmail.com
                                    </span>
                                </div>
                            <Card.Title as="h3" className="mb-4 mt-4"> {/* Título más grande */}
                            Horarios
                            </Card.Title>
                            <span>
                                <strong>Miércoles/Jueves</strong> 11:30 a 18:30 hrs
                            </span>
                            <span>
                                <strong>Viernes a Domingo</strong> 10:30 a 20:30 hrs
                            </span>

                            </div>
                        </Card.Body>

                    </Card>
                </CardGroup>
            </div>
        </>
    )
}

export default Contacto;