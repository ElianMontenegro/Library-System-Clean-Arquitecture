import { IHttpRequest, IHttpResponse } from "src/presentation/protocols/http-interfaces";
// import { badRequest, forbidden, ok, serverError } from '@/../../src/presentation/helpers'
import { IAddAccount } from '../../../domain/use-cases/user/i-add-user'
import { IController } from "src/presentation/protocols/controller-interface";

export class SignUpController implements IController{
    constructor(
        private readonly addAccount : IAddAccount,
        private readonly authentication : Authentication
    ){}

    async handle(request: IHttpRequest): Promise<IHttpResponse>{
        try {
            const paramsRequired = ["username", "email", "password", "passwordConfirmation"]
            for (const params of paramsRequired) {
                if (!request.body[params]) {
                    return {
                        statusCode : 400,
                        body : `${params} is empty`
                    }
                }
            }
            const { username, email, password, passwordConfirmation } = request.body

            if(password !== passwordConfirmation){
                return {
                    statusCode : 400,
                    body : "password do not match"
                }
            }

            const isValid = await this.addAccount.add({
                username,
                email,
                password
            })
            
            if (!isValid) {
                return {
                    statusCode : 401,
                    body : "email not authorizate"
                }
            }

            const authenticationModel = await this.authentication.auth({
                email,
                password
            })
            return {
                statusCode : 200,
                body : authenticationModel
            }

        } catch (error: any) {
            return {
                statusCode: 500,
                body: error
            }
        }
    }
}