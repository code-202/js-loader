"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleLoader = exports.PrivateLoader = exports.MultipleLoader = exports.Manager = exports.LoadingScreen = exports.LoaderRequest = exports.LoaderIndicator = exports.Loader = exports.JsonLoader = exports.CustomLoader = void 0;
const custom_loader_1 = require("./custom-loader");
Object.defineProperty(exports, "CustomLoader", { enumerable: true, get: function () { return custom_loader_1.CustomLoader; } });
const json_loader_1 = require("./json-loader");
Object.defineProperty(exports, "JsonLoader", { enumerable: true, get: function () { return json_loader_1.JsonLoader; } });
const loader_1 = __importDefault(require("./loader"));
exports.Loader = loader_1.default;
const loader_indicator_1 = __importDefault(require("./loader-indicator"));
exports.LoaderIndicator = loader_indicator_1.default;
const LoaderRequest = __importStar(require("./loader-request"));
exports.LoaderRequest = LoaderRequest;
const loading_screen_1 = __importDefault(require("./loading-screen"));
exports.LoadingScreen = loading_screen_1.default;
const Manager = __importStar(require("./manager"));
exports.Manager = Manager;
const multiple_loader_1 = require("./multiple-loader");
Object.defineProperty(exports, "MultipleLoader", { enumerable: true, get: function () { return multiple_loader_1.MultipleLoader; } });
const private_loader_1 = require("./private-loader");
Object.defineProperty(exports, "PrivateLoader", { enumerable: true, get: function () { return private_loader_1.PrivateLoader; } });
const simple_loader_1 = require("./simple-loader");
Object.defineProperty(exports, "SimpleLoader", { enumerable: true, get: function () { return simple_loader_1.SimpleLoader; } });
