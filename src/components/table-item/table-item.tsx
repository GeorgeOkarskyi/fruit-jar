import React from "react";

interface ITableItemProps{
    className?: string;
    tableData: (string | React.ReactNode)[];
};

const TableItem: React.FC<ITableItemProps> = ({ className, tableData }) => (
    <tr className={`table-light ${className}`}>
        {tableData.map((tableDataItem, index) => <td key={`td-${index}`} className="p-3">{tableDataItem}</td>)}
    </tr>
);

export default React.memo(TableItem)