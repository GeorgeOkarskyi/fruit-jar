import React from 'react';
import { ViewType } from '../../../configs/filters.config';
import { Fruit } from '../../../types/fruit-item';
import FruitsItem  from '../../fruit-item/fruit-item';

interface FruitListViewProps {
    fruits: Fruit[];
    onAdd: (id: number) => void;
    listType: ViewType;
}

const FruitListView: React.FC<FruitListViewProps> = ({ fruits, onAdd, listType }) => (
    <ul className='p-0'>
        {fruits.map((fruit, index) => (
            <FruitsItem key={fruit.name + index} item={fruit} onAdd={onAdd} type={listType} />
        ))}
    </ul>
);

export default React.memo(FruitListView);
