import { Router} from 'express';
import {getAllProducts,
        getProductsById,
        createProduct, 
        deleteProduct,
        softDeleteProductById,
        updateProductById} from '../controllers/product.controller.js';
import {getAllDeletedProducts,
        getDeletedProductById,
        restoreProductById } from '../controllers/admin/products.admin.controller.js';

const router = Router();

//Products routes
router.get('/products', getAllProducts);
router.get('/products/:id', getProductsById);
router.post('/products', createProduct);
router.put('/products/update/:id', updateProductById);
router.delete('/products/:id',softDeleteProductById);


//Admin Routes
router.delete('/products/admin/perma/:id', deleteProduct);
router.get('/products/admin/deleted', getAllDeletedProducts);
router.get('/products/admin/deleted/:id', getDeletedProductById);
router.patch('/products/admin/restore/:id', restoreProductById);



export  default router;
