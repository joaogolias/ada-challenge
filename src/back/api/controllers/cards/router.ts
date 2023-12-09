import { Router } from 'express';
import listCardsController from './ListCardsController';
import createCardController from './CreateCardController';
import updateCardController from './UpdateCardController';
import deleteCardController from './DeleteCardController';

export const cardsRouter = Router();

cardsRouter.get('/', listCardsController.safelyHandle);
cardsRouter.post('/', createCardController.safelyHandle);
cardsRouter.put('/:id', updateCardController.safelyHandle);
cardsRouter.delete('/:id', deleteCardController.safelyHandle);
