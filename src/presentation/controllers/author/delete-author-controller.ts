
import { DeleteAuthor } from "src/data/use-cases/author/delete-author";
import { IController } from "src/presentation/protocols/controller-interface";
import { IHttpRequest, IHttpResponse } from "src/presentation/protocols/http-interfaces";


export class DeleteAuthorController implements IController{
    constructor(private deleteAuthor : DeleteAuthor){}
    async handle (httpRequest: IHttpRequest): Promise<IHttpResponse>{
        try {
            const { id } = httpRequest.params
            if(!id){
                return {
                    statusCode : 400,
                    body : "id param is empty"
                }
            }
            const isDelete = await this.deleteAuthor.execute(id)
            if(!isDelete){
                return {
                    statusCode : 400,
                    body : "author was not removed"
                }
            }
            return {
                statusCode : 200,
                body : "author was removed"
            }
        } catch (error) {
            return error
        }
    }

}