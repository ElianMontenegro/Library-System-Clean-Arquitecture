
export interface GetBooksByIdsRepository {
    getBooksByIdsRepository: (ids : string[]) => Promise<any> 
}