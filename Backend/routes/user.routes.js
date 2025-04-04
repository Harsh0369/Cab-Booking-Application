import express from 'express';
import { body } from 'express-validator';


const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('fullname.firstname').isLength({min:3}).isAlpha().withMessage('First name must contain only letters and be at least 3 characters long'),   
])


export default router;