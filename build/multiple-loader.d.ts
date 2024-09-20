import { Informations, Status } from './loader-request';
export declare class MultipleLoader implements Informations {
    protected loaders: Informations[];
    constructor(loaders?: Informations[]);
    addLoader(loader: Informations): void;
    get status(): Status;
    get errors(): string[];
    get progress(): number;
    get uploadProgress(): number;
}
