import { GetAllCategoryRepository } from '../../../../src/data/protocols/db/category/get-all-category-repository'
import { IGetAllCategory } from '../../../../src/domain/use-cases/category/i-get-all-category'


export class GetAllCategory implements IGetAllCategory {
    constructor(
        private getAllCategoryRepository : GetAllCategoryRepository
    ){}
    async execute(): Promise<any>{
        const allCategories = await this.getAllCategoryRepository.getAllCategory()
        if(!allCategories){
            return false
        }
        return allCategories
    }
    
}