import { UserError } from "../errors/TypeError"
import { Users } from "../model/User.model";
import { formatUserData } from "../utils/format.user.create";
import { notFoundData } from "../utils/validate";


// REGISTER USER
export const registerUserService = async ({
    first_name,
    last_name,
    email,
    password,
    phone_number,
    birth_date,
    isAdmin = false,

}) => {
    try {
        const hashedPassword = await hashedPassword(password);
        const userData = formatUserData(hashedPassword,
            first_name,
            last_name,
            email,
            phone_number,
            birth_date,
            isAdmin);

            console.log(userData);

            const user = await Users.create(userData);
            return user;
            
        
        } catch (error) {
        throw new UserError('Error al registrar el usuario', 401, error);
    }
};
//GET ALL USER SERVICE
export const getAllUsersService = async() => {
    try {
        const users =await Users.find ({isActive:true});
        console.log(users);
        notFoundData(users, 'No se encontraron usuarios activos en la base de datos');
        return users;
        
    } catch (error) {
        throw new UserError(' Error al obtener los usuarios',401, error);
    }
};
//LOGIN SERVICE
export const loginUserService = async ({email, password}) => {
    try {
        const user = await Users.findOne({email});
        notFoundData(user, 'No se encontró el usuario', 'No se encontró el usuario en la base de datos');

        const passwordMatch = await comparePassword(password, user.password);

        if(!user || !passwordMatch) {
            throw new UserError('Usuario o contraseña incorrectos', 401);
        };

        const token = jwt.sign({
            id: user._id,
            first_name: user.first_name,
            email: user.email,
            isAdmin: user
        },secretKey, {expiresIn: jwtExpire});

        return [user, token];

    } catch (error) {
        throw new UserError('Error al iniciar sesión', error);
        
    }
};

// UPDATE USER BY EMAIL SERVICE

export const updateUserByEmailService = async (email, dataUser) => {
    try {
        const oldUser =await Users.findOneAndUpdate({email, isActive: true}, dataUser);

        const updatedUser = await Users.findOneAndUpdate({email, isActive: true}, dataUser, {new: true});

        notFoundData(oldUser, 'No se encontró el usuario', 'No se encontró el usuario en la base de datos');

        return [oldUser, updatedUser];
    } catch (error) {
        throw new UserError('Error al actualizar el usuario', error);
        
    };

};
