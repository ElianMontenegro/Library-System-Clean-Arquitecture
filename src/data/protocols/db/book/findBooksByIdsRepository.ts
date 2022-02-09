
export interface FindBooksByIdsRepository {
    execute: (ids : string[]) => Promise<any> 
}