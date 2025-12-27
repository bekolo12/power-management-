import React from 'react';
import GlassCard from './GlassCard';
import { periodGroups, getDashboardData } from '../constants';
import CustomLineChart from './charts/CustomLineChart';

const SectionCensus: React.FC = () => {
  // Extract month options from constants
  const monthOptions = periodGroups.find(g => g.label === 'Months')?.options || [];
  
  // Prepare data for the census table and trend chart
  const censusData = monthOptions.map(opt => {
    const data = getDashboardData(opt.id);
    return {
      month: opt.label,
      count: data.metrics.teamCount
    };
  });

  const chartData = censusData.map(d => ({
    name: d.month.split(' ')[0], // Just the month name for the axis
    value: d.count
  }));

  return (
    <div className="animate-fade-in space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Census Table */}
        <GlassCard className="p-6 lg:col-span-1">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
            <span className="text-indigo-400">📅</span> 2025 Team Census
          </h3>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="py-4 px-6 text-gray-400 font-medium">Month</th>
                  <th className="py-4 px-6 text-gray-400 font-medium text-right">Team Members</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {censusData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors group">
                    <td className="py-4 px-6 text-gray-200 font-medium group-hover:text-blue-400">{row.month}</td>
                    <td className="py-4 px-6 text-right">
                      <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-bold border border-blue-500/20">
                        {row.count}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Growth Trend Chart */}
        <GlassCard className="p-6 lg:col-span-2">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
            <span className="text-emerald-400">📈</span> Workforce Growth Trend
          </h3>
          <div className="h-[400px]">
            <CustomLineChart data={chartData} color="#10b981" />
          </div>
          <div className="mt-6 p-4 bg-blue-500/5 border border-blue-500/10 rounded-lg">
            <p className="text-gray-400 text-sm italic">
              * The team size data for months without active reports is projected based on recruitment targets and historical attrition patterns.
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default SectionCensus;