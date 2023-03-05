import { Request, Response } from '@code-202/agent';
import { PrivateLoader } from './private-loader';
import * as LoaderRequest from './loader-request';
export declare class CustomLoader extends PrivateLoader implements LoaderRequest.Request {
    constructor(request: Request.Request, autoLoad?: boolean);
    get request(): Request.Request;
    get responseData(): any | null;
    load(): Promise<Response.Response>;
}
