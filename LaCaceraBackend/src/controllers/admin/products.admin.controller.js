import { response } from '../../utils/templates/response.template.js';
import {getAllDeletedProductsService,
        getDeletedProductByIdService, 
        restoreProductByIdService
        } from '../../services/admin/products.admin.service.js';


export const getAllDeletedProducts = async (req, res, next) => {
    try {
        const products = await getAllDeletedProductsService();

        response(res, products, 200, 'Productos obtenidos correctamente');
        
    } catch (error) {
        next(error);
    };

};
// GET PRODUCTO BY ID, CONTROLADOR PARA OBTENER UN PRODUCTO POR ID
export const getDeletedProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product =  await getDeletedProductByIdService(id);
        
        response(res, product, 200, `Producto con el id: ${id} obtenido correctamente`);

        
    } catch (error) {
        next(error);
        
    };
};

export const restoreProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product =  await restoreProductByIdService(id);
        response(res, product, 200, `Producto con el id: ${id} restaurado correctamente`);

        
    } catch (error) {
        next(error);
        
    };
};