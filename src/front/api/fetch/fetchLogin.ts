import { BASE_URL } from '../constants';

const LOGIN_DEFAULT_CREDENTIALS = {
  login: 'letscode',
  senha: 'lets@123',
};

export const fetchLogin = async () => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(LOGIN_DEFAULT_CREDENTIALS),
  });

  return response.json();
};
