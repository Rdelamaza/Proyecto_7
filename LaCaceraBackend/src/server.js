import express from 'express';
import dotenv from'dotenv';

import {envs} from './config/envs.config.js';
import { dbConnect } from './config/db.config.js';
import productsRouter from './routers/products.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';


dotenv.config();

const app = express ();

dbConnect(); //updateDocs para actualizar los documentos de la base de datos

//Middleware de Cors

//Middleware para parsear el body a JSON

app.use (express.json());
app.use (express.urlencoded({ extended: true }));

//Middleware de rutas
app.use('/api/v1', productsRouter);

//Middleware de errores
app.use(errorHandler);


app.listen(envs.port, () =>{
    console.log(`Server running on port ${envs.port}`);
});
