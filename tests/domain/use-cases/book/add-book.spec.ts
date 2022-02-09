import  { AddBook } from '../../../../src/data/use-cases/book/add-book'
import { SaveBookRepositorySpy }  from '../../mooks/mock-db-book'

const makeSut = () => {
    const saveBookRepositorySpy = new SaveBookRepositorySpy()
    const sut = new AddBook(saveBookRepositorySpy)
    return {
        sut,
        saveBookRepositorySpy
    }
}

describe('Book use cases', () => {

    it('Should return false if book is not saved', async () => {
        const { sut, saveBookRepositorySpy } = makeSut()
        saveBookRepositorySpy.result = false
        const isSaved = await sut.execute({title : 'harry Potter', category_id : '1', price_book : 2000})
        expect(isSaved).toBe(false)
    })

    it('Should return true if book is saved', async () => {
        const { sut, saveBookRepositorySpy } = makeSut()
        saveBookRepositorySpy.result = true
        const isSaved = await sut.execute({title : 'harry Potter', category_id : '1', price_book : 2000, page_number : 200, amount : 2})
        expect(isSaved).toBe(true)
    })

    it('Should return false if saveBookRepositorySpy throw error', async () => {
        const { sut, saveBookRepositorySpy } = makeSut()
        jest.spyOn(saveBookRepositorySpy, 'execute').mockImplementationOnce(() => {  throw new Error})
        const promise = sut.execute({title : 'harry Potter', category_id : '1', price_book : 2000})
        await expect(promise).rejects.toThrowError()
    })
})