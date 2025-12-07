import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import { ChartDataPoint } from '../../types';

interface CustomBarChartProps {
  data: ChartDataPoint[];
  color: string;
  layout?: 'horizontal' | 'vertical';
  hideGrid?: boolean;
}

const CustomBarChart: React.FC<CustomBarChartProps> = ({ data, color, layout = 'horizontal', hideGrid = false }) => {
  const isVertical = layout === 'vertical';

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout={layout}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {!hideGrid && <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />}
        
        {isVertical ? (
           <>
            <XAxis type="number" stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 12 }} />
            <YAxis dataKey="name" type="category" width={90} stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 11 }} />
           </>
        ) : (
            <>
            <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 12 }} />
            <YAxis stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 12 }} />
            </>
        )}
        
        <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
        />
        <Bar dataKey="value" radius={[4, 4, 4, 4]} barSize={isVertical ? 20 : undefined}>
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill || color} />
            ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;