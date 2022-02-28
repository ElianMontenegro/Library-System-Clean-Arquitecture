import { IAddAccount } from '../../../../domain/use-cases/user/i-add-user'

export interface AddAccountRepository {
    add: (data: IAddAccount.Params) => Promise<boolean>
}

