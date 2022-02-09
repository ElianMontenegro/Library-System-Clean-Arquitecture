import { FindBookByTitleRepository }  from '../../../src/data/protocols/db/book/findBookByTitleRepository'
import { SaveBookRepository }  from '../../../src/data/protocols/db/book/saveBookRepository'
import { UpdateBookRepository } from '../../../src/data/protocols/db/book/updateBookByTitleRepository';
import { IAddBook } from '../../../src/domain/use-cases/book/i-add-book'
import { IRentBook } from "../../../src/domain/use-cases/book/i-rent-book";
import { FindBooksByIdsRepository } from '../../../src/data/protocols/db/book/findBooksByIdsRepository'

export class FindBookByTitleRepositorySpy implements FindBookByTitleRepository {
    title : string
    result = {
        title : "harry potter",
        category_id : "1",
        price_book : 3000,
        page_number: 200, 
        autor: "martin", 
        year: "2000",
        rentPrice: 300,
        amount: 3
    }
   
    async execute(title: string): Promise<IRentBook.Result | null>{
        this.title = title
        return this.result
    }
}

export class SaveBookRepositorySpy implements SaveBookRepository {
    book : IAddBook.Params
    result = true
    async execute(book : IAddBook.Params): Promise<boolean>{
        this.book = book
        return this.result
    }
}


export class UpdateBookRepositorySpy implements UpdateBookRepository {
    book : IAddBook.Params
    result = true
    async execute(book : IAddBook.Params): Promise<boolean>{
        this.book = book
        return this.result
    }
}

export class FindBooksByIdsRepositorySpy implements FindBooksByIdsRepository {
    ids : string[]
    result : any
    async execute (ids: string[]): Promise<any>{
        this.ids = ids
        return this.result
    }
}