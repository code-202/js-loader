"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleLoader = void 0;
const mobx_1 = require("mobx");
class MultipleLoader {
    loaders;
    constructor(loaders = []) {
        this.loaders = loaders;
        (0, mobx_1.makeAutoObservable)({
            status: mobx_1.computed,
            errors: mobx_1.computed,
            progress: mobx_1.computed,
            uploadProgress: mobx_1.computed,
        });
    }
    addLoader(loader) {
        this.loaders.push(loader);
    }
    get status() {
        for (const loader of this.loaders) {
            if (loader.status == 'error') {
                return 'error';
            }
        }
        for (const loader of this.loaders) {
            if (loader.status == 'canceled') {
                return 'canceled';
            }
        }
        for (const loader of this.loaders) {
            if (loader.status == 'pending') {
                return 'pending';
            }
        }
        for (const loader of this.loaders) {
            if (loader.status == 'waiting') {
                return 'waiting';
            }
        }
        return 'done';
    }
    get errors() {
        const e = [];
        for (const loader of this.loaders) {
            e.concat(...loader.errors);
        }
        return e;
    }
    get progress() {
        if (!this.loaders.length) {
            return 0;
        }
        let p = 0;
        for (const loader of this.loaders) {
            p += loader.progress;
        }
        p /= this.loaders.length;
        return p;
    }
    get uploadProgress() {
        if (!this.loaders.length) {
            return 0;
        }
        let p = 0;
        for (const loader of this.loaders) {
            p += loader.uploadProgress;
        }
        p /= this.loaders.length;
        return p;
    }
}
exports.MultipleLoader = MultipleLoader;
