import { useAppSelector } from "../../hooks/useAppSelector"
import { selectJarCalories, selectJarItems } from "../../store/jar/jar.selectors"

export const JarContainer: React.FC = () => {
    const jarItems = useAppSelector((store) => selectJarItems(store));
    const jarCalories = useAppSelector((store) => selectJarCalories(store));

    return <>

        {/* <FruitList fruits={jarItems} /> */}
    </>
}
