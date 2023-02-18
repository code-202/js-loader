import * as React from 'react'
import { observer } from 'mobx-react'
import * as LoaderRequest from './loader-request'
import LoadingScreen from './loading-screen'
import cn from 'classnames'
import { Manager, ContentStrategy } from './manager'

interface Props {
    loadingInformation: LoaderRequest.Informations,
    waiting?: string | false
    pending?: string | false
    error?: string | false
    canceled?: string | false
    done?: string | false
    contentStrategy?: ContentStrategy
}

interface State {

}

class LoaderIndicator extends React.Component<Props, State> {

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
        if (this.props.waiting === false) {
            return null
        }

        return (
            <i className={cn(this.props.waiting ? this.props.waiting : 'mdi mdi-loading mdi-spin')} aria-hidden="true"></i>
        )
    }

    renderPending () {
        if (this.props.pending === false) {
            return null
        }

        return (
            <i className={cn(this.props.pending ? this.props.pending : 'mdi mdi-loading mdi-spin text-primary')} aria-hidden="true"></i>
        )
    }

    renderError () {
        if (this.props.error === false) {
            return null
        }

        return (
            <i className={cn(this.props.error ? this.props.error : 'mdi mdi-exclamation-thick text-danger')} aria-hidden="true"></i>
        )
    }

    renderCanceled () {
        if (this.props.canceled === false) {
            return null
        }

        return (
            <i className={cn(this.props.canceled ? this.props.canceled : 'mdi mdi-close text-warning')} aria-hidden="true"></i>
        )
    }

    renderDone () {
        if (this.props.done === false) {
            return null
        }

        return (
            <i className={cn(this.props.done ? this.props.done : 'mdi mdi-check text-success')} aria-hidden="true"></i>
        )
    }
}

export default observer(LoaderIndicator)
