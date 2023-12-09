import { RequestHandler } from 'express';
import { Service } from 'typedi';
import { getContainer } from '../../../container';
import { ValidateTokenService } from '../../../core/auth/ValidateTokenService';
import { StatusCode } from '../../statusCode';
import { plainToInstance } from 'class-transformer';
import { Card } from '../../../core/models/Card';
import dayjs from 'dayjs';

const modifyTypeMapper = [
  { method: 'put', type: 'Alterado' },
  { method: 'delete', type: 'Removido' },
];
@Service()
class LogCardModificationMiddleware {
  constructor(private validateTokenService: ValidateTokenService) {}

  private toModel(input: any): Card {
    return plainToInstance(Card, input, { excludeExtraneousValues: true });
  }

  public handle: RequestHandler = (req, res, next) => {
    try {
      const modifyTypeMapping = modifyTypeMapper.find(
        ({ method }) => method === req.method?.toLowerCase()
      );

      if (!modifyTypeMapping || !res.locals.modifiedCard) {
        next();
        return;
      }

      const card: Card = this.toModel(res.locals.modifiedCard);

      const now = dayjs();

      console.log(
        `${now.format('DD/MM/YYYY HH:mm:ss')} - Card ${card.id} - ${
          card.titulo
        } - ${card.conteudo} - ${modifyTypeMapping.type}`
      );

      next();
    } catch (err) {
      res.sendStatus(StatusCode.BAD_REQUEST);
    }
  };
}

export default getContainer().get(LogCardModificationMiddleware);
