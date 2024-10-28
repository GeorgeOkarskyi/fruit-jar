import React from 'react';
import { Fruit } from '../../entities/fruit-item';
import { IJarItem } from '../../store/jar/jar.types';
import List from '../list/list';
import ListItem from '../list-item/list-item';
import Button from '../button/button';

interface JarListProps {
    fruits: IJarItem[];
    onRemove: (fruit: Fruit) => void;
    onAdd: (fruit: Fruit) => void;
}

const JarList: React.FC<JarListProps> = ({ fruits, onRemove, onAdd }) => {    
    return (
        <List className={'jar-list'}>
            {fruits.map(({fruit, count}, index) =>  (
                <ListItem key={fruit.name + index}>
                    <span>
                        {fruit.name} ({fruit.nutritions.calories} cal)
                    </span>
                    <span> Count {count}</span>
                    <div>
                        <Button item={fruit} onClick={onAdd} className='m-2'></Button>
                        <Button className='btn-outline-danger' item={fruit} onClick={onRemove} label='Remove'></Button>
                    </div>

                </ListItem>
            ))}
        </List>
    )
};

export default React.memo(JarList);
