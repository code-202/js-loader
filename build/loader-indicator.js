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
const classnames_1 = __importDefault(require("classnames"));
const manager_1 = require("./manager");
class LoaderIndicator extends React.Component {
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
        if (this.props.waiting === false) {
            return null;
        }
        return (React.createElement("i", { className: (0, classnames_1.default)(this.props.waiting ? this.props.waiting : 'mdi mdi-loading mdi-spin'), "aria-hidden": "true" }));
    }
    renderPending() {
        if (this.props.pending === false) {
            return null;
        }
        return (React.createElement("i", { className: (0, classnames_1.default)(this.props.pending ? this.props.pending : 'mdi mdi-loading mdi-spin text-primary'), "aria-hidden": "true" }));
    }
    renderError() {
        if (this.props.error === false) {
            return null;
        }
        return (React.createElement("i", { className: (0, classnames_1.default)(this.props.error ? this.props.error : 'mdi mdi-exclamation-thick text-danger'), "aria-hidden": "true" }));
    }
    renderCanceled() {
        if (this.props.canceled === false) {
            return null;
        }
        return (React.createElement("i", { className: (0, classnames_1.default)(this.props.canceled ? this.props.canceled : 'mdi mdi-close text-warning'), "aria-hidden": "true" }));
    }
    renderDone() {
        if (this.props.done === false) {
            return null;
        }
        return (React.createElement("i", { className: (0, classnames_1.default)(this.props.done ? this.props.done : 'mdi mdi-check text-success'), "aria-hidden": "true" }));
    }
}
exports.default = (0, mobx_react_1.observer)(LoaderIndicator);
