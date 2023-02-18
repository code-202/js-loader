import { Request } from 'rich-agent'
import * as LoaderRequest from './loader-request'
import { makeObservable, observable, action } from 'mobx'

export class PrivateLoader implements LoaderRequest.Informations {

    public status: LoaderRequest.Status
    public progress: number
    public uploadProgress: number
    public errors: string[]

    protected _request: Request.Request

    constructor (request: Request.Request) {

        makeObservable(this, {
            status: action,
            progress: action,
            uploadProgress: action,
            errors: action,
        })

        this.status = 'waiting'
        this.progress = 0
        this.uploadProgress = 0
        this.errors = []

        this._request = request

        this._request.onProgress(action((progress: number, direction: 'up' | 'down') => {
            if (direction === 'down') {
                this.progress = progress
            } else {
                this.uploadProgress = progress
            }
        }))

        this._request.onStatusChange(action((status: Request.Status) => {
            this.status = status

            this.errors.splice(0)
            if (status === 'error') {
                for (const err of this._request.errors) {
                    this.errors.push(err)
                }
            }
        }))
    }
}
