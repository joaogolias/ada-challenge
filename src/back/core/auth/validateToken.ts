import { Service } from 'typedi';
import { verify } from 'jsonwebtoken';

interface ValidateTokenServiceInput {
  path: string;
  idToken?: string;
}

const PUBLIC_ROUTES = ['/login'];

@Service()
export class ValidateTokenService {
  public validate(input: ValidateTokenServiceInput) {
    if (PUBLIC_ROUTES.includes(input.path)) {
      return true;
    }

    console.log(input.idToken);
    const result = verify(input.idToken ?? '', process.env.JWT_SECRET!);
    return !!result;
  }
}
