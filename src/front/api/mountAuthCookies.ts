import { getCookie, setCookie } from 'cookies-next';
import { fetchLogin } from '../api/fetch/fetchLogin';

const AUTH_COOKIE_KEY = 'AUTH_TOKEN';

export const mountAuthCookies = async () => {
  const authCookie = getCookie(AUTH_COOKIE_KEY);

  if (authCookie) {
    return authCookie;
  }

  const { idToken } = await fetchLogin();
  setCookie(AUTH_COOKIE_KEY, idToken, {
    path: '/',
    domain: 'localhost',
    maxAge: 30 * 60,
  });
  return idToken;
};
