import { FindBooksByIdsRepository } from "src/data/protocols/db/book/findBooksByIdsRepository";
import { FindReaderByIdRepository } from "src/data/protocols/db/reader/findReaderByIdRepository";
import { IRent } from "src/domain/use-cases/rental/i-rent";


export class Rent implements IRent{
    constructor(
        private findBooksByIdsRepository : FindBooksByIdsRepository,
        private findReaderByIdRepository : FindReaderByIdRepository
    ){}
    async execute(idBooks: string[], readerId: any): Promise<any>{
        const books = await this.findBooksByIdsRepository.execute(idBooks)
        if(!books){
            return null
        }
        const reader = await this.findReaderByIdRepository.execute(readerId);
        if(!reader){
            return null
        }

        const totalPrice = (book : any[]) => {
            let total = 0
            for (const iterator of book) {
                total = total + iterator.rentPrice
            }
            return total
        }

        const finalDate = () => {
            const DAYS = 30;
            const date = new Date()
            date.setDate(date.getDate() + DAYS)
            return date
        }

        const orderRent = {
            books : books,
            reader : reader,
            date : new Date(),
            totalPrice : totalPrice(books),
            finalDate : finalDate()
        }

        return orderRent
    }
}