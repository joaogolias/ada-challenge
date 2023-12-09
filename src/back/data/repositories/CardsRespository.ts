import { Service } from 'typedi';
import { Card } from '../../core/models/Card';
import { CardEntity } from '../entities/CardEntity';
import { CardsDatasource } from '../datasources/CardsDatasource';

@Service()
export class CardsRespository implements CardsDatasource {
  public async list(): Promise<Card[]> {
    const entities = await CardEntity.findAll();

    return entities.map(CardEntity.toModel);
  }

  public async findById(id: string): Promise<Card | undefined> {
    const entity = await CardEntity.findByPk(id);
    return entity ? CardEntity.toModel(entity) : undefined;
  }

  public async create(card: Card): Promise<Card> {
    const entity = CardEntity.fromModel(card);
    await entity.save();
    return CardEntity.toModel(entity);
  }

  public async delete(id: string): Promise<void> {
    const entity = await CardEntity.findByPk(id);
    await entity?.destroy();
  }

  public async update(card: Card): Promise<Card> {
    await CardEntity.update(card, {
      where: { id: card.id },
    });

    const updatedCard = await this.findById(card.id!)!;

    return updatedCard!;
  }
}
