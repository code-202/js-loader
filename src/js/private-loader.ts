import { Request } from '@code-202/agent'
import { Normalizable, Denormalizable } from '@code-202/serializer'
import * as LoaderRequest from './loader-request'
import { makeObservable, observable, action } from 'mobx'

export class PrivateLoader implements LoaderRequest.Informations, Normalizable<PrivateLoaderNormalized>, Denormalizable<PrivateLoaderNormalized> {

    public status: LoaderRequest.Status
    public progress: number
    public uploadProgress: number
    public errors: string[]

    protected _request: Request.Request

    constructor (request: Request.Request) {

        makeObservable(this, {
            status: observable,
            progress: observable,
            uploadProgress: observable,
            errors: observable,
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

    public normalize(): PrivateLoaderNormalized {
        return {
            status: this.status,
            progress: this.progress,
            uploadProgress: this.uploadProgress,
            errors: this.errors,
            request: this._request.normalize(),
        }
    }

    public denormalize(data: PrivateLoaderNormalized): void {
        try {
            this.status = data.status
            this.progress = data.progress
            this.uploadProgress = data.uploadProgress
            this.errors = data.errors

            this._request.denormalize(data.request)
        } catch (e) {
            console.error('Impossible to deserialize : bad data')
        }
    }
}

export interface PrivateLoaderNormalized {
    status: LoaderRequest.Status
    progress: number
    uploadProgress: number
    errors: string[]
    request: Request.RequestNormalized
}
