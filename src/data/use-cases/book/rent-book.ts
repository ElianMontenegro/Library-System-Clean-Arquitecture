import { IRentBook } from "src/domain/use-cases/book/i-rent-book";
import { FindBookByTitleRepository }  from '../../protocols/db/book/findBookByTitleRepository'
import { UpdateBookRepository }  from '../../protocols/db/book/updateBookByTitleRepository'


export class RentBook implements IRentBook{
    constructor(
        private findBookByTitleRepository : FindBookByTitleRepository, 
        private updateBookRepository: UpdateBookRepository
    ){}
    async execute(title: string): Promise<IRentBook.Result | null>{
        const book = await this.findBookByTitleRepository.execute(title);
        if(book){
            if(book.amount != 0){
                book.amount = book.amount - 1
                const isUpdate = await this.updateBookRepository.execute(book);
                if(isUpdate){
                    return book
                }
            }
            return null
        }
        return null
    }
}