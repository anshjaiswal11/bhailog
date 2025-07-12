import express from 'express';
import { loginSchema, signupSchema } from '../middlewares/authmiddlewares.js';
import {signup, login} from '../controllers/authcontroller.js';
import User from '../modules/user.js';
import { LogIn } from 'lucide-react';
const router = express.Router();

router.post('/signup', signupSchema, signup);
router.post('/login', loginSchema, login);










export default router;