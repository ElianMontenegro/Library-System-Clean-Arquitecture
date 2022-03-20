import { ICreateAuthor } from 'src/domain/use-cases/author/i-create-author'
import { AuthorPostgresRepository } from 'src/infra/db/postgres/author-postgres-repository'

export class CreateAuthor implements ICreateAuthor {
    constructor(
        private authorPostgresRepository : AuthorPostgresRepository
    ){}
    async execute(name: string, lastName: string): Promise<boolean>{
        const isExist = await this.authorPostgresRepository.getAuthorByName(name)
        if(!isExist){
            const isCreated = await this.authorPostgresRepository.createAuthor(name, lastName)
            if(!isCreated){
                return false
            }
            return true
        }
        return false
    }
}