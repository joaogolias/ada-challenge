import { fetchCards } from '@/api/fetch/fetchCards';
import { mountAuthCookies } from '@/api/mountAuthCookies';
import { CardModel } from '@/models/CardModel';
import { useEffect, useState } from 'react';

export const useCards = () => {
  const [cards, setCards] = useState<CardModel[]>([]);

  useEffect(() => {
    mountAuthCookies().then((idToken) => {
      fetchCards(idToken).then((cardsFromRequest) => {
        if (cardsFromRequest) {
          setCards(cardsFromRequest);
        }
      });
    });
  }, []);

  return { cards, setCards };
};
