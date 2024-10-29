import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { IJarItem } from '../../store/jar/jar.types';
import { getUniqueColor } from '../../utils/chartUtils';

interface JarPieChartProps {
  fruits: IJarItem[];
}

const JarPieChart: React.FC<JarPieChartProps> = ({ fruits }) => {
  const processedData = useMemo(() => fruits.map((fruit) => ({
    name: fruit.fruit.name,
    calories: fruit.fruit.nutritions.calories * fruit.count,
  })), [fruits]) 

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart>
        <Pie
          data={processedData}
          dataKey="calories"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {fruits.map((_, index) => (
            <Cell key={`cell-${index}`} fill={getUniqueColor(index)}/>
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default JarPieChart;