import React from 'react';

import './jar-container.scss';
import { addFruitToJar, removeFruitFromJar } from "../../store/jar/jar.actions";
import { selectJarCalories, selectJarItems } from "../../store/jar/jar.selectors";
import { Fruit } from "../../entities/fruit-item";
import JarList from '../jar-list/jar-list';
import JarPieChart from "../jar-pie-chart/jar-pie-chart";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useCallback } from "react";

export const JarContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const jarItems = useAppSelector((store) => selectJarItems(store));
  const jarCalories = useAppSelector((store) => selectJarCalories(store));

  const onRemoveHandler = useCallback((fruit: Fruit) => {
    dispatch(removeFruitFromJar({ fruit }));
  }, [dispatch]);

  const onAddHandler = useCallback((fruit: Fruit) => {
    dispatch(addFruitToJar({ fruit }));
  }, [dispatch]);

  return (
    <>
      <h2 className="text-center mt-2" aria-label="Jar container title">Jar</h2>
      <div className="container pb-5 jar-container">
        {!!jarCalories && (
          <div className="jar-calories"><h4>{jarCalories} cal.</h4></div>
        )}
        <div className="row h-50 jar-chart-container">
          <JarPieChart fruits={jarItems}/>
        </div>
        <div className="scrollable row h-50 mx-5 d-flex align-items-end mt-3">
          <JarList fruits={jarItems} onRemove={onRemoveHandler} onAdd={onAddHandler}/>
        </div>
      </div>
    </>
  );
};
