import { CreateCategory } from "src/data/use-cases/category/create-category";
import { IController } from "src/presentation/protocols/controller-interface";
import { IHttpRequest, IHttpResponse } from "src/presentation/protocols/http-interfaces";


export class CreateCategoryController implements IController{
    constructor(private createCategory : CreateCategory){}
    async handle (httpRequest: IHttpRequest): Promise<IHttpResponse>{
        try {
            const { name } = httpRequest.body
            if(!name){
                return {
                    statusCode : 400,
                    body : "name is empty"
                }
            }
            const category = await this.createCategory.execute(name)
            if(!category){
                return {
                    statusCode : 400,
                    body : "category already exist"
                }
            }
            return {
                statusCode : 200,
                body : "category created"
            }
        } catch (error) {
            return error
        }
    }

}