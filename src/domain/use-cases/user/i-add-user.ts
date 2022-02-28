
export interface IAddAccount {
    add: (account: IAddAccount.Params) => Promise<boolean>
}
  
export namespace IAddAccount {
    export type Params = {
        username: string
        email: string
        password: string
    }
}