import { Expose } from 'class-transformer';

export class Card {
  @Expose()
  public id?: string;

  @Expose()
  public titulo?: string;

  @Expose()
  public conteudo?: string;

  @Expose()
  public lista?: string;
}
