import { Router } from 'express';
import createCardController from './CreateCardController';
import listCardsController from './ListCardsController';
import deleteCardController from './DeleteCardController';

export const cardsRouter = Router();

cardsRouter.get('/', listCardsController.safelyHandle);
cardsRouter.post('/', createCardController.safelyHandle);
cardsRouter.delete('/:id', deleteCardController.safelyHandle);
