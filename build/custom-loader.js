"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLoader = void 0;
const private_loader_1 = require("./private-loader");
class CustomLoader extends private_loader_1.PrivateLoader {
    constructor(request, autoLoad = true) {
        super(request);
        if (autoLoad) {
            this.load();
        }
    }
    get request() {
        return this._request;
    }
    get responseData() {
        return this._request.responseData;
    }
    load() {
        return this._request.send();
    }
}
exports.CustomLoader = CustomLoader;
