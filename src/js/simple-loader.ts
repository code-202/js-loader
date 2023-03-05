import { BasicRequest } from '@code-202/agent'
import { CustomLoader } from './custom-loader'

export class SimpleLoader extends CustomLoader {

    constructor (url: string, autoLoad: boolean = true) {
        super(new BasicRequest(url), autoLoad)
    }
}
