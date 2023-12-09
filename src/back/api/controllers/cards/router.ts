import { Router } from 'express';
import createCardController from './CreateCardController';

export const cardsRouter = Router();

cardsRouter.post('/', createCardController.safelyHandle);
