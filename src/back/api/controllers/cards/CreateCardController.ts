import { RequestHandler } from 'express';
import { BaseController } from '../BaseController';
import { Inject, Service } from 'typedi';
import { getContainer } from '../../../container';
import { StatusCode } from '../../statusCode';
import { Card } from '../../../core/models/Card';
import { plainToInstance } from 'class-transformer';
import { CardsService } from '../../../core/cards/CardsService';

interface CreateCardControllerInput {
  titulo?: string;
  conteudo?: string;
  lista?: string;
}

@Service()
class CreateCardController extends BaseController {
  @Inject()
  private cardsService!: CardsService;

  private toModel(input: CreateCardControllerInput): Card {
    return plainToInstance(Card, input);
  }
  protected handle: RequestHandler = async (req, res) => {
    const requestBody: CreateCardControllerInput = req.body;

    const card = this.toModel(requestBody);

    const createdCard = await this.cardsService.createCard(card);

    res.status(StatusCode.CREATED).send(createdCard);
  };
}

export default getContainer().get(CreateCardController);
