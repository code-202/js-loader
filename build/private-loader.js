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
    serialize() {
        return {
            status: this.status,
            progress: this.progress,
            uploadProgress: this.uploadProgress,
            errors: this.errors,
            request: this._request.serialize(),
        };
    }
    deserialize(data) {
        try {
            this.status = data.status;
            this.progress = data.progress;
            this.uploadProgress = data.uploadProgress;
            this.errors = data.errors;
            this._request.deserialize(data.request);
        }
        catch (e) {
            console.error('Impossible to deserialize : bad data');
        }
    }
}
exports.PrivateLoader = PrivateLoader;
