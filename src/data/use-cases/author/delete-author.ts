import { IDeleteAuthor } from "src/domain/use-cases/author/i-delete-author";
import { AuthorPostgresRepository } from "src/infra/db/postgres/author-postgres-repository";


export class DeleteAuthor implements IDeleteAuthor{
    constructor(private authorPostgresRepository : AuthorPostgresRepository){}

    async execute(id: number): Promise<boolean>{
        const isExist = await this.authorPostgresRepository.getAuthorById(id)
        if(isExist){
            const isDeleted = await this.authorPostgresRepository.deleteAuthorById(id)
            if(isDeleted){
                return true
            }
            return false
        }
        return false
    }
}