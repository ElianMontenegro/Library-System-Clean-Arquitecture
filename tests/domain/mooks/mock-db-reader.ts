import { FindReaderByIdRepository } from '../../../src/data/protocols/db/reader/findReaderByIdRepository'


export class FindReaderByIdRepositorySpy implements FindReaderByIdRepository {
    id : string
    result : any
    async execute(id: string): Promise<any>{
        this.id = id
        return this.result
    }
}