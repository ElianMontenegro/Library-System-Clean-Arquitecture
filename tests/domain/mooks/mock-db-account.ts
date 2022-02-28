import { CheckAccountByEmailRepository }  from '../../../src/data/protocols/db/user/check-account-by-email-repository'
import { AddAccountRepository } from '../../../src/data/protocols/db/user/add-account-repository'
import { IAddAccount } from '../../../src/domain/use-cases/user/i-add-user'

export class CheckAccountByEmailRepositorySpy implements CheckAccountByEmailRepository{
    email: string
    result = true
    async checkByEmail(email: string): Promise<boolean>{
        this.email = email
        return this.result
    }
}

export class AddAccountRepositorySpy implements AddAccountRepository{
    params : IAddAccount.Params
    result = true
    async add(data: IAddAccount.Params): Promise<boolean>{
        this.params = data
        return this.result
    }
}

