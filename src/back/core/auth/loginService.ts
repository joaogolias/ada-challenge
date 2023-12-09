import { Service } from 'typedi';
import { sign } from 'jsonwebtoken';

interface LoginServiceInput {
  username: string;
  password: string;
}

@Service()
export class LoginService {
  public login(input: LoginServiceInput) {
    const adminUser = {
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD,
    };

    if (
      adminUser.username !== input.username ||
      adminUser.password !== input.password
    ) {
      throw new Error('Unknown user');
    }

    const idToken = sign(
      {
        username: input.username,
        password: input.password,
      },
      process.env.JWT_SECRET!,
      {
        audience: process.env.JWT_AUDIENCE,
        expiresIn: process.env.JWT_TOKEN_EXPIRATION,
      }
    );

    return { idToken };
  }
}
