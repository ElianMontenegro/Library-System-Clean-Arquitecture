export interface IDeleteAuthor{
    execute: (id : number) => Promise<boolean>
}
