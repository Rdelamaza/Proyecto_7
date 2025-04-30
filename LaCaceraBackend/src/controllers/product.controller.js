import { Products } from "../model/Product.model.js";

//Get all products
export const getAllProducts = async (req,res) => {
    try {
        const products = await Products.find();

        res.status(200).json({
            message: 'Products found succesfully',
            statusCode:200,
            data: products
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:'Error getting products',
            statusCode:500
        });
        
    };
};