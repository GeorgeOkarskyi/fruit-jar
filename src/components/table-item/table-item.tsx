import React from "react";
import './table-item.scss'

interface ITableItemProps{
    className?: string;
    tableData: (string | React.ReactNode)[];
};

const TableItem: React.FC<ITableItemProps> = ({ className, tableData }) => (
    <tr className={`table-light ${className}`}>
        {tableData.map((tableDataItem, index) => <td key={`td-${index}`} className="p-2 text-ellipsis align-middle">{tableDataItem}</td>)}
    </tr>
);

export default React.memo(TableItem)