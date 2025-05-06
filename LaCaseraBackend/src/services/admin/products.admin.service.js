import { Products } from '../../model/Products.model.js';
import { ProductsError } from '../../errors/TypeError.js';
import { notFoundActiveData, notFoundData} from '../../utils/validate.js';

export const getAllDeletedProductsService = async () => {
    try {
        const products = await Products.find({isActive: false});

        notFoundActiveData(products, 'No se encontraron productos', 'No se encontraron productos en la base de datos');

        return products;
    } catch (error) {
        throw new ProductsError('Error al intentar obtener los productos', error);
    
        
    };
};


export const getDeletedProductByIdService = async (id) => {
    try {
        const product = await Products.findById(id,{isActive: false});

        notFoundActiveData(product, 'No se encontró el producto', `No se encontró el producto con el id: ${id}, en la base de datos`);

    
        return product;
    } catch (error) {
        throw new ProductsError('Error al intentar obtener un producto por ID', error);

    }
};

export const restoreProductByIdService = async (id) => {
    try {
        const product =await Products.findByIdAndUpdate(id, {isActive: true});

        notFoundData(product, 'No se encontró el producto', `No se encontró el producto con el id: ${id}, 
            en la base de datos`);
            
        return product;
    } catch (error) {
        throw new ProductsError(`Error al intentar restaurar un producto por ID: ${id}`, error);
        
    }
};