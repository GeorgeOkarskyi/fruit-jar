import { GroupType, ViewType } from '../configs/filters.config';
import { Option } from '../types/option';

export function enumToOptions(enumObj: { [key: string]: string }): Option[] {
    return Object.values(enumObj).map((value) => new Option({ label: value, value: value as (ViewType | GroupType) }));
}