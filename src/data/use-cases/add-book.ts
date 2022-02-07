import { BookEntity } from '../../../src/domain/entities/book'
import { IAddBook } from '../../../src/domain/use-cases/book/i-add-book'
import { FindBookByTitleRepository }  from '../../../src/data/protocols/db/book/findBookByTitleRepository'
import { SaveBookRepository }  from '../../../src/data/protocols/db/book/saveBookRepository'


export class AddBook implements IAddBook {
    constructor(
        private findBookByTitleRepository : FindBookByTitleRepository,
        private saveBookRepository : SaveBookRepository
    ){}
    async execute(params: IAddBook.Params): Promise<boolean>{
        const isExist = await this.findBookByTitleRepository.execute(params.title)
        if(!isExist){
            const book = new BookEntity(
                params.title, 
                params.category_id, 
                params.price_book,
                params.page_number,
                params.autor,
                params.year
            );
            book.setRentPrice(params.price_book)
            const isSaved = await this.saveBookRepository.execute(book.getAll)
            if(isSaved){
                return true
            }
            return false
        }
        return false
    }
    
}