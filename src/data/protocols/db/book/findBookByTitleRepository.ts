export interface FindBookByTitleRepository {
    execute: (title : string) => Promise<Boolean>
}

