import { ApiRequest } from 'rich-agent'
import { CustomLoader } from './custom-loader'

export class JsonLoader extends CustomLoader {

    constructor (url: string, autoLoad: boolean = true) {
        super(new ApiRequest(url), autoLoad)
    }
}
