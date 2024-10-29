import { Option } from '../entities/option';
import { enumToOptions } from '../utils/enumUtils';

export enum ViewType {
    List = 'List',
    Table = 'Table'
}

export enum GroupType {
    None = 'None',
    Family = 'Family',
    Order = 'Order',
    Genus = 'Genus'
}

export enum FilterType {
    Select = 'Select'
}

interface iFiltersConfig {
    type: FilterType,
    label: string,
    options: Option[]
}

export enum Filters {
    Group = 'Group by:',
    View = 'View:'
}

export const filtersConfig: iFiltersConfig[] = [
  {
    type: FilterType.Select,
    label: Filters.Group,
    options: enumToOptions(GroupType),
  },
  {
    type: FilterType.Select,
    label: Filters.View,
    options: enumToOptions(ViewType),
  },
];