import { IAddBook } from '../../../../../src/domain/use-cases/book/i-add-book'

export interface SaveBookRepository {
    execute: (book : IAddBook.Params) => Promise<boolean>
}