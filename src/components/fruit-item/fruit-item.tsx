import React from "react";
import { ViewType } from "../../configs/filters.config";
import { Fruit } from "../../types/fruit-item"
import Button from "../button/button";

interface IFruitsItemProps{ 
    item: Fruit
    onAdd: (id: number) => void;
    type: ViewType
};

const FruitsItem: React.FC<IFruitsItemProps> = ({item, onAdd, type}) => {
    return (
        <>
            {type === ViewType.List ? (
                <li className="d-flex justify-content-between align-items-center border-bottom p-2">
                    <span>
                        {item.name} ({item.nutritions.calories} cal)
                    </span>

                    <Button item={item} onClick={onAdd}></Button>
                </li>
            ) : (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.family}</td>
                    <td>{item.order}</td>
                    <td>{item.genus}</td>
                    <td>{item.nutritions.calories}</td>
                    <td>
                        <Button item={item} onClick={onAdd}></Button>
                    </td>
                </tr>
            )}
        </>
    );
}

export default React.memo(FruitsItem)