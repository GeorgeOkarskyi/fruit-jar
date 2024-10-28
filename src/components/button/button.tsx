import React from 'react';
import { Fruit } from '../../entities/fruit-item';

interface IButtonProps {
    onClick: (fruit: Fruit) => void;
    item: Fruit;
    className?: string;
    label?: string;
}

const Button: React.FC<IButtonProps> = ({  
    onClick,
    item,
    label,
    className
}) => {
    return (
        <button
            className={`btn btn-outline-primary ${className || ''}`}
            onClick={() => onClick(item)}
        >
            {label || 'Add'}
        </button>
    );
};

export default React.memo(Button);
