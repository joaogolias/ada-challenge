import { fetchUpdateCard } from '@/api/fetch/fetchUpdateCard';
import { CardListOptions, CardModel } from '@/models/CardModel';
import { Dispatch, SetStateAction, useEffect } from 'react';

export const useUpdateCard = (
  previousCards: CardModel[],
  setCards: Dispatch<SetStateAction<CardModel[]>>,
  card?: CardModel
) => {
  useEffect(() => {
    if (card) {
      fetchUpdateCard({ ...card, lista: CardListOptions.TODO }).then(() => {
        if (card.id) {
          const foundCardIndex = previousCards.findIndex(
            (item) => item.id === card.id
          );
          if (foundCardIndex !== undefined && foundCardIndex !== -1) {
            previousCards[foundCardIndex] = card;
            setCards(previousCards);
          }
        }
      });
    }
  }, [card, setCards]);
};
