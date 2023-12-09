import {
  Table,
  PrimaryKey,
  Default,
  Column,
  DataType,
  Model,
} from 'sequelize-typescript';

@Table
export class Card extends Model {
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
}
