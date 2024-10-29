import React from 'react';
import { Fruit } from '../../entities/fruit-item';
import List from '../list/list';
import ListItem from '../list-item/list-item';
import Button from '../button/button';

interface FruitListProps {
    fruits: Fruit[];
    onClick: (fruit: Fruit) => void;
}

const FruitList: React.FC<FruitListProps> = ({ fruits, onClick}) => (
    <List>
        {fruits.map((fruit, index) =>  (
            <ListItem key={fruit.name + index} className='list-item'>
                <p>
                    {fruit.name} ({fruit.nutritions.calories} cal)
                </p>

                <Button item={fruit} onClick={onClick}></Button>
            </ListItem>
        ))}
    </List>
);

export default React.memo(FruitList);
