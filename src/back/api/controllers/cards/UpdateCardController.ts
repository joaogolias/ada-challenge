import { RequestHandler } from 'express';
import { BaseController } from '../BaseController';
import { Inject, Service } from 'typedi';
import { getContainer } from '../../../container';
import { StatusCode } from '../../statusCode';
import { Card } from '../../../core/models/Card';
import { plainToInstance } from 'class-transformer';
import { CardsService } from '../../../core/cards/CardsService';
import { ValidationError } from '../../../core/errors/ValidationError';

interface UpdateCardControllerInput {
  id?: string;
  titulo?: string;
  conteudo?: string;
  lista?: string;
}

@Service()
class UpdateCardController extends BaseController {
  @Inject()
  private cardsService!: CardsService;

  private toModel(input: UpdateCardControllerInput): Card {
    return plainToInstance(Card, input, { excludeExtraneousValues: true });
  }

  protected handle: RequestHandler = async (req, res) => {
    const requestBody: UpdateCardControllerInput = req.body;

    if (req.params?.id !== requestBody?.id) {
      throw new ValidationError();
    }

    const card = this.toModel(requestBody);

    const updatedCard = await this.cardsService.updateCard(card);

    res.locals.modifiedCard = updatedCard;

    res.status(StatusCode.CREATED).send(updatedCard);
  };
}

export default getContainer().get(UpdateCardController);
