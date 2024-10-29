import React, { useMemo } from 'react';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { IJarItem } from '../../store/jar/jar.types';
import { getUniqueColor } from '../../utils/chartUtils';

interface JarPieChartProps {
  fruits: IJarItem[];
}

const JarPieChart: React.FC<JarPieChartProps> = ({ fruits }) => {
  const processedData: {name: string, calories: number}[] = useMemo(
    () => 
      fruits.map(({fruit, count}) => ({
        name: fruit.name,
        calories: fruit.nutritions.calories * count,
      })), [fruits]); 

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart aria-label="Fruit calorie distribution pie chart">
        <Pie
          data={processedData}
          dataKey="calories"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {fruits.map(({fruit}, index) => (
            <Cell 
              key={`cell-${fruit.name}`} 
              fill={getUniqueColor(index)} 
              aria-label={`${fruit.name}: ${fruit.nutritions.calories} calories`}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default JarPieChart;