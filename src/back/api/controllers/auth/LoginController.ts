import { RequestHandler } from 'express';
import { BaseController } from '../BaseController';
import { Inject, Service } from 'typedi';
import { getContainer } from '../../../container';
import { LoginService } from '../../../core/auth/LoginService';
import { StatusCode } from '../../statusCode';
import { AuthData } from '../../../core/models/AuthData';
import { plainToInstance } from 'class-transformer';

interface LoginInput {
  login: string;
  senha: string;
}

@Service()
class LoginController extends BaseController {
  @Inject()
  private loginService!: LoginService;

  private toModel(input: LoginInput): AuthData {
    return plainToInstance(AuthData, input, { excludeExtraneousValues: true });
  }

  protected handle: RequestHandler = (req, res) => {
    try {
      const requestBody: LoginInput = req.body;

      const authData = this.toModel(requestBody);

      const loginResult = this.loginService.login(authData);

      res.status(StatusCode.OK).send(loginResult);
    } catch (err) {
      res.sendStatus(StatusCode.UNAUTHORIZED);
    }
  };
}

export default getContainer().get(LoginController);
