import { FindBookByTitleRepository }  from '../../../src/data/protocols/db/book/findBookByTitleRepository'
import { SaveBookRepository }  from '../../../src/data/protocols/db/book/saveBookRepository'
import { IAddBook } from '../../../src/domain/use-cases/book/i-add-book'

export class FindBookByTitleRepositorySpy implements FindBookByTitleRepository{
    title : string
    result = false
    async execute(title: string): Promise<boolean>{
        this.title = title
        return this.result
    }
}

export class SaveBookRepositorySpy implements SaveBookRepository{
    book : IAddBook.Params
    result = true
    async execute(book : IAddBook.Params): Promise<boolean>{
        this.book = book
        return this.result
    }
}