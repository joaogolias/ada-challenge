import { Inject, Service } from 'typedi';
import { Card } from '../models/Card';
import { validateRequiredCardsProperties } from './validators/validateRequiredCardsProperties';
import { CardsDatasource } from '../../data/datasources/CardsDatasource';
import { NotFoundError } from '../errors/NotFoundError';

@Service()
export class CardsService {
  @Inject(CardsDatasource)
  private cardDatasource!: CardsDatasource;

  public async createCard(input: Card) {
    validateRequiredCardsProperties(input);

    const card = await this.cardDatasource.create(input);

    return card;
  }

  public async listCards() {
    return this.cardDatasource.list();
  }

  public async deleteCard(id: string) {
    const card = await this.cardDatasource.findById(id);

    if (!card) {
      throw new NotFoundError();
    }

    await this.cardDatasource.delete(card.id!);

    return this.listCards();
  }
}
