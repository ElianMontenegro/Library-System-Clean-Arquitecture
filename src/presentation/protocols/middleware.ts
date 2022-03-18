import { IHttpResponse } from './http-interfaces'

export interface Middleware<T = any> {
    handle: (httpRequest: T) => Promise<IHttpResponse>
}