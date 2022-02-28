export interface IAddress {
    email: string
    name: string
  }
  
  export interface IMessage {
    to: IAddress
    subject: string
    template: string
    context : any
  }
  
  export interface IMessageResponse {
    _id: string
    to: IAddress
    subject: string
    body: string
  }
  export interface IMailProvider {
    execute: (message: IMessage) => Promise<void>
  }
  
  export interface IGetEmailProvider {
    getMail: (message: IMessage) => Promise<IMessage>
  }
  
  export interface DeleteEmail {
    delete: (account: IMessageResponse) => Promise<IMessageResponse>
  }