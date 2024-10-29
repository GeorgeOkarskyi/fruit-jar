import React, { useMemo } from 'react';

import Button from '../button/button';
import { Fruit } from '../../entities/fruit-item';
import Table from '../table/table';
import TableItem from '../table-item/table-item';

interface FruitTableProps {
    fruits: Fruit[];
    onClick: (fruit: Fruit) => void;
}

const TABLE_HEADERS = [
  { key: 'name', label: 'Name' },
  { key: 'family', label: 'Family' },
  { key: 'order', label: 'Order' },
  { key: 'genus', label: 'Genus' },
  { key: 'calories', label: 'Calories' },
  { key: 'action', label: 'Action' },
];

const FruitTable: React.FC<FruitTableProps> = ({ fruits, onClick }) => {
  const tableRows = useMemo(
    () => 
      fruits.map((fruit) => {
        const { id, name, family, order, genus, nutritions: { calories } } = fruit;

        return (
          <TableItem
            key={id}
            tableData={[
              name,
              family,
              order,
              genus,
              calories,
              <Button 
                key={`button-${fruit.id}`}
                onClick={() => onClick(fruit)} 
              />,
            ]}
          />
        );
      }),
    [fruits, onClick],
  );

  return (
    <Table tableHeaders={TABLE_HEADERS.map(header => header.label)} className='p-3 m-0'>
      {tableRows}
    </Table>
  );
};

export default React.memo(FruitTable);
