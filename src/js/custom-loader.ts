import { Request, Response } from 'rich-agent'
import { PrivateLoader } from './private-loader'
import * as LoaderRequest from './loader-request'
import { observable, action } from 'mobx'

export class CustomLoader extends PrivateLoader implements LoaderRequest.Request {

    constructor (request: Request.Request, autoLoad: boolean = true) {
        super(request)

        if (autoLoad) {
            this.load()
        }
    }

    get request (): Request.Request {
        return this._request
    }

    get responseData (): any | null {
        return this._request.responseData
    }

    load(): Promise<Response.Response> {
        return this._request.send()
    }
}
