"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonLoader = void 0;
const rich_agent_1 = require("rich-agent");
const custom_loader_1 = require("./custom-loader");
class JsonLoader extends custom_loader_1.CustomLoader {
    constructor(url, autoLoad = true) {
        super(new rich_agent_1.ApiRequest(url), autoLoad);
    }
}
exports.JsonLoader = JsonLoader;
