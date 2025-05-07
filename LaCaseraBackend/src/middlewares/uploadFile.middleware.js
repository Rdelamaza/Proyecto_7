import multer from 'multer';
import { uploadFile } from '../services/files/multerConfig.js';
import { FileServiceError } from '../errors/TypeError.js';

export const uploadPhoto = (products, fieldname) => {
    try {
        const upload = multer ({storage: uploadFile(products)}).single(fieldname);
        return upload;
    } catch (error) {
        throw new FileServiceError('Error al subir la foto',500, error);
    }
};


export const uploadMultiPhotos = (products, fields, maxCount = 5) => {
    try {
        const upload = multer ({storage :uploadFile(products)}).array(fields,maxCount);
        return upload;
    } catch (error) {
        throw new FileServiceError('Error al subir las fotos', 500, error);
    }
};