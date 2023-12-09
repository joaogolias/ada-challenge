import { RequestHandler } from 'express';
import { StatusCode } from '../statusCode';
import { ValidationError } from '../../core/errors/ValidationError';
import { InvalidAuthenticationError } from '../../core/errors/InvalidAuthenticationError';

export abstract class BaseController {
  public safelyHandle: RequestHandler = async (req, res, next) => {
    try {
      await this.handle(req, res, next);
    } catch (err: any) {
      const errorsMapper = [
        {
          error: ValidationError,
          code: StatusCode.BAD_REQUEST,
          defaultMessage: 'Bad Request',
        },
        {
          error: InvalidAuthenticationError,
          code: StatusCode.UNAUTHORIZED,
          defaultMessage: 'Unauthorized',
        },
      ];

      for (const { error, code, defaultMessage } of errorsMapper) {
        if (err instanceof error) {
          res.status(code).send(defaultMessage);
          return;
        }
      }

      res.status(StatusCode.INTERNAL_ERROR).send(err.message);
    }
  };

  protected abstract handle: RequestHandler;
}
