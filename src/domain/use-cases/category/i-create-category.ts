export interface ICreateCategory{
    execute: (name : string) => Promise<boolean>
}
