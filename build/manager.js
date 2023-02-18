"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.LoaderManager = void 0;
class LoaderManager {
    _contentStrategy = 'wait';
    get contentStrategy() {
        return this._contentStrategy;
    }
    set contentStrategy(v) {
        this._contentStrategy = v;
    }
}
exports.LoaderManager = LoaderManager;
exports.Manager = new LoaderManager();
