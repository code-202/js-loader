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
const React = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("@mdi/react"));
const js_1 = require("@mdi/js");
class LoadingScreen extends React.Component {
    render() {
        const { progress, className, size, ...otherProps } = this.props;
        let iconSize = 1;
        switch (size) {
            case 'xl':
                iconSize = 5;
                break;
            case 'lg':
                iconSize = 3;
                break;
            case 'md':
                iconSize = 2;
                break;
            case 'sm':
            default:
                iconSize = 1;
                break;
        }
        return (React.createElement("div", { className: (0, classnames_1.default)('loading-screen', 'text-center', className) },
            React.createElement("div", { className: "loading-screen-indicator" }, (progress === 0 || progress === undefined) ? (React.createElement(react_1.default, { path: js_1.mdiLoading, size: iconSize, spin: true })) : (React.createElement("div", { className: "progress", style: { height: '1px' } },
                React.createElement("div", { className: (0, classnames_1.default)('progress-bar', 'bg-primary'), role: "progressbar", style: { width: progress + '%' } }))))));
    }
}
exports.default = LoadingScreen;
