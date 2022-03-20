import { DeleteAuthor } from '../../../../../src/data/use-cases/author/delete-author'
import { AuthorPostgresRepository } from '../../../../../src/infra/db/postgres/author-postgres-repository'
export const makeDeleteAuthorUseCases = (): DeleteAuthor => {
    const authorPostgresRepository = new AuthorPostgresRepository()
    const deleteAuthor = new DeleteAuthor(authorPostgresRepository)
    return deleteAuthor
}