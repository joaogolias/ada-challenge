import {
  Table,
  PrimaryKey,
  Default,
  Column,
  DataType,
  Model,
} from 'sequelize-typescript';
import { Card } from '../../core/models/Card';
import { plainToInstance } from 'class-transformer';

@Table
export class CardEntity extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  public id!: string;

  @Column
  public titulo!: string;

  @Column
  public conteudo!: string;

  @Column
  public lista!: string;

  static toModel(entity: CardEntity): Card {
    return plainToInstance(Card, entity, { excludeExtraneousValues: true });
  }

  static fromModel(model: Card): CardEntity {
    return new CardEntity({
      id: model.id,
      titulo: model.titulo,
      conteudo: model.conteudo,
      lista: model.lista,
    });
  }
}
