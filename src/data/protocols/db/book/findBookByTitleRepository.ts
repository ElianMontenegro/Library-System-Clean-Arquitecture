import { IRentBook } from "src/domain/use-cases/book/i-rent-book";

export interface GetBookByTitleRepository {
    GetBookByTitleRepository: (title : string) => Promise<IRentBook.Result | null>
}

