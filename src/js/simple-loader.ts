import { BasicRequest } from 'rich-agent'
import { CustomLoader } from './custom-loader'

export class SimpleLoader extends CustomLoader {

    constructor (url: string, autoLoad: boolean = true) {
        super(new BasicRequest(url), autoLoad)
    }
}
