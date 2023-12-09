import { RequestHandler } from 'express';
import { BaseController } from '../BaseController';
import { Service } from 'typedi';
import { getContainer } from '../../../container';
import { LoginService } from '../../../core/auth/loginService';
import { StatusCode } from '../../statusCode';

interface LoginInput {
  login: string;
  senha: string;
}

@Service()
class LoginController extends BaseController {
  constructor(private loginService: LoginService) {
    super();
  }

  protected handle: RequestHandler = (req, res) => {
    try {
      const requestBody: LoginInput = req.body;

      const loginResult = this.loginService.login({
        username: requestBody.login.toLocaleLowerCase(),
        password: requestBody.senha,
      });

      res.status(StatusCode.OK).send(loginResult);
    } catch (err) {
      console.log(err);
      res.sendStatus(StatusCode.UNAUTHORIZED);
    }
  };
}

export default getContainer().get(LoginController);
