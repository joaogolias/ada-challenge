import { ValidationError } from '../../errors/ValidationError';
import { Card } from '../../models/Card';

export const validateRequiredCardsProperties = (card: Card) => {
  const isValid =
    Boolean(card.titulo) && Boolean(card.conteudo) && Boolean(card.lista);

  if (!isValid) {
    throw new ValidationError();
  }
};
