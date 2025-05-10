import { mercadopagoService } from '../services/Payments/mercadopago.service.js';
import { response } from '../utils/Templates/response.template.js';


export const createPayment = async(req, res, next) => {
    try {
        const { cart } = req.body;
        const preferenceResult = await mercadopagoService(cart);

        response(res, preferenceResult, 200, 'Preferencia de compra creada con éxito');
    } catch (error) {
        next(error);
    }
};