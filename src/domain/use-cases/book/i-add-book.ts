export interface IAddBook{
    execute: (params : IAddBook.Params) => Promise<boolean>
}

export namespace IAddBook {
    export type Params = {
        title: string, 
        page_number?: number, 
        id_autor?: number, 
        year?: string,
        id_category: number,
        price_book: number,
        rentPrice?: number,
        amount?: number
    }
}