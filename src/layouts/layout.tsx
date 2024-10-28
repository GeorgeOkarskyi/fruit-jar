import { FilterControls } from "../components/filters-controls/filters-controls"
import { FruitsContainer } from "../components/fruits-container/fruits-container"
import { JarContainer } from "../components/jar-container/jar-container"

export const Layout: React.FC = () => {
    return (
        <div className="container vh-100 p-3">
            <div className="row h-100">
                <div className="col-lg-6 h-100 d-grid">
                    <FilterControls></FilterControls>
                    <FruitsContainer></FruitsContainer>
                </div>
                <div className="col-lg-6 h-100">
                    <JarContainer/>
                </div>
            </div>
        </div>
    )
}