import { selectGroupBy, selectGroupedFruits, selectListType } from "../../store/fruits/fruits.selectors"
import { GroupType, ViewType } from "../../configs/filters.config"
import FruitList from "../fruits-list/fruits-list"
import FruitTable from "../fruits-table/fruits-table";
import Collapsible from "../colapsible/colapsible"
import { useCallback } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { Fruit } from "../../entities/fruit-item"
import { addFruitToJar } from "../../store/jar/jar.actions"

export const FruitsContainer = () => {
    const dispatch = useAppDispatch();
    const listType = useAppSelector(store => selectListType(store));
    const groupBy = useAppSelector(store => selectGroupBy(store));
    const groupedFruits = useAppSelector(store => selectGroupedFruits(store));

    const onClickHandler = useCallback((fruit: Fruit) => {
        dispatch(addFruitToJar({fruit}))
    }, [dispatch])

    
    return <>
        {Object.entries(groupedFruits).map(([group, fruits]) => (
            <div key={group} className="mb-3 p-0">
                <Collapsible title={group} isDisabled={groupBy === GroupType.None}>
                    {listType === ViewType.List ? (
                        <FruitList fruits={fruits} onClick={onClickHandler}/>
                    ) : (
                        <FruitTable fruits={fruits} onClick={onClickHandler}/>
                    )}
                </Collapsible>
            </div>
        ))}
    </>
}