import { CardModel } from '@/models/CardModel';
import { BASE_URL } from '../constants';
import { mountAuthHeaders } from '../mountAuthHeaders';
import { mountAuthCookies } from '../mountAuthCookies';

export const fetchCreateCard = async (card: CardModel) => {
  const idToken = await mountAuthCookies();

  const response = await fetch(`${BASE_URL}/cards`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      ...mountAuthHeaders(idToken),
    },
    body: JSON.stringify(card),
  });
  return response.json();
};
