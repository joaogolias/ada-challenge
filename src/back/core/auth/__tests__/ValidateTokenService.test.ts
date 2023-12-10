import { ValidateTokenService } from '../ValidateTokenService';

const mockedVerify = jest.fn();
jest.mock('jsonwebtoken', () => ({
  verify: (token: string, secret: string) => mockedVerify(token, secret),
}));

describe('Tests for ValidationTokenService class', () => {
  const validateTokenService = new ValidateTokenService();
  const idToken = 'idToken';
  const originPath = '/login';

  process.env.JWT_SECRET = 'JWT_SECRET';

  it('should return true if originPath is not defined', () => {
    const isValid = validateTokenService.validate({ idToken });

    expect(isValid).toBe(true);
  });

  it('should return true if originPath is public', () => {
    const isValid = validateTokenService.validate({ idToken, originPath });

    expect(isValid).toBe(true);
  });

  it('should return true if verify returns defined value', () => {
    mockedVerify.mockReturnValueOnce(idToken);

    const isValid = validateTokenService.validate({ idToken, originPath });

    expect(isValid).toBe(true);
  });

  it('should return false if verify does not return defined value', () => {
    const isValid = validateTokenService.validate({ idToken, originPath });

    expect(isValid).toBe(true);
  });
});
