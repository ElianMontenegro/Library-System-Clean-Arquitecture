import { IAddAccount } from "../../../domain/use-cases/user/i-add-user"
import { CheckAccountByEmailRepository } from '../../protocols/db/user/check-account-by-email-repository'
import { AddAccountRepository } from '../../protocols/db/user/add-account-repository'
import { Hasher } from '../../protocols/cryptography/hasher'

export class AddAccount implements IAddAccount{
    constructor (
        private readonly hasher : Hasher,
        private readonly checkAccountByEmailRepository : CheckAccountByEmailRepository,
        private readonly addAccountRepository : AddAccountRepository
    ){}
    async add(accountData: IAddAccount.Params): Promise<boolean> {
        const exists = await this.checkAccountByEmailRepository.checkByEmail(accountData.email);
        let isValid = false
        if(!exists){
            const hasherPassword = await this.hasher.hash(accountData.password);
            isValid = await this.addAccountRepository.add({...accountData, password : hasherPassword})
        }
        return isValid
    }
}