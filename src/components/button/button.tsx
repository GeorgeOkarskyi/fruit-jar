import React from 'react';
import { Fruit } from '../../types/fruit-item';

interface IButtonProps {
    onClick: (id: number) => void;
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
            className={`btn btn-sm btn-primary ${className || ''}`}
            onClick={() => onClick(item.id)}
        >
            {label || 'Add'}
        </button>
    );
};

export default React.memo(Button);
