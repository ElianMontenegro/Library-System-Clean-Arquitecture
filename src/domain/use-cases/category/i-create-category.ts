export interface ICreateBook{
    execute: (name : string) => Promise<boolean>
}
