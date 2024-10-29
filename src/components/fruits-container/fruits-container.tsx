import { GroupType, ViewType } from "../../configs/filters.config";
import { selectGroupBy, selectGroupedFruits, selectListType } from "../../store/fruits/fruits.selectors";
import Collapsible from "../colapsible/colapsible";
import { Fruit } from "../../entities/fruit-item";
import FruitList from "../fruits-list/fruits-list";
import FruitTable from "../fruits-table/fruits-table";
import { addFruitToJar } from "../../store/jar/jar.actions";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useCallback } from "react";

export const FruitsContainer = () => {
  const dispatch = useAppDispatch();
  const listType = useAppSelector(store => selectListType(store));
  const groupBy = useAppSelector(store => selectGroupBy(store));
  const groupedFruits = useAppSelector(store => selectGroupedFruits(store));

  const onClickHandler = useCallback((fruit: Fruit) => {
    dispatch(addFruitToJar({fruit}));
  }, [dispatch]);

  return <div className="scrollable">
    {Object.entries(groupedFruits).map(([group, fruits]) => (
      <Collapsible key={group} title={group} isDisabled={groupBy === GroupType.None} className={`${listType !== ViewType.List && 'border-bottom-0'}`}>
        {listType === ViewType.List ? (
          <FruitList fruits={fruits} onClick={onClickHandler}/>
        ) : (
          <FruitTable fruits={fruits} onClick={onClickHandler}/>
        )}
      </Collapsible>
    ))}
  </div>;
};