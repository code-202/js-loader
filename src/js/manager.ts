export class LoaderManager {
    protected _contentStrategy: ContentStrategy = 'wait'

    public get contentStrategy (): ContentStrategy {
        return this._contentStrategy
    }

    public set contentStrategy (v: ContentStrategy) {
        this._contentStrategy = v
    }
}

export const Manager = new LoaderManager()

export type ContentStrategy = 'wait' | 'show'
