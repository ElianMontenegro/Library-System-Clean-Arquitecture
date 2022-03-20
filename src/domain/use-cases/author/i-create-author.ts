export interface ICreateAuthor{
    execute: (name : string, lastName : string) => Promise<boolean>
}
