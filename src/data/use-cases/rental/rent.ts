import { FindBooksByIdsRepository } from "src/data/protocols/db/book/findBooksByIdsRepository";
import { FindReaderByIdRepository } from "src/data/protocols/db/reader/find-reader-by-id-repository";
import { IRent } from "src/domain/use-cases/rental/i-rent";
import { RentalEntenty } from "../../../../src/domain/entities/rental";

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

        const CalculateTotalPrice = (book : any[]): number => {
            let total = 0
            for (const iterator of book) {
                total = total + iterator.rentPrice
            }
            return total
        }
        const totalPrice = CalculateTotalPrice(books);
        const orderRent = new RentalEntenty({books, reader, totalPrice});

        return orderRent
    }
}