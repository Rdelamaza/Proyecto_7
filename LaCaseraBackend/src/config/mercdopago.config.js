import {MercadoPagoConfig} from 'mercadopago';
import {envs} from './envs.config.js';

const {mercadoPagoToken} = envs;

const client = new MercadoPagoConfig({
    accesToken: mercadoPagoToken,
    options: { sandbox:true }
});

export default client;

