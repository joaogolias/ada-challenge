import { RequestHandler } from "express";
import { BaseController } from "../BaseController";
import { Inject, Service } from 'typedi';
import { getContainer } from "../../../container";
import { LoginService } from "../../../core/auth/loginService";

@Service()
class LoginController extends BaseController {
    constructor(
        private loginService: LoginService
    ){ 
        super() 
    }

    public handler: RequestHandler = (req, res) => {
        console.log('validating lint')
        res.send(this.loginService.login(req.body))
    }
}

export default getContainer().get(LoginController)