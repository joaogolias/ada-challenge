import { RequestHandler } from 'express';
import { StatusCode } from '../statusCode';
import { ValidationError } from '../../core/errors/ValidationError';

export abstract class BaseController {
  public safelyHandle: RequestHandler = async (req, res, next) => {
    try {
      await this.handle(req, res, next);
    } catch (err: any) {
      if (err instanceof ValidationError) {
        res.status(StatusCode.BAD_REQUEST).send('Bad Request');
        return;
      }
      res.status(StatusCode.INTERNAL_ERROR).send(err.message);
    }
  };

  protected abstract handle: RequestHandler;
}
