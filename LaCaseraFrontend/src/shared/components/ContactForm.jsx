import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { sendContactFormData } from "../../shared/services/fetchcontact";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        message: '',
    });
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSubmissionStatus('enviando');

        try {
            const responseData = await sendContactFormData(formData); 
            setSubmissionStatus('exito');
            console.log('Mensaje enviado:', responseData);
            setFormData({ name: '', email: '', phone_number: '', message: '' });
        } catch (error) {
            setSubmissionStatus('error');
            console.error('Error al enviar:', error);
        }
    };
    return (
    <> 
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                type="email"
                placeholder="ejemplo@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Teléfono (opcional)</Form.Label>
                <Form.Control
                type="tel"
                placeholder="+56 9 1234 5678"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>¿En qué te podemos ayudar?</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escribe tu mensaje aquí..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                />
            </Form.Group>

            <div className="btn-arena-container">
                <Button type="submit" className="btn-arena fw-bold" disabled={submissionStatus === 'enviando'}>
                {submissionStatus === 'enviando' ? 'Enviando...' : 'ENVIAR'}
        </Button>
            </div>
        </Form>
        {submissionStatus === 'exito' && (
                <div className="mt-2 alert alert-success">
                    ¡Tu mensaje ha sido enviado con exito! Nos pondremos en contacto contigo pronto.
                </div>
            )}

            {submissionStatus === 'error' && (
                <div className="mt-3 alert alert-danger">
                    Ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.
                </div>
            )}
    </>
        
    );
}

export default ContactForm