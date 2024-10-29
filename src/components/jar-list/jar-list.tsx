import React from 'react';

import './jar-list.scss';
import Button from '../button/button';
import { Fruit } from '../../entities/fruit-item';
import { IJarItem } from '../../store/jar/jar.types';
import List from '../list/list';
import ListItem from '../list-item/list-item';

interface JarListProps {
    fruits: IJarItem[];
    onRemove: (fruit: Fruit) => void;
    onAdd: (fruit: Fruit) => void;
};

const JarList: React.FC<JarListProps> = ({ fruits, onRemove, onAdd }) => {    
  return (
    <List className='jar-list'>
      {fruits.map(({fruit, count}, index) =>  (
        <ListItem key={fruit.id + index} className='bg-transparent'>
          <p className='list-item-text text-ellipsis'>
            {fruit.name} ({fruit.nutritions.calories} cal)
          </p>
          <div>
            <Button 
              onClick={() => onAdd(fruit)} 
              className='me-2'
            />
            <span>{count}</span>
            <Button 
              className='ms-2' 
              onClick={() => onRemove(fruit)} 
              label='-'
            />
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default React.memo(JarList);
