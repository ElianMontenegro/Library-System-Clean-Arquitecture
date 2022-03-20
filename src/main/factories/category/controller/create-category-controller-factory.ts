import { CreateCategoryController } from "../../../../../src/presentation/controllers/category/create-category-controller"
import { makeCreateCategoryUseCases } from '../use-cases/create-category-use-case-factory'
export const makeCreateCategoryController = (): CreateCategoryController => {
    const createCategoryController = new CreateCategoryController(makeCreateCategoryUseCases())
    return createCategoryController
}