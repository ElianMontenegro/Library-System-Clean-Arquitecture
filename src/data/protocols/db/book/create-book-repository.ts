import { IAddBook } from '../../../../domain/use-cases/book/i-add-book'

export interface CreateBookRepository {
    createBook: (book : IAddBook.Params) => Promise<boolean>
}

