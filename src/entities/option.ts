import { GroupType, ViewType } from "../configs/filters.config";

interface IOptionParams {
    label: string;
    value: ViewType | GroupType;
}

export class Option {
    public label: string;
    public value: ViewType | GroupType;

    constructor({ label, value }: IOptionParams) {
        this.label = label;
        this.value = value
    }
}