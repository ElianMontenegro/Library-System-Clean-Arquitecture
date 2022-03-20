import { CreateAuthor } from '../../../../../src/data/use-cases/author/create-author'
import { AuthorPostgresRepository } from '../../../../../src/infra/db/postgres/author-postgres-repository'
export const makeCreateAuthorUseCases = (): CreateAuthor => {
    const authorPostgresRepository = new AuthorPostgresRepository()
    const createAuthor = new CreateAuthor(authorPostgresRepository)
    return createAuthor
}