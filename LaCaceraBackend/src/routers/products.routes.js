import { Router} from 'express';
import { getAllProducts } from '../controllers/product.controller.js';

const router = Router();

//Products routes
router.get('/products', getAllProducts);






export  default router;
