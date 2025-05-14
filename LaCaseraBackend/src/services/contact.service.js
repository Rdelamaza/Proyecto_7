import nodemailer from 'nodemailer';
import { envs } from '../config/envs.config.js';

const {service,user,pass,destination} = envs.email;

// Configuración del transportador de Nodemailer
export const transporter = nodemailer.createTransport({
    service: service,
    auth: {
        user: user,
        pass: pass,
    },
});



export const sendContactEmailService = async (nombre, email, telefono, mensaje) => {
    try {
        const mailOptions = {
            from: user, // Tu dirección de correo remitente
            to: destination, // La dirección donde recibirás los mensajes
            subject: 'Nuevo mensaje de contacto desde la web',
            html: `
                <h3>Nuevo mensaje de contacto:</h3>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
                <p><strong>Mensaje:</strong> ${mensaje}</p>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado:', info.response);
        return info; // Opcional: puedes retornar información del envío
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        throw new Error('Error al enviar el mensaje de contacto');
    }
};