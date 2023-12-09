import { Service } from "typedi"

interface LoginServiceInput {
    login: string
    senha: string
}

@Service()
export class LoginService {
    public login(input: LoginServiceInput) {
        return input.login + " " + input.senha
    }
}