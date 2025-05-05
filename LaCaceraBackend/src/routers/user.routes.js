import { Router } from 'express';
import { getAllUsers, registerUser } from '../controllers/user.controller.js';



const router = Router();


router.post('/register', registerUser);
router.get('/', getAllUsers);

export default router;