import dontev from 'dotenv';

dontev.config();

export const envs ={
    port: process.env.PORT || 3020,
    frontendUrl:process.env.URL_FRONTEND,
    db:{
        uri: process.env.MONGO_URI,
    },
    authentication :{
        saltRounds: process.env.SALT_ROUNDS || 10,
        secretKey: process.env.SECRET_KEY,
        jwtExpire: process.env.JWT_EXPIRE,
    },
    mercadoPagoToken: process.env.MERCADOPAGO_ACCES_TOKEN,
    email: {
        service: process.env.EMAIL_SERVICE,
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
        destination:process.env.EMAIL_DESTINATION
    }
};