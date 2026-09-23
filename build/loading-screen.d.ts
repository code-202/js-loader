import * as React from 'react';
export type Size = 'sm' | 'md' | 'lg' | 'xl';
interface Props {
    progress?: number;
    className?: string | Record<string, unknown>;
    size?: Size;
}
interface State {
}
export default class LoadingScreen extends React.Component<Props, State> {
    render(): React.JSX.Element;
    protected determineIconSize(size?: Size): number;
}
export {};
//# sourceMappingURL=loading-screen.d.ts.map