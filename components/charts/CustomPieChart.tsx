import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ChartDataPoint } from '../../types';

interface CustomPieChartProps {
  data: ChartDataPoint[];
  isDoughnut?: boolean;
}

const CustomPieChart: React.FC<CustomPieChartProps> = ({ data, isDoughnut = false }) => {
  const innerRadius = isDoughnut ? '60%' : '0%';
  const outerRadius = '80%';

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={isDoughnut ? 5 : 0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill || '#8884d8'} stroke="rgba(255,255,255,0.1)" />
          ))}
        </Pie>
        <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
        />
        <Legend verticalAlign="bottom" height={36} iconType="circle"/>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;