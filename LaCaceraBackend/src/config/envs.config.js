import dontev from 'dotenv';

dontev.config();

export const envs ={
    port: process.env.PORT || 3020,
    db:{
        uri: process.env.MONGO_URI,
    },
};