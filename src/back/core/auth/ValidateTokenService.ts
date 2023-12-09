import { Service } from 'typedi';
import { verify } from 'jsonwebtoken';
import { AuthData } from '../models/AuthData';

const PUBLIC_ROUTES = ['/login'];

@Service()
export class ValidateTokenService {
  public validate(input: AuthData) {
    if (!input.originPath || PUBLIC_ROUTES.includes(input.originPath)) {
      return true;
    }

    const result = verify(input.idToken ?? '', process.env.JWT_SECRET!);
    return !!result;
  }
}
