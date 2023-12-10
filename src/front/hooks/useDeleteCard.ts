import { fetchDeleteCard } from '@/api/fetch/fetchDeleteCard';
import { CardModel } from '@/models/CardModel';
import { Dispatch, SetStateAction, useEffect } from 'react';

export const useDeleteCard = (
  previousCards: CardModel[],
  setCards: Dispatch<SetStateAction<CardModel[]>>,
  card?: CardModel,
  setCard?: Dispatch<SetStateAction<CardModel | undefined>>
) => {
  useEffect(() => {
    if (card) {
      fetchDeleteCard(card.id).then(() => {
        if (card.id) {
          const foundCardIndex = previousCards.findIndex(
            (item) => item.id === card.id
          );
          if (foundCardIndex !== undefined && foundCardIndex !== -1) {
            const previousCardsCopy = [...previousCards];
            previousCardsCopy.splice(foundCardIndex, 1);
            setCards(previousCardsCopy);
            setCard?.(undefined);
          }
        }
      });
    }
  }, [card, setCards]);
};
