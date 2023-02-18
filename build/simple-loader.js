"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleLoader = void 0;
const rich_agent_1 = require("rich-agent");
const custom_loader_1 = require("./custom-loader");
class SimpleLoader extends custom_loader_1.CustomLoader {
    constructor(url, autoLoad = true) {
        super(new rich_agent_1.BasicRequest(url), autoLoad);
    }
}
exports.SimpleLoader = SimpleLoader;
