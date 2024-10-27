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
    <List className={'fruits-list'}>
        {fruits.map((fruit, index) =>  (
            <ListItem key={fruit.name + index}>
                <span>
                    {fruit.name} ({fruit.nutritions.calories} cal)
                </span>

                <Button item={fruit} onClick={onClick}></Button>
            </ListItem>
        ))}
    </List>
);

export default React.memo(FruitList);
