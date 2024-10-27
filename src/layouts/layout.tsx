import { FilterControls } from "../components/filters-controls/filters-controls"
import { FruitsContainer } from "../components/fruits-container/fruits-container"

export const Layout: React.FC = () => {
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-6">
                    <FilterControls></FilterControls>
                    <FruitsContainer></FruitsContainer>
                </div>
                <div className="col-md-6">
                    Col 2
                </div>
            </div>
        </div>
    )
}