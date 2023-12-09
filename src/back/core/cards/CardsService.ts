import { Inject, Service } from 'typedi';
import { Card } from '../models/Card';
import { validateRequiredCardsProperties } from './validators/validateRequiredCardsProperties';
import { CardsDatasource } from '../../data/datasources/CardsDatasource';
import { NotFoundError } from '../errors/NotFoundError';

@Service()
export class CardsService {
  @Inject(CardsDatasource)
  private cardDatasource!: CardsDatasource;

  public async createCard(newCard: Card) {
    validateRequiredCardsProperties(newCard);

    const card = await this.cardDatasource.create(newCard);

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

    const allCards = await this.cardDatasource.list();

    return {
      deletedCard: card,
      allCards,
    };
  }

  public async updateCard(newCard: Card) {
    validateRequiredCardsProperties(newCard);

    const card = await this.cardDatasource.findById(newCard.id!);

    if (!card) {
      throw new NotFoundError();
    }

    return this.cardDatasource.update(newCard);
  }
}
