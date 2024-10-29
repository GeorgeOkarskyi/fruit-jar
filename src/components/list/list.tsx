import React from 'react';

interface ListProps {
    children: React.ReactNode;
    className?: string;
}

const List: React.FC<ListProps> = ({ children, className }) => (
    <ul className={`p-0 ${className}`}>
        {children}
    </ul>
);

export default React.memo(List);
