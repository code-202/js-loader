import * as React from 'react';
import * as LoaderRequest from './loader-request';
import { ContentStrategy } from './manager';
interface Props {
    loadingInformation: LoaderRequest.Informations;
    waiting?: string | false;
    pending?: string | false;
    error?: string | false;
    canceled?: string | false;
    done?: string | false;
    contentStrategy?: ContentStrategy;
}
interface State {
}
declare class LoaderIndicator extends React.Component<Props, State> {
    constructor(props: Props);
    render(): React.JSX.Element | null;
    renderWaiting(): React.JSX.Element | null;
    renderPending(): React.JSX.Element | null;
    renderError(): React.JSX.Element | null;
    renderCanceled(): React.JSX.Element | null;
    renderDone(): React.JSX.Element | null;
}
declare const _default: typeof LoaderIndicator;
export default _default;
//# sourceMappingURL=loader-indicator.d.ts.map