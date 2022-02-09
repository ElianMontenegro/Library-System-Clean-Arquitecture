export interface IAddBook{
    execute: (params : IAddBook.Params) => Promise<boolean>
}

export namespace IAddBook {
    export type Params = {
        title: string, 
        page_number?: number, 
        autor?: string, 
        year?: string,
        category_id: string,
        price_book: number,
        rentPrice?: number,
        amount?: number
    }
}