"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateLoader = void 0;
const mobx_1 = require("mobx");
class PrivateLoader {
    status;
    progress;
    uploadProgress;
    errors;
    _request;
    constructor(request) {
        (0, mobx_1.makeObservable)(this, {
            status: mobx_1.observable,
            progress: mobx_1.observable,
            uploadProgress: mobx_1.observable,
            errors: mobx_1.observable,
        });
        this.status = 'waiting';
        this.progress = 0;
        this.uploadProgress = 0;
        this.errors = [];
        this._request = request;
        this._request.onProgress((0, mobx_1.action)((progress, direction) => {
            if (direction === 'down') {
                this.progress = progress;
            }
            else {
                this.uploadProgress = progress;
            }
        }));
        this._request.onStatusChange((0, mobx_1.action)((status) => {
            this.status = status;
            this.errors.splice(0);
            if (status === 'error') {
                for (const err of this._request.errors) {
                    this.errors.push(err);
                }
            }
        }));
    }
}
exports.PrivateLoader = PrivateLoader;
