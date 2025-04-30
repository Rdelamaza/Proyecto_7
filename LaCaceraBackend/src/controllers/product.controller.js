import { Products } from '../model/Product.model.js';
import { response } from '../utils/Templates/response.template.js';

//Get all products
export const getAllProducts = async (req,res) => {
    try {
        const products = await Products.find();

        response(res, products, 200, 'Products found'); 

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:'Error getting products',
            statusCode:500
        });
        
    };
};
