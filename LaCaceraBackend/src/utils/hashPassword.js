import bcrypt from 'bcrypt';
import { envs } from '../config/envs.config';
import { UserError } from '../errors/TypeError';

const { saltRounds } = envs.autentication;

export const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new UserError(" Error al hashear la contraseña", 500, error);
    }
};

export const comparePassword = async (password, hashedPassword) => {
    try {
        return await bcrypt.compare (password, hashedPassword);
    } catch (error) {
        throw new UserError(' Error al comparar la contraseña', 500,error);
    }
}; 