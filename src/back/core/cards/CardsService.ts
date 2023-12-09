import { Inject, Service } from 'typedi';
import { Card } from '../models/Card';
import { validateRequiredCardsProperties } from './validators/validateRequiredCardsProperties';
import { CardsDatasource } from '../../data/datasources/CardsDatasource';

@Service()
export class CardsService {
  @Inject(CardsDatasource)
  private cardDatasource!: CardsDatasource;

  public async createCard(input: Card) {
    validateRequiredCardsProperties(input);

    const card = await this.cardDatasource.create(input);

    return card;
  }
}
