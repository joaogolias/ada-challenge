import { BASE_URL } from '../constants';
import { mountAuthCookies } from '../mountAuthCookies';
import { mountAuthHeaders } from '../mountAuthHeaders';

export const fetchCards = async () => {
  const idToken = await mountAuthCookies();

  const response = await fetch(`${BASE_URL}/cards`, {
    headers: {
      ...mountAuthHeaders(idToken),
    },
  });
  return response.json();
};
