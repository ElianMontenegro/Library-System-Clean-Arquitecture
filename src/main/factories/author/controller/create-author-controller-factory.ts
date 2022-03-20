import { CreateAuthorController } from "../../../../../src/presentation/controllers/create-author-controller"
import { makeCreateAuthorUseCases } from "../use-cases/create-author-use-case-factory"

export const makeCreateAuthorController = (): CreateAuthorController => {
    const createCategoryController = new CreateAuthorController(makeCreateAuthorUseCases())
    return createCategoryController
}


