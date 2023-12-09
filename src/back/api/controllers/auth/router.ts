import { Router } from "express";
import loginController from './login'

export const authRouter = Router()

authRouter.post('/login', loginController.handler)