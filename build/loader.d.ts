import * as React from 'react';
import * as LoaderRequest from './loader-request';
import { ContentStrategy } from './manager';
interface Props extends React.PropsWithChildren {
    loadingInformation: LoaderRequest.Informations;
    translateError?: (message: string) => string;
    loaderSize?: 'sm' | 'md' | 'lg' | 'xl';
    loadingClassname?: string;
    loadingScreen?: React.ComponentClass;
    contentStrategy?: ContentStrategy;
}
interface State {
}
declare class Loader extends React.Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
    renderWaiting(): JSX.Element;
    renderPending(): JSX.Element;
    renderError(): JSX.Element;
    renderCanceled(): JSX.Element;
    renderDone(): JSX.Element;
}
declare const _default: typeof Loader;
export default _default;
