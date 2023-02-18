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
        return (React.createElement(React.Fragment, null));
    }
    renderPending() {
        if (this.props.loadingScreen) {
            return React.createElement(this.props.loadingScreen);
        }
        return (React.createElement(loading_screen_1.default, { progress: this.props.loadingInformation.progress, size: this.props.loaderSize, className: this.props.loadingClassname }));
    }
    renderError() {
        let messages = this.props.loadingInformation.errors;
        if (this.props.translateError) {
            messages = messages.map((message, index) => {
                return React.createElement(React.Fragment, null, this.props.translateError ? this.props.translateError(message) : message);
            });
        }
        return (React.createElement("div", { className: (0, classnames_1.default)('alert', 'alert-danger') }, messages));
    }
    renderCanceled() {
        return (React.createElement(React.Fragment, null));
    }
    renderDone() {
        return (React.createElement(React.Fragment, null, this.props.children));
    }
}
exports.default = (0, mobx_react_1.observer)(Loader);
