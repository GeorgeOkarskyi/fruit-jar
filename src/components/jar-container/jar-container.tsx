import { useCallback } from "react";
import { useAppSelector } from "../../hooks/useAppSelector"
import { selectJarCalories, selectJarItems } from "../../store/jar/jar.selectors"
import JarList from '../jar-list/jar-list';
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Fruit } from "../../entities/fruit-item";
import { addFruitToJar, removeFruitFromJar } from "../../store/jar/jar.actions";
import JarPieChart from "../jar-pie-chart/jar-pie-chart";

export const JarContainer: React.FC = () => {
    const dispatch = useAppDispatch()
    const jarItems = useAppSelector((store) => selectJarItems(store));
    const jarCalories = useAppSelector((store) => selectJarCalories(store));

    const onRemoveHandler = useCallback((fruit: Fruit) => {
        dispatch(removeFruitFromJar({ fruit }))
    }, [dispatch])

    const onAddHandler = useCallback((fruit: Fruit) => {
        dispatch(addFruitToJar({ fruit }))
    }, [dispatch])

    return <div className="jar-container">
        <h3>Calories: {jarCalories}</h3>
        <JarList fruits={jarItems} onRemove={onRemoveHandler} onAdd={onAddHandler}/>
        <JarPieChart fruits={jarItems}/>
    </div>
}
