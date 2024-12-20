import React from 'react';

import Button from '../button/button';
import { Fruit } from '../../entities/fruit-item';
import List from '../list/list';
import ListItem from '../list-item/list-item';

interface FruitListProps {
    fruits: Fruit[];
    onClick: (item: Fruit) => void;
}

const FruitList: React.FC<FruitListProps> = ({ fruits, onClick}) => (
  <List>
    {fruits.map((fruit, index) =>  (
      <ListItem key={fruit.name + index} className='list-item'>
        <p>
          {fruit.name} ({fruit.nutritions.calories} cal)
        </p>
        <Button
          onClick={() => onClick(fruit)}
        />
      </ListItem>
    ))}
  </List>
);

export default React.memo(FruitList);
