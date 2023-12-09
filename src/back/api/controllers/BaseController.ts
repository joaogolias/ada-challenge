import { RequestHandler } from 'express';
import { StatusCode } from '../statusCode';

export abstract class BaseController {
  public safelyHandle: RequestHandler = async (req, res, next) => {
    try {
      await this.handle(req, res, next);
    } catch (err: any) {
      res.status(StatusCode.INTERNAL_ERROR).send(err.message);
    }
  };

  protected abstract handle: RequestHandler;
}
