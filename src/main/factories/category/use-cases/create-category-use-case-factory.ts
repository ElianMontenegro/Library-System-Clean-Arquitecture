import { CreateCategory } from '../../../../data/use-cases/category/create-category'
import { CategoryPostgresRepository } from '../../../../../src/infra/db/postgres/category-postgres-repository'
export const makeCreateCategoryUseCases = (): CreateCategory => {
    const categoryPostgresRepository = new CategoryPostgresRepository()
    const createCategory = new CreateCategory(categoryPostgresRepository)
    return createCategory
}