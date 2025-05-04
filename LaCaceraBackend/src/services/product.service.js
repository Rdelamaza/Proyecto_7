import { Products } from '../model/Products.model.js';
import {ProductsError} from './../errors/TypeError.js';
import { notFoundData } from '../utils/validate.js';


//Get all products

export const getAllProductsService = async () =>{
    try {
        const products = await Products.find( {isActive:true} );

        notFoundData(products, 'Products not found', 'No products found in the database');

        return products;

    } catch (error) {
        throw new ProductsError('Error getting all products', error);
    }
};



// Get products by id
export const getProductByIdService = async (id) => {
    try {
        const product = await Products.findById({_id: id, isActive: true});

        notFoundData(product, 'Product not found', `Product with id: ${id} not found`);

        return product;

    } catch (error) {
        throw new ProductsError('Error getting product by id',error);
    };
};

//Create product

export const createProductService =async (dataProduct) => {
    try {
        const product = await Products.create(dataProduct);
        
        return product;
    } catch (error) {
        throw new ProductsError('Error creating product', error);
        
    }
};

//Update product

export const  updateProductByIdService = async (id,dataProduct) =>{
    try {
        const oldProduct = await Products.findOneAndUpdate({_id: id, isActive: true}, dataProduct);
        const updatedProduct =await Products.findById (id,{isActive: true});

        notFoundData(oldProduct, 'Product not found', `Product with id: ${id} not found`);

        return [oldProduct, updatedProduct];

    } catch (error) {
        throw new ProductsError(`Error updating product id :${id} `, 500,  error);
    }
};

//Delete product

export const deleteProductByIdService = async (id) => {
    try {
        const product = await Products.findByIdAndDelete(id);
        notFoundData(product, 'Product not found', `Product with id: ${id} not found`);

        return product;
    } catch (error) {
        throw new ProductsError(`Error deleting product id: ${id}`, 500, error);
        
    }
};

//Soft delete product
export const softDeleteProductByIdService =async (id) => {
    try {
        const product = await Products.findByIdAndUpdate(id, {isActive: false});
        notFoundData(product, 'Product not found', `Product with id: ${id} not found`);

        return product;
        
    } catch (error) {
        throw new ProductsError(`Error trying to delete the product with id: ${id}`,500, error);
        
    }
};