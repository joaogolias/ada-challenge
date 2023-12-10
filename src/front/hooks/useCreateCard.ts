import { fetchCreateCard } from '@/api/fetch/fetchCreateCard';
import { CardListOptions, CardModel } from '@/models/CardModel';
import { Dispatch, SetStateAction, useEffect } from 'react';

export const useCreateCard = (
  previousCards: CardModel[],
  setCards: Dispatch<SetStateAction<CardModel[]>>,
  card?: CardModel
) => {
  useEffect(() => {
    if (card) {
      fetchCreateCard({ ...card, lista: CardListOptions.TODO }).then(
        (cardFromRequest) => {
          if (cardFromRequest) {
            setCards([...previousCards, cardFromRequest]);
          }
        }
      );
    }
  }, [card, setCards]);
};
