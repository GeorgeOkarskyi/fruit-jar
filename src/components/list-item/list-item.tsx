import React from "react";

interface IListItemProps{ 
    children: React.ReactNode;
    className?: string;
};

const ListItem: React.FC<IListItemProps> = ({children, className }) => (
    <li className={`d-flex justify-content-between align-items-center list-group-item 
    list-group-item-action shadow-sm border m-1 rounded px-3 w-auto ${className || ''}`}>
        {children}
    </li>
);

export default React.memo(ListItem)