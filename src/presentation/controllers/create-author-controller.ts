import { CreateAuthor } from "src/data/use-cases/author/create-author";
import { IController } from "src/presentation/protocols/controller-interface";
import { IHttpRequest, IHttpResponse } from "src/presentation/protocols/http-interfaces";


export class CreateAuthorController implements IController{
    constructor(private createAuthor : CreateAuthor){}
    async handle (httpRequest: IHttpRequest): Promise<IHttpResponse>{
        try {
            const { name, lastName } = httpRequest.body
            if(!name || !lastName){
                return {
                    statusCode : 400,
                    body : "name or lastname is empty"
                }
            }
            const category = await this.createAuthor.execute(name, lastName)
            if(!category){
                return {
                    statusCode : 400,
                    body : "author already exist"
                }
            }
            return {
                statusCode : 200,
                body : "author created"
            }
        } catch (error) {
            return error
        }
    }

}