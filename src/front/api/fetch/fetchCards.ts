import { BASE_URL } from '../constants';
import { mountAuthHeaders } from '../mountAuthHeaders';

export const fetchCards = async (idToken: string) => {
  const response = await fetch(`${BASE_URL}/cards`, {
    headers: {
      ...mountAuthHeaders(idToken),
    },
  });
  return response.json();
};
