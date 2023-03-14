import * as React from 'react'
import cn from 'classnames'
import Icon from '@mdi/react'
import { mdiLoading } from '@mdi/js'

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

        let iconSize = 1
        switch (size) {
        case 'xl':
            iconSize = 5
            break
        case 'lg':
            iconSize = 3
            break
        case 'md':
            iconSize = 2
            break
        case 'sm':
        default:
            iconSize = 1
            break
        }

        return (
            <div className={cn('loading-screen', 'text-center', className)}>
                <div className="loading-screen-indicator">
                    { (progress === 0 || progress === undefined) ? (
                        <Icon path={mdiLoading} size={iconSize} spin={true}/>
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
