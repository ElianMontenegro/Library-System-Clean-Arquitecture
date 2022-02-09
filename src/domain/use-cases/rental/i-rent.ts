export interface IRent {
    execute: (idBooks: string[], reader: any,) => Promise<any>
}