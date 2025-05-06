import { Router } from 'express';
import userRouter from './user.routes.js';
import productRouter from './products.routes.js';

const router = Router();

router.use ('/products', productRouter);
router.use ('/users', userRouter);

export default router;