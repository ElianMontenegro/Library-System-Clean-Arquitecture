import { Rent } from '../../../../src/data/use-cases/rental/rent'
import { FindBooksByIdsRepositorySpy } from '../../mooks/mock-db-book'
import { FindReaderByIdRepositorySpy } from '../../mooks/mock-db-reader'
const makeSut = () => {
    const findBooksByIdsRepositorySpy = new FindBooksByIdsRepositorySpy()
    const findReaderByIdRepositorySpy = new FindReaderByIdRepositorySpy()
    const sut = new Rent(
        findBooksByIdsRepositorySpy,
        findReaderByIdRepositorySpy
    )
    return {
        sut,
        findBooksByIdsRepositorySpy,
        findReaderByIdRepositorySpy
    }
}

describe('rent use case', () => {
    it('Should return null if any of books select dont exist', async () => {
        const { sut, findBooksByIdsRepositorySpy } = makeSut()
        findBooksByIdsRepositorySpy.result = null
        const result = await sut.execute(['any_idBook', 'any_idBook'], 4)
        expect(result).toBe(null)
    })

    it('Should return null if reader doesnt exist', async () => {
        const { sut, findBooksByIdsRepositorySpy, findReaderByIdRepositorySpy } = makeSut()
        findBooksByIdsRepositorySpy.result = null
        findReaderByIdRepositorySpy.result = null
        const result = await sut.execute(['any_idBook', 'any_idBook'], 4)
        expect(result).toBe(null)
    })

    it('Should return order', async () => {
        const { sut, findBooksByIdsRepositorySpy, findReaderByIdRepositorySpy } = makeSut()
        findBooksByIdsRepositorySpy.result = [
            {
                title : 'harry Potter', 
                category_id : '1', 
                price_book : 2000, 
                page_number : 200, 
                amount : 5,
                rentPrice : 400
            },
            {
                title : 'harry Potter 2', 
                category_id : '1', 
                price_book : 2000, 
                page_number : 230, 
                amount : 5,
                rentPrice : 400
            },
        ]
        findReaderByIdRepositorySpy.result = {
            id : '4',
            name : 'elian',
            last_name : 'monte',
            age: 20,
            email: 'email@gmail.com'
        }
        const result = await sut.execute(['any_idBook', 'any_idBook'], 4)
        expect(result.books).toBe(findBooksByIdsRepositorySpy.result)
        expect(result.reader).toBe(findReaderByIdRepositorySpy.result)
    })
})