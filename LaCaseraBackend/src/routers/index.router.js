import { Router } from 'express';
import userRouter from './user.routes.js';
import productRouter from './products.routes.js';
import paymentRouter from './payments.routes.js';
import contactRouter from './contact.routes.js';

const router = Router();

router.use ('/products', productRouter);
router.use ('/users', userRouter);
router.use ('/payments',paymentRouter);
router.use ('/contact', contactRouter);

export default router;