import * as React from 'react'
import cn from 'classnames'

interface Props {
    progress?: number
    className?: string | Record<string, unknown>
    size?: 'sm' | 'md' | 'lg' | 'xl'
}

interface State {

}

export default class LoadingScreen extends React.Component<Props, State> {
    render () {
        const { progress, className, size, ...otherProps } = this.props

        let classSize = 'mdi-18px'
        switch (size) {
        case 'xl':
            classSize = 'mdi-48px'
            break
        case 'lg':
            classSize = 'mdi-36px'
            break
        case 'md':
            classSize = 'mdi-24px'
            break
        case 'sm':
        default:
            classSize = 'mdi-18px'
            break
        }

        return (
            <div className={cn('loading-screen', 'text-center', className)}>
                <div className="loading-screen-indicator">
                    { (progress === 0 || progress === undefined) ? (
                        <i className={cn('mdi mdi-loading mdi-spin', classSize)} aria-hidden="true"></i>
                    ) : (
                        <div className="progress" style={{ height: '1px' }}>
                            <div className={cn('progress-bar', 'bg-primary')} role="progressbar" style={{ width: progress + '%' }}></div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
