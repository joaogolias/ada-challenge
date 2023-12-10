import { fetchUpdateCard } from '@/api/fetch/fetchUpdateCard';
import { CardModel } from '@/models/CardModel';
import { Dispatch, SetStateAction, useEffect } from 'react';

export const useUpdateCard = (
  previousCards: CardModel[],
  setCards: Dispatch<SetStateAction<CardModel[]>>,
  card?: CardModel
) => {
  useEffect(() => {
    if (card) {
      fetchUpdateCard(card).then(() => {
        if (card.id) {
          const foundCardIndex = previousCards.findIndex(
            (item) => item.id === card.id
          );
          if (foundCardIndex !== undefined && foundCardIndex !== -1) {
            const previousCardsCopy = [...previousCards];
            previousCardsCopy[foundCardIndex] = card;
            setCards(previousCardsCopy);
          }
        }
      });
    }
  }, [card, setCards]);
};
