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
    render(): React.JSX.Element;
    renderWaiting(): React.JSX.Element;
    renderPending(): React.JSX.Element;
    renderError(): React.JSX.Element;
    renderCanceled(): React.JSX.Element;
    renderDone(): React.JSX.Element;
}
declare const _default: typeof Loader;
export default _default;
//# sourceMappingURL=loader.d.ts.map