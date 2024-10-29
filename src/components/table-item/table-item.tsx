import React from "react";
import './table-item.scss'

interface ITableItemProps{
    className?: string;
    tableData: (string | React.ReactNode)[];
};

const TableItem: React.FC<ITableItemProps> = ({ className, tableData }) => (
    <tr className={`table-light ${className || ''}`}>
        {tableData.map((tableDataItem, index) => <td key={`td-${index}`} className="p-2 table-item-text text-ellipsis align-middle"><p>{tableDataItem}</p></td>)}
    </tr>
);

export default React.memo(TableItem)