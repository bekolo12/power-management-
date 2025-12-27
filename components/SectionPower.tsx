import React from 'react';
import StatCard from './StatCard';
import GlassCard from './GlassCard';
import CustomBarChart from './charts/CustomBarChart';
import CustomLineChart from './charts/CustomLineChart';
import CustomPieChart from './charts/CustomPieChart';
import { DashboardData } from '../types';

interface SectionPowerProps {
  data: DashboardData;
}

const SectionPower: React.FC<SectionPowerProps> = ({ data }) => {
  const { metrics, taskDistributionData, equipmentFailuresData, dailyDistributionData, hourlyDistributionData, ratioData, teamLeaders, rootCauses } = data;

  return (
    <div className="animate-fade-in">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        <StatCard label="Total Records" value={metrics.totalRecords} icon="📊" />
        <StatCard label="Tasks Per Day" value={metrics.tasksPerDay} icon="📈" />
        <StatCard label="Total Work Hours" value={metrics.totalWorkHours} icon="⏱️" />
        <StatCard label="Avg Duration" value={metrics.avgDuration} unit="min" icon="⏰" />
        <StatCard label="Team Members" value={metrics.teamCount} icon="👥" />
      </div>

      {/* Row 1: Distribution & Failures */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <span className="text-blue-400">📋</span> Task Distribution by Type
          </h3>
          <div className="h-[300px]">
            <CustomPieChart data={taskDistributionData} isDoughnut />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <span className="text-red-400">🔧</span> Equipment Failures
          </h3>
          <div className="h-[300px]">
            <CustomBarChart data={equipmentFailuresData} color="#ef4444" layout="vertical" />
          </div>
        </GlassCard>
      </div>

      {/* Row 2: Daily, Hourly, Ratio */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <span className="text-green-400">📅</span> Daily Distribution
          </h3>
          <div className="h-[250px]">
            <CustomBarChart data={dailyDistributionData} color="#10b981" hideGrid />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
             <span className="text-yellow-400">🕐</span> Hourly Distribution
          </h3>
          <div className="h-[250px]">
            <CustomLineChart data={hourlyDistributionData} color="#f59e0b" />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
           <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
             <span className="text-purple-400">⚖️</span> Task Ratio
           </h3>
           <div className="h-[250px]">
             <CustomPieChart data={ratioData} />
           </div>
        </GlassCard>
      </div>

      {/* Row 3: Leaders & Root Cause */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <span className="text-cyan-400">👔</span> Team Leaders Performance
          </h3>
          <div className="space-y-4">
            {teamLeaders.map((leader, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{leader.name}</span>
                  <span className="text-blue-400 font-bold">{leader.tasks} tasks</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                    style={{ width: `${leader.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <span className="text-orange-400">🔍</span> Root Cause Analysis
          </h3>
          <div className="space-y-3 max-h-64 overflow-y-auto scrollbar-thin pr-2">
            {rootCauses.map((cause, idx) => (
              <div key={idx} className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                <span className="text-gray-200">{cause.name}</span>
                <span className={`${cause.bg} ${cause.color} px-3 py-1 rounded-full text-sm font-medium`}>
                  {cause.count}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default SectionPower;