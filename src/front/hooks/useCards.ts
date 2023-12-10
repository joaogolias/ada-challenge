import { fetchCards } from '@/api/fetch/fetchCards';
import { CardModel } from '@/models/CardModel';
import { useEffect, useState } from 'react';

export const useCards = () => {
  const [cards, setCards] = useState<CardModel[]>([]);

  useEffect(() => {
    fetchCards().then((cardsFromRequest) => {
      if (cardsFromRequest) {
        setCards(cardsFromRequest);
      }
    });
  }, []);

  return { cards, setCards };
};
