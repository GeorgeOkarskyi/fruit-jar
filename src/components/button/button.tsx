import './button.scss';
import { Fruit } from '../../entities/fruit-item';
import React from 'react';

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
  className,
}) => {
  return (
    <button
      className={`button ${className || ''}`}
      onClick={() => onClick(item)}
    >
      {label || '+'}
    </button>
  );
};

export default React.memo(Button);
