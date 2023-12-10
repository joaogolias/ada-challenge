import { CardListOptions, CardModel } from '@/models/CardModel';
import { useMemo } from 'react';

export const useGroupCards = (cards: CardModel[]) => {
  const groupedCards = useMemo(() => {
    const initialValue: Record<CardListOptions, CardModel[]> = {
      [CardListOptions.TODO]: [],
      [CardListOptions.DOING]: [],
      [CardListOptions.DONE]: [],
    };
    return cards.reduce((acc, curr) => {
      if (acc[curr.lista]) {
        acc[curr.lista].push(curr);
      } else {
        acc[curr.lista] = [curr];
      }
      return acc;
    }, initialValue);
  }, [cards]);

  return { groupedCards };
};
