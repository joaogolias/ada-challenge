import { Service } from 'typedi';
import { sign } from 'jsonwebtoken';
import { InvalidAuthenticationError } from '../errors/InvalidAuthenticationError';
import { AuthData } from '../models/AuthData';
import { plainToInstance } from 'class-transformer';

@Service()
export class LoginService {
  public login(input: AuthData) {
    const adminUser = {
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD,
    };

    if (
      adminUser.username !== input.login ||
      adminUser.password !== input.senha
    ) {
      throw new InvalidAuthenticationError();
    }

    const idToken = sign(
      {
        username: input.login,
      },
      process.env.JWT_SECRET!,
      {
        audience: process.env.JWT_AUDIENCE,
        expiresIn: process.env.JWT_TOKEN_EXPIRATION,
      }
    );

    return plainToInstance(AuthData, { idToken });
  }
}
