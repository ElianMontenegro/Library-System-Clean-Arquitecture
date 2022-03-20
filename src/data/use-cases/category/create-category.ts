import { ICreateCategory } from 'src/domain/use-cases/category/i-create-category'
import { CategoryPostgresRepository } from 'src/infra/db/postgres/category-postgres-repository'


export class CreateCategory implements ICreateCategory {
    constructor(
        private categoryPostgresRepository : CategoryPostgresRepository
    ){}
    async execute(name: string): Promise<boolean>{
        const isExist = await this.categoryPostgresRepository.getCategoryByName(name)
        if(!isExist){
            const isCreated = await this.categoryPostgresRepository.createCategory(name)
            if(!isCreated){
                return false
            }
            return true
        }
        return false
    }
}