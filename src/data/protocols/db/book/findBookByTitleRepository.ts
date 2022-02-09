import { IRentBook } from "src/domain/use-cases/book/i-rent-book";

export interface FindBookByTitleRepository {
    execute: (title : string) => Promise<IRentBook.Result | null>
}

