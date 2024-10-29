import React, { useCallback } from "react";

import { GroupType, ViewType } from "../../configs/filters.config";
import { selectGroupBy, selectGroupedFruits, selectListType } from "../../store/fruits/fruits.selectors";
import Button from "../button/button";
import Collapsible from "../colapsible/colapsible";
import { Fruit } from "../../entities/fruit-item";
import FruitList from "../fruits-list/fruits-list";
import FruitTable from "../fruits-table/fruits-table";
import { addFruitToJar } from "../../store/jar/jar.actions";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import './fruits-container.scss';

export const FruitsContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const listType = useAppSelector(store => selectListType(store));
  const groupBy = useAppSelector(store => selectGroupBy(store));
  const groupedFruits = useAppSelector(store => selectGroupedFruits(store));

  const onClickHandler = useCallback((fruit: Fruit) => {
    dispatch(addFruitToJar({fruit}));
  }, [dispatch]);

  const headerElement = (fruits: Fruit[]): React.ReactNode => {
    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
        
      fruits.forEach((fruit) => {
        dispatch(addFruitToJar({fruit}));
      });
    };

    return <Button onClick={clickHandler} label="Add group to the Jar" className="add-group-button"/>;
  };

  return (
    <div className="scrollable">
      {Object.entries(groupedFruits).map(([group, fruits]) => (
        <Collapsible 
          key={group} 
          title={group} 
          isDisabled={groupBy === GroupType.None} 
          className={`${listType !== ViewType.List && 'border-bottom-0'}`}
          headerElement={headerElement(fruits)}
        >
          {listType === ViewType.List ? (
            <FruitList fruits={fruits} onClick={onClickHandler}/>
          ) : (
            <FruitTable fruits={fruits} onClick={onClickHandler}/>
          )}
        </Collapsible>
      ))}
    </div>
  );
};