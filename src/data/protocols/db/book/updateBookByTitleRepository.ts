import { IAddBook } from '../../../../../src/domain/use-cases/book/i-add-book'

export interface UpdateBookRepository {
    execute: (book : IAddBook.Params) => Promise<boolean>
}

