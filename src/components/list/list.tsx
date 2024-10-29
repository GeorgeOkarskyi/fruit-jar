import React from 'react';

interface ListProps {
    children: React.ReactNode;
    className?: string;
}

const List: React.FC<ListProps> = ({ children, className }) => (
  <ul className={`p-0 list-group ${className || ''}`} role="list">
    {children}
  </ul>
);

export default React.memo(List);
