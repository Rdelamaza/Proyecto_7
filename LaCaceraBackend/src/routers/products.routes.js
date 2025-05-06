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
import { authenticationMiddleware} from '../middlewares/user.middleware.js';   
import { verfyAdmin } from '../middlewares/verifyAdmin.middleware.js';

const router = Router();

//Products routes
router.get('/', authenticationMiddleware, getAllProducts);
router.get('/:id', getProductsById);
router.post('/', createProduct);
router.put('/update/:id', updateProductById);
router.delete('/:id',softDeleteProductById);


//Admin Routes
router.delete('/admin/perma/:id',authenticationMiddleware, verfyAdmin, deleteProduct);
router.get('/admin/deleted', authenticationMiddleware, verfyAdmin, getAllDeletedProducts);
router.get('/admin/deleted/:id', authenticationMiddleware, verfyAdmin, getDeletedProductById);
router.patch('/admin/restore/:id', authenticationMiddleware, verfyAdmin, restoreProductById);



export  default router;
