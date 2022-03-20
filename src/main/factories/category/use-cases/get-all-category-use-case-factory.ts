import { CategoryPostgresRepository } from '../../../../../src/infra/db/postgres/category-postgres-repository'
import { GetAllCategory } from '../../../../../src/data/use-cases/category/get-all-category'
export const makeGetAllCategoryUseCases = (): GetAllCategory => {
    const categoryPostgresRepository = new CategoryPostgresRepository()
    const getAllCategory = new GetAllCategory(categoryPostgresRepository)
    return getAllCategory
}