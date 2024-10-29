import { useCallback } from "react";
import { useAppSelector } from "../../hooks/useAppSelector"
import { selectJarCalories, selectJarItems } from "../../store/jar/jar.selectors"
import JarList from '../jar-list/jar-list';
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Fruit } from "../../entities/fruit-item";
import { addFruitToJar, removeFruitFromJar } from "../../store/jar/jar.actions";
import JarPieChart from "../jar-pie-chart/jar-pie-chart";
import './jar-container.scss'

export const JarContainer: React.FC = () => {
    const dispatch = useAppDispatch()
    const jarItems = useAppSelector((store) => selectJarItems(store));
    const jarCalories = useAppSelector((store) => selectJarCalories(store));

    const onRemoveHandler = useCallback((fruit: Fruit) => {
        dispatch(removeFruitFromJar({ fruit }))
    }, [dispatch]);

    const onAddHandler = useCallback((fruit: Fruit) => {
        dispatch(addFruitToJar({ fruit }))
    }, [dispatch]);

    return <>
        <h2 className="text-center mt-2">Jar</h2>
        <div className="container pb-5 jar-container">
            {!!jarCalories && (<div className="jar-calories"><h4>{jarCalories} cal.</h4></div>)}
            <div className="row h-50 jar-chart-container">
                <JarPieChart fruits={jarItems}/>
            </div>
            <div className="scrollable row h-50 mx-5 d-flex align-items-end">
                <JarList fruits={jarItems} onRemove={onRemoveHandler} onAdd={onAddHandler}/>
            </div>
        </div>
    </>
}
