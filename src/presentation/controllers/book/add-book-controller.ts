import { CreateBook } from "src/data/use-cases/book/add-book";
import { DataInUseError, MissingParamError } from "../../errors";
import { badRequest, ok, serverError } from "../../helpers/http-status";
import { IController } from "src/presentation/protocols/controller-interface";
import { IHttpRequest, IHttpResponse } from "../../protocols/http-interfaces";


export class CreateBookController implements IController{
    constructor(private readonly createBook : CreateBook){}
    async handle (httpRequest: IHttpRequest): Promise<IHttpResponse>{
        try {
            const paramsRequired = [
                "title", 
                "id_category", 
                "price_book", 
                "page_number", 
                "id_autor", 
                "year", 
                "amount"
            ]
            for (const params of paramsRequired) {
                if(!httpRequest.body[params]){
                    return badRequest(new MissingParamError(params))
                }
            }
            const book = await this.createBook.execute(httpRequest.body)
            if(!book){
                return badRequest(new DataInUseError('title'))
            }
            return ok(book)
        } catch (error) {
            return  serverError(error)
        }
    }

}