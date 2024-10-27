import React from "react";

interface IListItemProps{ 
    children: React.ReactNode;
    className?: string;
};

const ListItem: React.FC<IListItemProps> = ({children, className }) => (
    <li className={`d-flex justify-content-between align-items-center border-bottom p-2 ${className}`}>
        {children}
    </li>
);

export default React.memo(ListItem)