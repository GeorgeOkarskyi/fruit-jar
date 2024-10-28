import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { IJarItem } from '../../store/jar/jar.types';
import { getUniqueColor } from '../../utils/chartUtils';

interface JarPieChartProps {
  fruits: IJarItem[];
}

const JarPieChart: React.FC<JarPieChartProps> = ({ fruits }) => {
  const processedData = fruits.map((fruit) => ({
    name: fruit.fruit.name,
    calories: fruit.fruit.nutritions.calories * fruit.count,
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={processedData}
        dataKey="calories"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
      >

        {fruits.map((_, index) => (
          <Cell key={`cell-${index}`} fill={getUniqueColor(index)}/>
        ))}
      </Pie>
      <Tooltip
          // contentStyle={{ backgroundColor: '#333', color: '#fff', borderRadius: 10, padding: 10 }}
          // itemStyle={{ color: '#ff6384' }}
          // formatter={(value) => `${value} kcal`}
        />
      <Legend
        // align="right"
        // verticalAlign="middle"
        // layout="vertical"
        // iconType="circle"
        // wrapperStyle={{ paddingLeft: 100, fontSize: '14px', color: '#333' }}
      />
    </PieChart>
  );
};

export default JarPieChart;