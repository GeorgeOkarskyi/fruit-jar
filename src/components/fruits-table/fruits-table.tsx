import React, { useMemo } from 'react';
import { Fruit } from '../../entities/fruit-item';
import Table from '../table/table';
import TableItem from '../table-item/table-item';
import Button from '../button/button';

interface FruitTableProps {
    fruits: Fruit[];
    onClick: (fruit: Fruit) => void;
}

const TABLE_HEADERS: string[] = ['Name', 'Family', 'Order', 'Genus', 'Calories', 'Action'];

const FruitTable: React.FC<FruitTableProps> = ({ fruits, onClick }) => {
    const tableRows = useMemo(() => 
        fruits.map((fruit) => {
            const { name, family, order, genus, nutritions: { calories } } = fruit;

            return (
                <TableItem
                    key={fruit.id}
                    tableData={[
                        name,
                        family,
                        order,
                        genus,
                        calories,
                        <Button key={`button-${fruit.id}`} item={fruit} onClick={() => onClick(fruit)} />
                    ]}
                />
            );
        }),
        [fruits, onClick]
    );

    return (
        <Table tableHeaders={TABLE_HEADERS}>
            {tableRows}
        </Table>
    )
};

export default React.memo(FruitTable);
