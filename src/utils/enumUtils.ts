import { GroupType, ViewType } from '../configs/filters.config';
import { Option } from '../entities/option';

export function enumToOptions<T extends string>(enumObj: { [key: string]: T }): Option[] {
  return Object.values(enumObj).map((value) => new Option({ label: value, value: value as (ViewType | GroupType) }));
}