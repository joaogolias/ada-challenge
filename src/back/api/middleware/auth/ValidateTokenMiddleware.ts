import { RequestHandler } from 'express';
import { Service } from 'typedi';
import { getContainer } from '../../../container';
import { ValidateTokenService } from '../../../core/auth/ValidateTokenService';
import { StatusCode } from '../../statusCode';
import { AuthData } from '../../../core/models/AuthData';
import { plainToInstance } from 'class-transformer';

interface ValidateTokenMiddlewareInput {
  idToken?: string;
}

@Service()
class ValidateTokenMiddleware {
  constructor(private validateTokenService: ValidateTokenService) {}

  private toModel(
    input: ValidateTokenMiddlewareInput,
    originPath?: string
  ): AuthData {
    return plainToInstance(
      AuthData,
      { ...input, originPath },
      { excludeExtraneousValues: true }
    );
  }

  public handle: RequestHandler = (req, res, next) => {
    try {
      const tokenFromHeaders = req.headers.authorization?.split('Bearer')[1];

      const validationInput = this.toModel(
        { idToken: tokenFromHeaders?.trim() },
        req.path
      );

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
