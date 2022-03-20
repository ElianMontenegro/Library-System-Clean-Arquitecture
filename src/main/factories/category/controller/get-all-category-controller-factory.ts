import { GetAllCategoryController } from "../../../../../src/presentation/controllers/category/get-all-category-controller"
import { makeGetAllCategoryUseCases } from "../use-cases/get-all-category-use-case-factory"
export const makeGetAllCategoryController = (): GetAllCategoryController => {
    const getAllCategoryController = new GetAllCategoryController(makeGetAllCategoryUseCases())
    return getAllCategoryController
}