export interface IRentBook {
    execute: (title: string) => Promise<IRentBook.Result | null>
}

export namespace IRentBook {
    export type Result = {
        title: string, 
        page_number: number, 
        autor: string, 
        year: string,
        category_id: string,
        price_book: number,
        rentPrice: number,
        amount : number,
    }
}