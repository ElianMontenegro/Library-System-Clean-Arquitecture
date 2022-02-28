
import { AddAccount } from '../../../../src/data/use-cases/user/add-user'
import { HasherSpy } from '../../mooks/mock-cryptography'
import { AddAccountRepositorySpy, CheckAccountByEmailRepositorySpy } from '../../mooks/mock-db-account'
import faker from 'faker'

const makeSut = () => {
    const hasherSpy = new HasherSpy()
    const checkAccountByEmailRepositorySpy = new CheckAccountByEmailRepositorySpy()
    const addAccountRepositorySpy = new AddAccountRepositorySpy()
    const sut = new AddAccount(
        hasherSpy,
        checkAccountByEmailRepositorySpy,
        addAccountRepositorySpy
    )
    return {
        sut,
        hasherSpy,
        checkAccountByEmailRepositorySpy,
        addAccountRepositorySpy
    }
}

const userParams = {
    username : faker.name.firstName(),
    email: faker.internet.email(),
    password : faker.internet.password()
}


describe('add user usecase', () => {
    it('Should return false if user already exist', async () => {
        const { sut } = makeSut() 
        const result = await sut.add(userParams);
        expect(result).toBe(false)
    })

    it('Should call Hasher with correct plainText', async () => {
        const { sut, hasherSpy, checkAccountByEmailRepositorySpy } = makeSut() 
        checkAccountByEmailRepositorySpy.result = false
        await sut.add(userParams);
        expect(hasherSpy.plaintext).toEqual(userParams.password)
    })

    it('Should throw error if Hasher throw error', async () => {
        const { sut, hasherSpy, checkAccountByEmailRepositorySpy } = makeSut() 
        checkAccountByEmailRepositorySpy.result = false
        jest.spyOn(hasherSpy, 'hash').mockImplementationOnce(() => { throw new Error() })
        const promise = sut.add(userParams);
        expect(promise).rejects.toThrowError()
    })

    it('Should throw error if Hasher throw error', async () => {
        const { sut, hasherSpy, checkAccountByEmailRepositorySpy, addAccountRepositorySpy } = makeSut() 
        checkAccountByEmailRepositorySpy.result = false
        await sut.add(userParams);
        expect(addAccountRepositorySpy.params).toEqual({
            username : userParams.username,
            email : userParams.email,
            password : hasherSpy.hashed
        })
    })

    it('Should return true on success', async () => {
        const { sut, checkAccountByEmailRepositorySpy } = makeSut() 
        checkAccountByEmailRepositorySpy.result = false
        const result = await sut.add(userParams);
        expect(result).toBe(true)
    })


})