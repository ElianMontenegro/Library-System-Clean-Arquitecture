import  { RentBook } from '../../../../src/data/use-cases/book/rent-book'
import { FindBookByTitleRepositorySpy, UpdateBookRepositorySpy }  from '../../mooks/mock-db-book'
const makeSut = () => {
    const findBookByTitleRepositorySpy = new FindBookByTitleRepositorySpy()
    const updateBookRepositorySpy = new UpdateBookRepositorySpy()
    const sut = new RentBook(
        findBookByTitleRepositorySpy,
        updateBookRepositorySpy
    )
    return {
        sut,
        findBookByTitleRepositorySpy,
        updateBookRepositorySpy
    }
}

describe('rent book usecase', () => {
    it('Should return null if book is not exist', async () => {
        const { sut, findBookByTitleRepositorySpy } = makeSut()
        findBookByTitleRepositorySpy.result = null
        const result = await sut.execute("harry potter");
        expect(result).toBe(null)
    })

    it('Should return null if there are not available books', async () => {
        const { sut, findBookByTitleRepositorySpy } = makeSut()
        findBookByTitleRepositorySpy.result.amount = 0
        const result = await sut.execute("harry potter");
        expect(result).toBe(null)
    })

    it('Should return book with one copy less', async () => {
        const { sut, findBookByTitleRepositorySpy } = makeSut()
        findBookByTitleRepositorySpy.result.amount = 3
        const result = await sut.execute("harry potter");
        expect(result.amount).toEqual(2)
    })

    it('Should return null if book is not update', async () => {
        const { sut, updateBookRepositorySpy } = makeSut()
        updateBookRepositorySpy.result = false
        const result = await sut.execute("harry potter");
        expect(result).toBe(null)
    })

    it('Should return throw error if findBookByTitleRepositorySpy throw error', async () => {
        const { sut, findBookByTitleRepositorySpy } = makeSut()
        jest.spyOn(findBookByTitleRepositorySpy, 'execute').mockImplementationOnce(() => {  throw new Error})
        const promise = sut.execute('harry Potter')
        await expect(promise).rejects.toThrowError()
    })
})