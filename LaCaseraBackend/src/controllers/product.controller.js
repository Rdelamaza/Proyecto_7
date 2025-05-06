import { response } from '../utils/Templates/response.template.js';
import { createProductService, deleteProductByIdService, getAllProductsService,
    getProductByIdService,
    softDeleteProductByIdService,
    updateProductByIdService } from '../services/product.service.js';

//Get all products
export const getAllProducts = async (req,res, next) => {
    try {
        const products = await getAllProductsService();

        response(res, products, 200, 'Products found'); 

    } catch (error) {
        next(error);
    };
        
};

//Get product by id
export const getProductsById = async (req, res ,next) =>{
    try {
        const { id }= req.params;
        const products = await getProductByIdService(id);

        response(res, products,200,`Product id: ${id} found`);

    } catch (error) {
        next(error);
    }
};

// Create product
export const createProduct = async (req,res,next) => {
    try {
        const dataProduct = req.body;
        const product = await createProductService(dataProduct);
        response(res, product, 201, 'Product created');

    } catch (error) {
        next (error);
        
    }
};


//Update product

export const updateProductById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const dataProduct = req.body;
        const [oldProduct,updatedProduct] = await updateProductByIdService(id, dataProduct);
        
        const custom ={
            oldData : oldProduct
        };
        response (res, updatedProduct, 201, `Product id: ${id} updated`, custom);
    } catch (error) {
        next(error);
        
    }
};


//Permanently delete product
export const deleteProduct = async (req, res, next) => {
    try {
        const {id} = req.params;
        const product =await deleteProductByIdService(id);
        response(res,product,200,`Product id: ${id} deleted`);
    } catch (error) {
        next(error);
    }
};

//Soft delete product
export const softDeleteProductById = async (req, res, next)=> {
    try {
        const {id} = req.params;
        const product =await softDeleteProductByIdService(id);
        response (res,product,200,`Product id: ${id} deleted`);
        
    } catch (error) {
        next (error);
    }
};