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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("@mdi/react"));
const js_1 = require("@mdi/js");
class LoadingScreen extends React.Component {
    render() {
        const { progress, className, size, ...otherProps } = this.props;
        return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('loading-screen', 'text-center', className), children: (0, jsx_runtime_1.jsx)("div", { className: "loading-screen-indicator", children: (progress === 0 || progress === undefined) ? ((0, jsx_runtime_1.jsx)(react_1.default, { path: js_1.mdiLoading, size: this.determineIconSize(size), spin: true })) : ((0, jsx_runtime_1.jsx)("div", { className: "progress", style: { height: '1px' }, children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('progress-bar', 'bg-primary'), role: "progressbar", style: { width: progress + '%' } }) })) }) }));
    }
    determineIconSize(size) {
        switch (size) {
            case 'xl':
                return 5;
            case 'lg':
                return 3;
            case 'md':
                return 2;
            case 'sm':
            default:
                return 1;
        }
    }
}
exports.default = LoadingScreen;
//# sourceMappingURL=loading-screen.js.map