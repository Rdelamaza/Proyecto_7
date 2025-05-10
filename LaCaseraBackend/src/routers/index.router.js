import { Router } from 'express';
import userRouter from './user.routes.js';
import productRouter from './products.routes.js';
import paymentRouter from './payments.routes.js'

const router = Router();

router.get('/', (req, res) => {
  res.send('¡Estas conectado al backend!'); // O cualquier otra respuesta
});

router.use ('/products', productRouter);
router.use ('/users', userRouter);
router.use ('/payments',paymentRouter);

export default router;