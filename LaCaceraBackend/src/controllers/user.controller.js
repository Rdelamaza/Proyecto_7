import { response } from '../utils/Templates/response.template.js';
import { getAllUsersService, loginUserService, permaDeleteUserByEmailService, registerUserService, updateUserByEmailService } from '../services/user.service.js';

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

// Update user

export const updateUserByEmail = async (req,res, next) => {
    try {
        const {email} = req.params;
        const userData = req.body;

        const [oldUser, updatedUser] = await updateUserByEmailService(email, userData);
        
        const custom = {
            oldData : oldUser,
        };

        response (res, updatedUser,200, 'Usuario actualizado correctamente', custom);
    } catch (error) {
        next(error);
    }
};

//Delete user

export const deleteUser =async (req, res, next) => {
    try {
        const {email} = req.params;
        const user = await permaDeleteUserByEmailService(email);
        response(res, user, 200, 'Usuario eliminado correctamente');

    } catch (error) {
        next (error);
        
    }
};

// Login user

export const login = async (req, res, next) => {
    try {
        const [user, token] = await loginUserService(req.body);
        const custom ={
            token
        };
        response(res, user, 200, 'Usuario logueado correctamente', custom)
    } catch (error) {
        next(error);
    }
};

