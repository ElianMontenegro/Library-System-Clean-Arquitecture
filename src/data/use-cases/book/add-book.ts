import { BookEntity } from '../../../domain/entities/book'
import { IAddBook } from '../../../domain/use-cases/book/i-add-book'
import { SaveBookRepository }  from '../../protocols/db/book/saveBookRepository'

export class AddBook implements IAddBook {
    constructor(
        private saveBookRepository : SaveBookRepository
    ){}
    async execute(params: IAddBook.Params): Promise<boolean>{
        const book = new BookEntity(
            params.title, 
            params.category_id, 
            params.price_book,
            params.page_number,
            params.autor,
            params.year,
            params.amount == undefined ? 1 : params.amount
        );
        book.setRentPrice(params.price_book)
        const isSaved = await this.saveBookRepository.execute(book.getAll())
        if(isSaved){
            return true
        }
        return false
    }
    
}