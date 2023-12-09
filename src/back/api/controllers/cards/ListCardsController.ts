import { RequestHandler } from 'express';
import { BaseController } from '../BaseController';
import { Inject, Service } from 'typedi';
import { getContainer } from '../../../container';
import { StatusCode } from '../../statusCode';
import { CardsService } from '../../../core/cards/CardsService';

@Service()
class ListCardsController extends BaseController {
  @Inject()
  private cardsService!: CardsService;

  protected handle: RequestHandler = async (req, res) => {
    const cards = await this.cardsService.listCards();

    res.status(StatusCode.OK).send(cards);
  };
}

export default getContainer().get(ListCardsController);
