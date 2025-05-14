import { sendContactEmailService } from '../services/contact.service.js';
import { response } from '../utils/Templates/response.template.js'; // Asumo que tienes una función de respuesta

export const sendContactForm = async (req, res, next) => {
    try {
        const { name, email, phone_number, message } = req.body;

        await sendContactEmailService(name, email, phone_number, message);

        response(res, null, 200, 'Mensaje enviado correctamente'); // No enviamos datos, solo un mensaje
    } catch (error) {
        console.error('Error en el controlador:', error);
        next(error);
    }
};

