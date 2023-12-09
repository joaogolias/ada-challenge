import { RequestHandler } from 'express';
import { Service } from 'typedi';
import { getContainer } from '../../../container';
import { ValidateTokenService } from '../../../core/auth/validateToken';
import { StatusCode } from '../../statusCode';

@Service()
class ValidateTokenMiddleware {
  constructor(private validateTokenService: ValidateTokenService) {}

  public handle: RequestHandler = (req, res, next) => {
    try {
      const tokenFromHeaders = req.headers.authorization?.split('Bearer')[1];
      const validationInput = {
        path: req.path,
        idToken: tokenFromHeaders?.trim(),
      };

      if (this.validateTokenService.validate(validationInput)) {
        next();
      } else {
        res.sendStatus(StatusCode.UNAUTHORIZED);
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(StatusCode.UNAUTHORIZED);
    }
  };
}

export default getContainer().get(ValidateTokenMiddleware);
