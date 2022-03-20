import { GetAllCategory } from "src/data/use-cases/category/get-all-category";
import { IController } from "src/presentation/protocols/controller-interface";
import { IHttpRequest, IHttpResponse } from "src/presentation/protocols/http-interfaces";


export class GetAllCategoryController implements IController{
    constructor(private getAllCategory : GetAllCategory){}
    async handle (httpRequest: IHttpRequest): Promise<IHttpResponse>{
        try {
            const category = await this.getAllCategory.execute()
            if(!category){
                return {
                    statusCode : 400,
                    body : "not found categories"
                }
            }
            return {
                statusCode : 200,
                body : category
            }
        } catch (error) {
            return error
        }
    }

}