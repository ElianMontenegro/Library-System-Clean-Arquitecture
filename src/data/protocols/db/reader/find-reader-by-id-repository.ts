export interface FindReaderByIdRepository {
    execute: (id : string) => Promise<any>
}