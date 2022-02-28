import { FindReaderByIdRepository } from '../../../src/data/protocols/db/reader/find-reader-by-id-repository'
import { FindRentWithStatusStandarRepository } from '../../../src/data/protocols/db/reader/find-rent-with-status-standar-repository'
import { IRentalEntenty } from "../../../src/domain/entities/rental";

export class FindReaderByIdRepositorySpy implements FindReaderByIdRepository {
    id : string
    result : any
    async execute(id: string): Promise<any>{
        this.id = id
        return this.result
    }
}

export class FindRentWithStatusStandarRepositorySpy implements FindRentWithStatusStandarRepository{
    date = new Date()
    date2 = new Date()
    result = [
        {
            date: new Date(this.date.setDate(this.date.getDate() - 10)),
            rentStatus: 0,
            extendsPrice: 0,
            books: [
                'any_id', 
                'any_id', 
            ],
            reader: {
            id: '4',
            name: 'lamante',
            last_name: 'monte',
            age: 20,
            email: 'elianmontenegro491@gmail.com'
            },
            totalPrice: 800,
            finalDate: new Date(this.date2.setDate(this.date2.getDate() - 5))
        },
        {
            date: new Date(),
            rentStatus: 0,
            extendsPrice: 0,
            books: [
                'any_id', 
                'any_id', 
            ],
            reader: {
            id: '4',
            name: 'elian',
            last_name: 'monte',
            age: 20,
            email: 'email@gmail.com'
            },
            totalPrice: 800,
            finalDate: new Date(this.date.setDate(this.date.getDate() + 25))
        }
    ]
    async execute(): Promise<IRentalEntenty[]> {
        return this.result
    }
}