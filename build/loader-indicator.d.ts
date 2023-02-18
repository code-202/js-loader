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
    render(): JSX.Element | null;
    renderWaiting(): JSX.Element | null;
    renderPending(): JSX.Element | null;
    renderError(): JSX.Element | null;
    renderCanceled(): JSX.Element | null;
    renderDone(): JSX.Element | null;
}
declare const _default: typeof LoaderIndicator;
export default _default;
