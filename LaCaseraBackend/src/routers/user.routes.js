import { Router } from 'express';
import { deleteUser, 
    getAllUsers, 
    registerUser, 
    updateUserByEmail, login } from '../controllers/user.controller.js';



const router = Router();


router.post('/register', registerUser);
router.get('/', getAllUsers);
router.put('/update/:email', updateUserByEmail);
router.post('/login', login);




//Admin routes
router.delete('/admin/delete/:email', deleteUser);

export default router;