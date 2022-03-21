import { CreateBook } from '../../../../../src/data/use-cases/book/add-book'
import { AuthorPostgresRepository } from '../../../../../src/infra/db/postgres/author-postgres-repository'
import { BookPostgresRepository } from '../../../../../src/infra/db/postgres/book-postgres-repository'
import { CategoryPostgresRepository } from '../../../../../src/infra/db/postgres/category-postgres-repository'
export const makeCreateBookUseCases = (): CreateBook => {
    const bookPostgresRepository = new BookPostgresRepository()
    const authorPostgresRepository = new AuthorPostgresRepository()
    const categoryPostgresRepository = new CategoryPostgresRepository()
    const createBook = new CreateBook(bookPostgresRepository, authorPostgresRepository, categoryPostgresRepository)
    return createBook
}