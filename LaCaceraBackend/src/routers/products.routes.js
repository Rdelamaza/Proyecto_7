import { Router} from 'express';
import {getAllProducts,
        getProductsById,
        createProduct, 
        deleteProduct,
        updateProduct,
        softDeleteProductById} from '../controllers/product.controller.js';

const router = Router();

//Products routes
router.get('/products', getAllProducts);
router.get('/products/:id', getProductsById);
router.post('/products', createProduct);
router.put('/update/:id', updateProduct);

router.delete('/products/:id',softDeleteProductById);

router.delete('/products/perma/:id', deleteProduct);








export  default router;
