import { Router} from 'express';
import {getAllProducts,
    getProductsById,
    createProduct, 
    deleteProduct,
    softDeleteProductById,
    updateProductById} from '../controllers/product.controller.js';

const router = Router();

//Products routes
router.get('/products', getAllProducts);
router.get('/products/:id', getProductsById);
router.post('/products', createProduct);
router.put('/products/update/:id', updateProductById);

router.delete('/products/:id',softDeleteProductById);

router.delete('/products/perma/:id', deleteProduct);








export  default router;
