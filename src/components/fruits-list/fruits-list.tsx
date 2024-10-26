import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { selectFruits } from "../../store/fruits/fruits.selectors"
 
export const FruitsList = () => {
    const fruits = useSelector((store: RootState) => selectFruits(store));
    
    return <>
        {fruits && fruits.map((fruit, index) => (
            <div key={index}>{fruit.name}</div>
        ))}
    </>
}