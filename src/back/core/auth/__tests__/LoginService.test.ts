import { InvalidAuthenticationError } from '../../errors/InvalidAuthenticationError';
import { LoginService } from '../LoginService';

const mockedSign = jest.fn();
jest.mock('jsonwebtoken', () => ({
  sign: (payload: any, secret: string, options: any) =>
    mockedSign(payload, secret, options),
}));

describe('Tests for LoginService class', () => {
  const loginService = new LoginService();
  process.env.ADMIN_USERNAME = 'ADMIN_USERNAME';
  process.env.ADMIN_PASSWORD = 'ADMIN_PASSWORD';
  process.env.JWT_AUDIENCE = 'JWT_AUDIENCE';
  process.env.JWT_TOKEN_EXPIRATION = '30s';
  process.env.JWT_SECRET = 'JWT_SECRET';

  it('should throw InvalidAuthenticationError if input is incomplete', () => {
    const loginWithError = () => {
      loginService.login({ senha: '2' });
    };

    expect(loginWithError).toThrow(InvalidAuthenticationError);
  });

  it('should throw InvalidAuthenticationError if input is login and senha are wrong', () => {
    const loginWithError = () => {
      loginService.login({ login: 'login', senha: 'senha' });
    };

    expect(loginWithError).toThrow(InvalidAuthenticationError);
  });

  it('should return token if input is login and senha are right', () => {
    const mockedToken = 'mockedToken';
    mockedSign.mockReturnValueOnce(mockedToken);

    const { idToken } = loginService.login({
      login: process.env.ADMIN_USERNAME,
      senha: process.env.ADMIN_PASSWORD,
    });

    expect(mockedSign).toHaveBeenCalledTimes(1);
    expect(mockedSign).toHaveBeenCalledWith(
      {
        username: process.env.ADMIN_USERNAME,
      },
      process.env.JWT_SECRET!,
      {
        audience: process.env.JWT_AUDIENCE,
        expiresIn: process.env.JWT_TOKEN_EXPIRATION,
      }
    );
    expect(idToken).toBe(mockedToken);
  });
});
