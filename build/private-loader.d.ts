import { Request } from '@code-202/agent';
import { Normalizable } from '@code-202/serializer';
import * as LoaderRequest from './loader-request';
export declare class PrivateLoader implements LoaderRequest.Informations, Normalizable<PrivateLoaderNormalized> {
    status: LoaderRequest.Status;
    progress: number;
    uploadProgress: number;
    errors: string[];
    protected _request: Request.Request;
    constructor(request: Request.Request);
    normalize(): PrivateLoaderNormalized;
    denormalize(data: PrivateLoaderNormalized): void;
}
export interface PrivateLoaderNormalized {
    status: LoaderRequest.Status;
    progress: number;
    uploadProgress: number;
    errors: string[];
    request: Request.RequestNormalized;
}
