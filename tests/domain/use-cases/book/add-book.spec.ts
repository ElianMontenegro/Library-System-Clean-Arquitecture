import  { AddBook } from '../../../../src/data/use-cases/add-book'
import { FindBookByTitleRepositorySpy }  from '../../mooks/mock-db-book'
import { SaveBookRepositorySpy }  from '../../mooks/mock-db-book'

const makeSut = () => {
    const findBookByTitleRepositorySpy = new FindBookByTitleRepositorySpy()
    const saveBookRepositorySpy = new SaveBookRepositorySpy()
    const sut = new AddBook(findBookByTitleRepositorySpy, saveBookRepositorySpy)
    return {
        sut,
        findBookByTitleRepositorySpy,
        saveBookRepositorySpy
    }
}


describe('Book use cases', () => {
    it('Should return true on success', async () => {
        const { sut, findBookByTitleRepositorySpy} = makeSut()
        findBookByTitleRepositorySpy.result = false
        const isAdd = await sut.execute({title : 'harry Potter', category_id : '1', price_book : 2000})
        expect(isAdd).toBe(true)
    })

    it('Should return false if book title is already exist', async () => {
        const { sut, findBookByTitleRepositorySpy} = makeSut()
        findBookByTitleRepositorySpy.result = true
        const isAdd = await sut.execute({title : 'harry Potter', category_id : '1', price_book : 2000})
        expect(isAdd).toBe(false)
    })

    it('Should return false if book is not saved', async () => {
        const { sut,  saveBookRepositorySpy} = makeSut()
        saveBookRepositorySpy.result = false
        const isSaved = await sut.execute({title : 'harry Potter', category_id : '1', price_book : 2000})
        expect(isSaved).toBe(false)
    })

    it('Should return true if book is saved', async () => {
        const { sut,  saveBookRepositorySpy} = makeSut()
        saveBookRepositorySpy.result = true
        const isSaved = await sut.execute({title : 'harry Potter', category_id : '1', price_book : 2000})
        expect(isSaved).toBe(true)
    })

    it('Should return false if saveBookRepositorySpy throw error', async () => {
        const { sut,  saveBookRepositorySpy} = makeSut()
        jest.spyOn(saveBookRepositorySpy, 'execute').mockImplementationOnce(() => {  throw new Error})
        const promise = sut.execute({title : 'harry Potter', category_id : '1', price_book : 2000})
        await expect(promise).rejects.toThrowError()
    })
})