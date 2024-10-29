import React from 'react';

interface TableProps {
    children: React.ReactNode;
    className?: string;
    tableHeaders: string[]
}

const Table: React.FC<TableProps> = ({ children, className, tableHeaders }) => (
    <table className={`table ${className}`}>
        <thead>
            <tr>
                {tableHeaders.map((header, index) => (<th key={header+index}>{header}</th>))}
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
);

export default React.memo(Table);
