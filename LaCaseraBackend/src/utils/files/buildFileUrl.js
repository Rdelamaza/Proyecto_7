import { FileServiceError } from '../../errors/TypeError.js';


export const buildFileUrl = (req, filename, products) => {
    try {
        if(!filename) throw new FileServiceError('No se ha proporcionado un nombre al archivo',400);
        if(!products) throw new FileServiceError('No se ha proporcionado una carpeta',400);

        const domain = `${req.protocol}://${req.get('host')}`;

        return `${domain}/uploads/${products}/${filename}`;
    } catch (error) {
        throw new FileServiceError('Error al construir la URL del archivo', 500, error);
    }
};