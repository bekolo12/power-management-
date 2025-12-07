import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  unit?: string;
  icon: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, unit, icon }) => {
  return (
    <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold text-white mt-1">
            {value}
            {unit && <span className="text-lg ml-1 text-blue-200/80">{unit}</span>}
          </p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );
};

export default StatCard;