import { Router } from 'express';
import loginController from './LoginController';

export const authRouter = Router();

authRouter.post('/login', loginController.handler);
