import React from 'react';
import { Fruit } from '../../entities/fruit-item';
import { ViewType } from '../../configs/filters.config';

interface JarListProps {
    fruits: Fruit[];
    onClick: (fruit: Fruit) => void;
    listType: ViewType;
}

const JarList: React.FC<JarListProps> = ({ fruits, onClick, listType }) => (

);

export default React.memo(JarList);
