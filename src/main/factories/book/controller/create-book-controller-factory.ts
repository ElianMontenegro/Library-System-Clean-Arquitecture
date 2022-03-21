import { CreateBookController } from "../../../../../src/presentation/controllers/book/add-book-controller"
import { makeCreateBookUseCases } from "../use-cases/create-book-use-case-factory"

export const makeCreateBookController = (): CreateBookController => {
    const createBookController = new CreateBookController(makeCreateBookUseCases())
    return createBookController
}


