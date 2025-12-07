import React, { useState, useMemo } from 'react';
import { TabType } from './types';
import SectionPower from './components/SectionPower';
import SectionTeam from './components/SectionTeam';
import { getDashboardData, periodOptions } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('power');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('current');

  const dashboardData = useMemo(() => getDashboardData(selectedPeriod), [selectedPeriod]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                FTTH Power Management Dashboard
              </h1>
              <div className="flex items-center gap-3 mt-3">
                 <div className="relative">
                    <select 
                        value={selectedPeriod}
                        onChange={(e) => setSelectedPeriod(e.target.value)}
                        className="appearance-none bg-white/5 border border-white/20 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8 cursor-pointer hover:bg-white/10 transition-colors"
                    >
                        {periodOptions.map(option => (
                            <option key={option.id} value={option.id} className="bg-slate-800 text-white">
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                 </div>
                 {dashboardData.isProjected && (
                     <span className="bg-purple-500/20 text-purple-300 text-xs font-semibold px-2.5 py-0.5 rounded border border-purple-500/30 uppercase tracking-wider">
                         Projected Data
                     </span>
                 )}
              </div>
            </div>
            <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0">
              <button 
                onClick={() => setActiveTab('power')}
                className={`flex-1 md:flex-none px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'power' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 backdrop-blur-md border border-white/10'
                }`}
              >
                ⚡ Power Analysis
              </button>
              <button 
                onClick={() => setActiveTab('team')}
                className={`flex-1 md:flex-none px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'team' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 backdrop-blur-md border border-white/10'
                }`}
              >
                👥 Team Utilization
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main>
            {activeTab === 'power' ? <SectionPower data={dashboardData} /> : <SectionTeam data={dashboardData} />}
        </main>
      </div>
    </div>
  );
};

export default App;