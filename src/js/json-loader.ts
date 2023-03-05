import { ApiRequest } from '@code-202/agent'
import { CustomLoader } from './custom-loader'

export class JsonLoader extends CustomLoader {

    constructor (url: string, autoLoad: boolean = true) {
        super(new ApiRequest(url), autoLoad)
    }
}
