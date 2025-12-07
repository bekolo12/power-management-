import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartDataPoint } from '../../types';

interface StackedBarChartProps {
  data: ChartDataPoint[];
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 10 }} interval={0} />
        <YAxis stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 12 }} />
        <Tooltip 
             contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
             cursor={{ fill: 'rgba(255,255,255,0.05)' }}
        />
        <Legend verticalAlign="top" height={36}/>
        <Bar dataKey="value" name="Preventive" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} />
        <Bar dataKey="value2" name="Corrective" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;