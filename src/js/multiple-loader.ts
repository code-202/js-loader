import { computed, makeAutoObservable } from 'mobx';
import { Informations, Status } from './loader-request';

export class MultipleLoader implements Informations {
    protected loaders: Informations[]

    constructor (loaders: Informations[] = [])
    {
        this.loaders = loaders

        makeAutoObservable({
            status: computed,
            errors: computed,
            progress: computed,
            uploadProgress: computed,
        })
    }

    public addLoader(loader: Informations): void {
        this.loaders.push(loader)
    }

    get status(): Status {
        for (const loader of this.loaders) {
            if (loader.status == 'error') {
                return 'error'
            }
        }

        for (const loader of this.loaders) {
            if (loader.status == 'canceled') {
                return 'canceled'
            }
        }

        for (const loader of this.loaders) {
            if (loader.status == 'pending') {
                return 'pending'
            }
        }

        for (const loader of this.loaders) {
            if (loader.status == 'waiting') {
                return 'waiting'
            }
        }

        return 'done'
    }

    get errors(): string[] {
        const e: string[] = []

        for (const loader of this.loaders) {
            e.concat(...loader.errors)
        }

        return e
    }

    get progress(): number {
        if (!this.loaders.length) {
            return 0;
        }

        let p: number = 0

        for (const loader of this.loaders) {
            p += loader.progress
        }

        p /= this.loaders.length

        return p
    }

    get uploadProgress(): number {
        if (!this.loaders.length) {
            return 0;
        }

        let p: number = 0

        for (const loader of this.loaders) {
            p += loader.uploadProgress
        }

        p /= this.loaders.length

        return p
    }
}