import dontev from 'dotenv';

dontev.config();

export const envs ={
    port: process.env.PORT,
    db:{
        uri: process.env.MONGO_URI,
    },
};