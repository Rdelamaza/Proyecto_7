import jwt from 'jsonwebtoken';
import { envs } from '../config/envs.config.js';
import { UserError } from "../errors/TypeError.js"

const { secretKey }= envs.authentication;


export const authenticationMiddleware = (req,res, next) => {
    try {
        const {authorization} = req.headers;
        const token = authorization.startsWith('Bearer ') 
        ? authorization.slice(7) 
        :null;
        if(!token) throw new UserError('Token no proporcionado', 401);

        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;

        next();
    } catch (error) {
        throw new UserError('Token invalido o inesperado', 500, error);
    }
};