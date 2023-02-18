import * as React from 'react';
interface Props {
    progress?: number;
    className?: string | Record<string, unknown>;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}
interface State {
}
export default class LoadingScreen extends React.Component<Props, State> {
    render(): JSX.Element;
}
export {};
