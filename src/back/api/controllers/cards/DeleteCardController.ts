import { RequestHandler } from 'express';
import { BaseController } from '../BaseController';
import { Inject, Service } from 'typedi';
import { getContainer } from '../../../container';
import { StatusCode } from '../../statusCode';
import { CardsService } from '../../../core/cards/CardsService';

@Service()
class DeleteCardController extends BaseController {
  @Inject()
  private cardsService!: CardsService;

  protected handle: RequestHandler = async (req, res) => {
    const { deletedCard, allCards } = await this.cardsService.deleteCard(
      req.params?.id
    );

    res.locals.modifiedCard = deletedCard;

    res.status(StatusCode.OK).send(allCards);
  };
}

export default getContainer().get(DeleteCardController);
