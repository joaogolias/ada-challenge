import { Token } from 'typedi';
import { Card } from '../../core/models/Card';

export const CardsDatasource = new Token('CardsDatasource');

export interface CardsDatasource {
  list(): Promise<Card[]>;
  findById(id: string): Promise<Card | undefined>;
  create(card: Card): Promise<Card>;
  update(card: Card): Promise<Card>;
  delete(id: string): Promise<void>;
}
