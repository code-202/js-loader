import * as React from 'react'
import { observer } from 'mobx-react'
import * as LoaderRequest from './loader-request'
import LoadingScreen from './loading-screen'
import cn from 'classnames'
import { Manager, ContentStrategy } from './manager'

interface Props extends React.PropsWithChildren {
    loadingInformation: LoaderRequest.Informations,
    translateError?: (message: string) => string
    loaderSize?: 'sm' | 'md' | 'lg' | 'xl'
    loadingClassname?: string
    loadingScreen?: React.ComponentClass
    contentStrategy?: ContentStrategy
}

interface State {

}

class Loader extends React.Component<Props, State> {

    constructor (props: Props) {
        super(props)
    }

    render () {
        if (this.props.contentStrategy === 'show' || (!this.props.contentStrategy && Manager.contentStrategy === 'show')) {
            return this.renderDone()
        }

        switch (this.props.loadingInformation.status) {
        case 'waiting':
            return this.renderWaiting()
        case 'pending':
            return this.renderPending()
        case 'error':
            return this.renderError()
        case 'canceled':
            return this.renderCanceled()
        case 'done':
            return this.renderDone()
        }

        return this.renderWaiting()
    }

    renderWaiting () {
        return (
            <></>
        )
    }

    renderPending () {
        if (this.props.loadingScreen) {
            return React.createElement(this.props.loadingScreen)
        }
        return (
            <LoadingScreen progress={this.props.loadingInformation.progress} size={this.props.loaderSize} className={this.props.loadingClassname}/>
        )
    }

    renderError () {
        let messages: any[] = this.props.loadingInformation.errors

        if (this.props.translateError) {
            messages = messages.map((message: string, index: number) => {
                return <>{this.props.translateError ? this.props.translateError(message) : message}</>
            })
        }

        return (
            <div className={cn('alert', 'alert-danger')}>
                { messages }
            </div>
        )
    }

    renderCanceled () {
        return (
            <></>
        )
    }

    renderDone () {
        return (
            <>
                {this.props.children}
            </>
        )
    }
}

export default observer(Loader)
