import dontev from 'dotenv';

dontev.config();

export const envs ={
    port: process.env.PORT || 3020,
    db:{
        uri: process.env.MONGO_URI,
    },
    autentication :{
        saltRounds: process.env.SALT_ROUNDS || 10,
        secretKey: process.env.SECRET_KEY,
        jwtExpire: process.env.JWT_EXPIRE,
    },
};