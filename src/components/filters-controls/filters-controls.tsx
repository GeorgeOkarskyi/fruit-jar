import { filtersConfig, GroupType, ViewType } from "../../configs/filters.config";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import Select from "../select/select";
import { updateActiveFilter } from "../../store/fruits/fruits.action";
import { useCallback } from "react";

export const FilterControls: React.FC= () => { 
    const dispatch = useAppDispatch()

    const onChange = useCallback(
        (label: string) => (value: string) => {
            dispatch(updateActiveFilter({ label, value: value as (ViewType | GroupType) }));
        },
        [dispatch]
    );
    
    return <div className="row">
        {filtersConfig.map(({label, options}, i) => (
            <Select key={label + i} options={options} label={label} onChange={onChange(label)} className="col-md-6 col-12 mb-3"></Select>
        ))}
    </div>
}