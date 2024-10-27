import React from 'react';
import { ViewType } from '../../../configs/filters.config';
import { Fruit } from '../../../types/fruit-item';
import FruitsItem from '../../fruit-item/fruit-item';

interface FruitTableViewProps {
    fruits: Fruit[];
    onAdd: (id: number) => void;
    listType: ViewType;
}

const FruitTableView: React.FC<FruitTableViewProps> = ({ fruits, onAdd, listType }) => (
    <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Family</th>
                <th>Order</th>
                <th>Genus</th>
                <th>Calories</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {fruits.map(fruit => (
                <FruitsItem key={fruit.id} item={fruit} onAdd={onAdd} type={listType} />
            ))}
        </tbody>
    </table>
);

export default React.memo(FruitTableView);
