import { IHttpRequest, IHttpResponse } from './http-interfaces'

export interface IController {
  handle: (httpRequest: IHttpRequest) => Promise<IHttpResponse>
}