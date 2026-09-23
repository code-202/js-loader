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
const mobx_react_1 = require("mobx-react");
const loading_screen_1 = __importDefault(require("./loading-screen"));
const classnames_1 = __importDefault(require("classnames"));
const manager_1 = require("./manager");
class Loader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.contentStrategy === 'show' || (!this.props.contentStrategy && manager_1.Manager.contentStrategy === 'show')) {
            return this.renderDone();
        }
        switch (this.props.loadingInformation.status) {
            case 'waiting':
                return this.renderWaiting();
            case 'pending':
                return this.renderPending();
            case 'error':
                return this.renderError();
            case 'canceled':
                return this.renderCanceled();
            case 'done':
                return this.renderDone();
        }
        return this.renderWaiting();
    }
    renderWaiting() {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}));
    }
    renderPending() {
        if (this.props.loadingScreen) {
            return React.createElement(this.props.loadingScreen);
        }
        return ((0, jsx_runtime_1.jsx)(loading_screen_1.default, { progress: this.props.loadingInformation.progress, size: this.props.loaderSize, className: this.props.loadingClassname }));
    }
    renderError() {
        let messages = this.props.loadingInformation.errors;
        if (this.props.translateError) {
            messages = messages.map((message, index) => {
                return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: this.props.translateError ? this.props.translateError(message) : message });
            });
        }
        return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('alert', 'alert-danger'), children: messages }));
    }
    renderCanceled() {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}));
    }
    renderDone() {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: this.props.children }));
    }
}
exports.default = (0, mobx_react_1.observer)(Loader);
//# sourceMappingURL=loader.js.map