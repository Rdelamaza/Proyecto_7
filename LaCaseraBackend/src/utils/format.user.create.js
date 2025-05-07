import { ValidationError } from '../errors/TypeError.js';


export const formatUserData = (hashedPassword, ...rest) => {
    
    const [first_name, last_name, email, phone_number, birth_date, isAdmin = false] = rest;//agregar imagen
    if (!first_name || !last_name || !email || !phone_number || !birth_date || !hashedPassword) 
    {
        throw new ValidationError('Faltan datos obligatorios para crear el usuario');
    }


    return {
        first_name,
        last_name,
        email,
        password: hashedPassword,
        phone_number,
        birth_date,
        isAdmin
    };
};