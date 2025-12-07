import React from 'react';
import StatCard from './StatCard';
import GlassCard from './GlassCard';
import CustomBarChart from './charts/CustomBarChart';
import StackedBarChart from './charts/StackedBarChart';
import { DashboardData } from '../types';

interface SectionTeamProps {
  data: DashboardData;
}

const SectionTeam: React.FC<SectionTeamProps> = ({ data }) => {
  const { metrics, efficiencyData, techTaskCountData, technicians, teamLeaders } = data;

  // Helper to color code efficiency
  const getEfficiencyColor = (eff: number) => {
    if (eff >= 1) return 'bg-green-500/20 text-green-400';
    if (eff >= 0.5) return 'bg-yellow-500/20 text-yellow-400';
    return 'bg-red-500/20 text-red-400';
  };

  // Color logic for the chart is handled inside CustomBarChart with the data passed, 
  // but for simple single color we pass a default. For colorful bars based on value, 
  // we would typically pass a payload with fill.
  // Let's modify the data on the fly to include fill property for the efficiency chart
  const coloredEfficiencyData = efficiencyData.map(d => ({
      ...d,
      fill: d.value >= 1 ? 'rgba(16, 185, 129, 0.7)' : d.value >= 0.5 ? 'rgba(245, 158, 11, 0.7)' : 'rgba(239, 68, 68, 0.7)'
  }));

  return (
    <div className="animate-fade-in">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Avg Response Time" value={metrics.avgResponseTime} unit="h" icon="⚡" />
        <StatCard label="Median Response" value={metrics.medianResponse} unit="h" icon="📍" />
        <StatCard label="Max Response" value={metrics.maxResponse} unit="h" icon="⏫" />
        <StatCard label="Preventive Ratio" value={metrics.preventiveRatio} unit="%" icon="🎯" />
      </div>

      {/* Team Leaders Table */}
      <GlassCard className="p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
          <span className="text-blue-400">👔</span> Team Leaders Performance
        </h3>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 px-4 text-gray-400 font-medium">Team Leader</th>
                <th className="text-center py-3 px-4 text-gray-400 font-medium">Total Tasks</th>
                <th className="text-center py-3 px-4 text-gray-400 font-medium">Corrective</th>
                <th className="text-center py-3 px-4 text-gray-400 font-medium">Preventive</th>
                <th className="text-center py-3 px-4 text-gray-400 font-medium">Dev</th>
                <th className="text-center py-3 px-4 text-gray-400 font-medium">Avg Duration</th>
                <th className="text-center py-3 px-4 text-gray-400 font-medium">Work Hours</th>
                <th className="text-center py-3 px-4 text-gray-400 font-medium">Efficiency</th>
              </tr>
            </thead>
            <tbody>
              {teamLeaders.map((leader, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">{leader.name}</td>
                  <td className="text-center py-3 px-4"><span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">{leader.tasks}</span></td>
                  <td className="text-center py-3 px-4 text-red-400">{leader.corrective}</td>
                  <td className="text-center py-3 px-4 text-green-400">{leader.preventive}</td>
                  <td className="text-center py-3 px-4 text-purple-400">{leader.dev}</td>
                  <td className="text-center py-3 px-4 text-gray-300">{leader.avg} min</td>
                  <td className="text-center py-3 px-4 text-gray-300">{leader.hours}h</td>
                  <td className="text-center py-3 px-4"><span className={`${getEfficiencyColor(leader.eff)} px-3 py-1 rounded-full text-sm`}>{leader.eff}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Efficiency Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <span className="text-green-400">📊</span> Technician Efficiency Scores
          </h3>
          <div className="h-[350px]">
            <CustomBarChart data={coloredEfficiencyData} color="#10b981" layout="vertical" />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <span className="text-purple-400">📈</span> Technician Task Count
          </h3>
          <div className="h-[350px]">
            <StackedBarChart data={techTaskCountData} />
          </div>
        </GlassCard>
      </div>

      {/* All Techs Table */}
      <GlassCard className="p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
          <span className="text-cyan-400">👨‍🔧</span> Technicians Performance Details
        </h3>
        <div className="overflow-x-auto scrollbar-thin">
           <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 px-4 text-gray-400 font-medium">Technician</th>
                <th className="py-3 px-4 text-gray-400 font-medium">Team Leader</th>
                <th className="text-center py-3 px-4 text-gray-400 font-medium">Total</th>
                <th className="text-center py-3 px-4 text-gray-400 font-medium">Corrective</th>
                <th className="text-center py-3 px-4 text-gray-400 font-medium">Preventive</th>
                <th className="text-center py-3 px-4 text-gray-400 font-medium">Avg Duration</th>
                <th className="text-center py-3 px-4 text-gray-400 font-medium">Efficiency</th>
              </tr>
            </thead>
            <tbody>
              {technicians.map((tech, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">{tech.name}</td>
                  <td className="py-3 px-4 text-gray-400">{tech.leader}</td>
                  <td className="text-center py-3 px-4"><span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">{tech.total}</span></td>
                  <td className="text-center py-3 px-4 text-red-400">{tech.corrective}</td>
                  <td className="text-center py-3 px-4 text-green-400">{tech.preventive}</td>
                  <td className="text-center py-3 px-4 text-gray-300">{tech.avg} min</td>
                  <td className="text-center py-3 px-4"><span className={`${getEfficiencyColor(tech.efficiency)} px-2 py-1 rounded text-xs`}>{tech.efficiency}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Equipment & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <span className="text-yellow-400">⚙️</span> Equipment-Specific Performance
          </h3>
          <div className="space-y-4">
             <div className="bg-white/5 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium text-white">🔌 Power Sensor Tasks</span>
                    <span className="text-blue-400 font-bold">51 tasks</span>
                </div>
                {/* Updated to rounded integer in static text */}
                <p className="text-gray-400 text-sm">Avg Duration: 136 min</p>
                <p className="text-orange-400 text-sm mt-1">Common Issue: انقطاع مصدر</p>
             </div>
             <div className="bg-white/5 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium text-white">🔋 Generator Tasks</span>
                    <span className="text-blue-400 font-bold">52 tasks</span>
                </div>
                {/* Updated to rounded integer in static text */}
                <p className="text-gray-400 text-sm">Avg Duration: 237 min</p>
                <p className="text-orange-400 text-sm mt-1">Common Issue: بدالة الداودي نقطاع مصدر</p>
             </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <span className="text-red-400">🎯</span> Improvement Recommendations
          </h3>
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">HIGH</span>
                    <span className="font-medium text-white">Response Time</span>
                </div>
                {/* Updated text to match rounded metrics: 2.5h -> 3h approx if derived, but this is static rec text */}
                <p className="text-gray-400 text-sm">Current: 3 hours → Target: &lt; 2 hours</p>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">MEDIUM</span>
                    <span className="font-medium text-white">Preventive Maintenance Ratio</span>
                </div>
                <p className="text-gray-400 text-sm">Current: 67% → Target: 75%</p>
            </div>
            
            <h4 className="text-lg font-semibold mt-6 mb-3 text-green-400">🌟 High Performers</h4>
            <div className="space-y-2">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 flex justify-between items-center">
                    <span className="text-gray-200">احمد عبد اللطيف علي</span>
                    <span className="text-green-400 font-bold">Score: 3</span>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 flex justify-between items-center">
                    <span className="text-gray-200">ذو الفقار فاضل طه</span>
                    <span className="text-green-400 font-bold">Score: 1</span>
                </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default SectionTeam;