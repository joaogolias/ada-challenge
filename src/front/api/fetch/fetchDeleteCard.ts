import { BASE_URL } from '../constants';
import { mountAuthCookies } from '../mountAuthCookies';
import { mountAuthHeaders } from '../mountAuthHeaders';

export const fetchDeleteCard = async (cardId: string) => {
  const idToken = await mountAuthCookies();

  const response = await fetch(`${BASE_URL}/cards/${cardId}`, {
    method: 'delete',
    headers: {
      ...mountAuthHeaders(idToken),
    },
  });
  return response.json();
};
