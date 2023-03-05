import { Request } from '@code-202/agent';
import * as LoaderRequest from './loader-request';
export declare class PrivateLoader implements LoaderRequest.Informations {
    status: LoaderRequest.Status;
    progress: number;
    uploadProgress: number;
    errors: string[];
    protected _request: Request.Request;
    constructor(request: Request.Request);
    serialize(): Record<string, any>;
    deserialize(data: Record<string, any>): void;
}
