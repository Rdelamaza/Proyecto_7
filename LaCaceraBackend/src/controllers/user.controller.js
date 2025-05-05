import { response } from '../utils/Templates/response.template.js';
import { getAllUsersService, registerUserService } from '../services/user.service.js';

//Regiter user 
export const registerUser = async (req, res, next) => {
    try {
        const userData = req.body;
        const user = await registerUserService(userData);

        response(res,user, 201, 'Usuario creado correctamente');

    } catch (error) {
        next(error);
    }
};

//Get all users

export const getAllUsers = async (req,res, next)=> {
    try {
        const users = await getAllUsersService();

        response(res,users,200, 'Usuarios obtenidos correctamente');
    } catch (error) {
        next(error);
        
    }
};

