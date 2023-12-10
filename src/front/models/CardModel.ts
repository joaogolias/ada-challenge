export enum CardListOptions {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}

export class CardModel {
  public id!: string;
  public titulo!: string;
  public conteudo!: string;
  public lista!: CardListOptions;
}
