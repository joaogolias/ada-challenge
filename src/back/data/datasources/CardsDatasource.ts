import { Token } from 'typedi';
import { Card } from '../../core/models/Card';

export const CardsDatasource = new Token('CardsDatasource');

export interface CardsDatasource {
  create(card: Card): Promise<Card>;
  list(): Promise<Card[]>;
}
