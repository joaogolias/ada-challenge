import { Router } from 'express';
import createCardController from './CreateCardController';
import listCardsController from './ListCardsController';

export const cardsRouter = Router();

cardsRouter.post('/', createCardController.safelyHandle);
cardsRouter.get('/', listCardsController.safelyHandle);
