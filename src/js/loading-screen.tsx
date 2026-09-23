import * as React from 'react'
import cn from 'classnames'
import Icon from '@mdi/react'
import { mdiLoading } from '@mdi/js'

export type Size = 'sm' | 'md' | 'lg' | 'xl'

interface Props {
    progress?: number
    className?: string | Record<string, unknown>
    size?: Size
}

interface State {

}

export default class LoadingScreen extends React.Component<Props, State> {
    render() {
        const { progress, className, size, ...otherProps } = this.props

        return (
            <div className={cn('loading-screen', 'text-center', className)}>
                <div className="loading-screen-indicator">
                    {(progress === 0 || progress === undefined) ? (
                        <Icon path={mdiLoading} size={this.determineIconSize(size)} spin={true} />
                    ) : (
                        <div className="progress" style={{ height: '1px' }}>
                            <div className={cn('progress-bar', 'bg-primary')} role="progressbar" style={{ width: progress + '%' }}></div>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    protected determineIconSize(size?: Size): number {
        switch (size) {
            case 'xl':
                return 5
            case 'lg':
                return 3
            case 'md':
                return 2
            case 'sm':
            default:
                return 1
        }
    }
}
