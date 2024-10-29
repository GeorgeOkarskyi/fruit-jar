import React from 'react';

import '../table-item/table-item.scss';

interface TableProps {
    children: React.ReactNode;
    className?: string;
    tableHeaders: string[]
}

const Table: React.FC<TableProps> = ({ children, className, tableHeaders }) => (
  <div className='table-responsive'>
    <table className={`table table-hover ${className || ''}`}>
      <thead >
        <tr>
          {tableHeaders.map((header, index) => (<th className='text-ellipsis' key={header+index}><p>{header}</p></th>))}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  </div>
);

export default React.memo(Table);
