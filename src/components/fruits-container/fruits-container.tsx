import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { selectFruits, selectGroupBy, selectListType } from "../../store/fruits/fruits.selectors"
import { GroupType, ViewType } from "../../configs/filters.config"
import FruitListView from "./components/fruitsListView"
import FruitTableView from "./components/fruitsTableView"
import Collapsible from "../colapsible/colapsible"
import { groupFruits } from "../../utils/filtersUtils"
import { useCallback, useMemo } from "react"

export const FruitsContainer = () => {
    const fruits = useSelector((store: RootState) => selectFruits(store));
    const listType = useSelector((store: RootState) => selectListType(store));
    const groupBy = useSelector((store: RootState) => selectGroupBy(store));

    const groupedFruits = useMemo(() => groupFruits(fruits, groupBy), [fruits, groupBy]);

    const onAdd = useCallback(() => {
        //dispatch to Jar
    }, [])

    
    return <>
        {Object.entries(groupedFruits).map(([group, fruits]) => (
            <div key={group} className="mb-3 p-0">
                <Collapsible title={group} isDisabled={groupBy === GroupType.None}>
                    {listType === ViewType.List ? (
                        <FruitListView fruits={fruits} onAdd={onAdd} listType={listType}/>
                    ) : (
                        <FruitTableView fruits={fruits} onAdd={onAdd} listType={listType}/>
                    )}
                </Collapsible>
            </div>
        ))}
    </>
}