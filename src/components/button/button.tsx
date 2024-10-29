import './button.scss';
import React from 'react';

interface IButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    label?: string;
}

const Button: React.FC<IButtonProps> = ({  
  onClick,
  label = '+',
  className = '',
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default React.memo(Button);
