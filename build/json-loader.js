"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonLoader = void 0;
const agent_1 = require("@code-202/agent");
const custom_loader_1 = require("./custom-loader");
class JsonLoader extends custom_loader_1.CustomLoader {
    constructor(url, autoLoad = true) {
        super(new agent_1.ApiRequest(url), autoLoad);
    }
}
exports.JsonLoader = JsonLoader;
