import express from 'express';
import dotenv from'dotenv';

import {envs} from './config/envs.config.js';
import { dbConnect } from './config/db.config.js';
import apiRouter from './routers/index.router.js';
import { errorHandler } from './middlewares/errorhandler.js';
import cors from 'cors';


dotenv.config();

const app = express ();

dbConnect(); //updateDocs para actualizar los documentos de la base de datos

//Middleware de Cors
app.use(cors({origin: "https://proyecto-7-fmop.onrender.com"}));

//Middleware para parsear el body a JSON

app.use (express.json());
app.use (express.urlencoded({ extended: true }));

//Middleware para archivos estaticos
app.use ('/uploads', express.static('public/uploads'));


//Middleware de rutas
app.use('/api/v1', apiRouter);

// Ruta base para verificar que el backend funciona
app.get('/', (req, res) => {
    res.send('API funcionando correctamente 🚀');
});

//Middleware de errores
app.use(errorHandler);


app.listen(envs.port, () =>{
    console.log(`Server running on port ${envs.port}`);
});
