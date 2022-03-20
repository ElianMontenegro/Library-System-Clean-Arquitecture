import { DeleteAuthorController } from "../../../../presentation/controllers/author/delete-author-controller"
import { makeDeleteAuthorUseCases } from "../use-cases/delete-author-use-case-factory"


export const makeDeleteAuthorController = (): DeleteAuthorController => {
    const deleteAuthorController = new DeleteAuthorController(makeDeleteAuthorUseCases())
    return deleteAuthorController
}


