import { Request as BaseRequest, Response } from 'rich-agent'

export interface Informations extends BaseRequest.RequestInformations {

}

export type Status = BaseRequest.Status

export interface Request extends Informations {
    readonly responseData: any | null
    load (): Promise<Response.Response>
    request: BaseRequest.Request
}
