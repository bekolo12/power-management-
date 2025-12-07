import { Technician, ChartDataPoint, TeamLeader, RootCause, DashboardData } from './types';

// --- Base Data (The Real Data) ---

const taskDistributionData: ChartDataPoint[] = [
  { name: 'Preventive', value: 175, fill: '#10b981' },
  { name: 'Corrective', value: 54, fill: '#ef4444' },
  { name: 'Dev/New', value: 33, fill: '#8b5cf6' },
];

const equipmentFailuresData: ChartDataPoint[] = [
  { name: 'Generator', value: 52 },
  { name: 'Power Sensor', value: 51 },
  { name: 'Splitter', value: 18 },
  { name: 'Cable', value: 15 },
  { name: 'Battery', value: 13 },
  { name: 'UPS', value: 12 },
  { name: 'Rectifier', value: 11 },
  { name: 'Motor', value: 8 },
  { name: 'Filter', value: 5 },
  { name: 'Transformer', value: 3 },
];

const dailyDistributionData: ChartDataPoint[] = [
  { name: 'Sun', value: 56 },
  { name: 'Sat', value: 48 },
  { name: 'Thu', value: 39 },
  { name: 'Tue', value: 39 },
  { name: 'Wed', value: 37 },
  { name: 'Mon', value: 35 },
  { name: 'Fri', value: 8 },
];

const hourlyDistributionData: ChartDataPoint[] = [
  { name: '8', value: 5 },
  { name: '9', value: 32 },
  { name: '10', value: 36 },
  { name: '11', value: 39 },
  { name: '12', value: 17 },
  { name: '13', value: 27 },
  { name: '14', value: 24 },
  { name: '15', value: 14 },
  { name: '16', value: 30 },
  { name: '17', value: 6 },
  { name: '18', value: 7 },
  { name: '19', value: 7 },
  { name: '20', value: 6 },
];

const ratioData: ChartDataPoint[] = [
  { name: 'Preventive', value: 67, fill: '#10b981' },
  { name: 'Corrective', value: 21, fill: '#ef4444' },
  { name: 'Other', value: 13, fill: '#8b5cf6' },
];

// Team Section Data
const efficiencyData: ChartDataPoint[] = [
  { name: 'لؤي حازم', value: 3 },
  { name: 'محمد عدي', value: 1 },
  { name: 'Mustafa M.', value: 1 },
  { name: 'Ahmed H.', value: 1 },
  { name: 'مصطفى محمد', value: 0 },
  { name: 'معتز جاسم', value: 0 },
  { name: 'محمد عبدالهادي', value: 0 },
  { name: 'احمد زيدون', value: 0 },
  { name: 'Muhanned A.', value: 0 },
  { name: 'مهيمن عبد', value: 0 },
];

const techTaskCountData: ChartDataPoint[] = [
  { name: 'Ahmed H.', value: 33, value2: 9 }, // value=Preventive, value2=Corrective
  { name: 'Muhanned A.', value: 28, value2: 7 },
  { name: 'محمد عبدالهادي', value: 20, value2: 12 },
  { name: 'محمد عدي', value: 21, value2: 5 },
  { name: 'معتز جاسم', value: 22, value2: 6 },
  { name: 'مصطفى محمد', value: 16, value2: 3 },
  { name: 'احمد زيدون', value: 18, value2: 3 },
  { name: 'Mustafa M.', value: 13, value2: 8 },
  { name: 'لؤي حازم', value: 3, value2: 1 },
  { name: 'مهيمن', value: 1, value2: 0 },
];

const technicians: Technician[] = [
  { name: 'Ahmed Hekmat Ahmed', leader: 'ذو الفقار فاضل طه', total: 43, corrective: 9, preventive: 33, avg: 81, efficiency: 1 },
  { name: 'Muhanned Abd Hassan Hadi', leader: 'لؤي حازم محمد', total: 40, corrective: 7, preventive: 28, avg: 355, efficiency: 0 },
  { name: 'محمد عبدالهادي منير', leader: 'ذو الفقار فاضل طه', total: 36, corrective: 12, preventive: 20, avg: 132, efficiency: 0 },
  { name: 'محمد عدي خضير عباس', leader: 'ذو الفقار فاضل طه', total: 32, corrective: 5, preventive: 21, avg: 64, efficiency: 1 },
  { name: 'معتز جاسم لفته', leader: 'ذو الفقار فاضل طه', total: 30, corrective: 6, preventive: 22, avg: 124, efficiency: 0 },
  { name: 'مصطفى محمد طه', leader: 'ذو الفقار فاضل طه', total: 27, corrective: 3, preventive: 16, avg: 121, efficiency: 0 },
  { name: 'احمد زيدون حسن عبد', leader: 'ذو الفقار فاضل طه', total: 27, corrective: 3, preventive: 18, avg: 188, efficiency: 0 },
  { name: 'Mustafa Mohammed Matloob', leader: 'لؤي حازم محمد', total: 22, corrective: 8, preventive: 13, avg: 65, efficiency: 1 },
  { name: 'لؤي حازم محمد', leader: 'احمد عبد اللطيف علي', total: 4, corrective: 1, preventive: 3, avg: 18, efficiency: 3 },
  { name: 'مهيمن عبد المطلب عبدالستار', leader: 'لؤي حازم محمد', total: 1, corrective: 0, preventive: 1, avg: 467, efficiency: 0 }
];

const rootCauses: RootCause[] = [
  { name: 'انقطاع مصدر', count: 5, color: 'text-red-400', bg: 'bg-red-500/20' },
  { name: 'كشف موقع', count: 4, color: 'text-orange-400', bg: 'bg-orange-500/20' },
  { name: 'استلام مواد', count: 3, color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
  { name: 'صيانة سبالت', count: 2, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { name: 'صيانة وقائيه', count: 2, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { name: 'تجييك ريبيتر', count: 2, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { name: 'بور سنسر الانتصار طافي', count: 2, color: 'text-blue-400', bg: 'bg-blue-500/20' },
];

const teamLeaders: TeamLeader[] = [
    { name: 'ذو الفقار فاضل طه', tasks: 195, percentage: 74, corrective: 38, preventive: 130, dev: 27, hours: 372, avg: 114, eff: 1 },
    { name: 'لؤي حازم محمد', tasks: 63, percentage: 24, corrective: 15, preventive: 42, dev: 6, hours: 269, avg: 256, eff: 0 },
    { name: 'احمد عبد اللطيف علي', tasks: 4, percentage: 2, corrective: 1, preventive: 3, dev: 0, hours: 1, avg: 18, eff: 3 },
];

const baseMetrics = {
    totalRecords: 262,
    tasksPerDay: 6,
    totalWorkHours: 642,
    avgDuration: 147,
    avgResponseTime: 3,
    medianResponse: 1,
    maxResponse: 45,
    preventiveRatio: 67
};

// --- Helper for generating projected data ---
const fuzz = (value: number, factor = 0.2) => {
    const change = value * factor * (Math.random() - 0.5);
    // Ensure integer return value
    return Math.max(0, Math.round(value + change));
};

// --- Data Selector Function ---

export const getDashboardData = (periodId: string): DashboardData => {
  const isReal = periodId === 'current';
  
  if (isReal) {
      return {
          taskDistributionData,
          equipmentFailuresData,
          dailyDistributionData,
          hourlyDistributionData,
          ratioData,
          efficiencyData,
          techTaskCountData,
          technicians,
          rootCauses,
          teamLeaders,
          isProjected: false,
          metrics: baseMetrics
      };
  }

  // Generate randomized "Projected" data for other months
  // We use the periodId as a pseudo-seed to make it consistent within session if possible,
  // but Math.random is sufficient for this mock.
  
  return {
    taskDistributionData: taskDistributionData.map(d => ({ ...d, value: fuzz(d.value) })),
    equipmentFailuresData: equipmentFailuresData.map(d => ({ ...d, value: fuzz(d.value) })),
    dailyDistributionData: dailyDistributionData.map(d => ({ ...d, value: fuzz(d.value) })),
    hourlyDistributionData: hourlyDistributionData.map(d => ({ ...d, value: fuzz(d.value) })),
    ratioData: ratioData.map(d => ({ ...d, value: fuzz(d.value, 0.1) })),
    efficiencyData: efficiencyData.map(d => ({ ...d, value: fuzz(d.value, 0.3) })),
    techTaskCountData: techTaskCountData.map(d => ({ 
        ...d, 
        value: fuzz(d.value), 
        value2: d.value2 ? fuzz(d.value2) : undefined 
    })),
    technicians: technicians.map(t => ({
        ...t,
        total: fuzz(t.total),
        corrective: fuzz(t.corrective),
        preventive: fuzz(t.preventive),
        avg: fuzz(t.avg),
        efficiency: fuzz(t.efficiency)
    })),
    rootCauses: rootCauses.map(r => ({ ...r, count: fuzz(r.count) })),
    teamLeaders: teamLeaders.map(tl => ({
        ...tl,
        tasks: fuzz(tl.tasks),
        hours: fuzz(tl.hours),
        avg: fuzz(tl.avg),
        eff: fuzz(tl.eff)
    })),
    isProjected: true,
    metrics: {
        totalRecords: fuzz(baseMetrics.totalRecords),
        tasksPerDay: fuzz(baseMetrics.tasksPerDay),
        totalWorkHours: fuzz(baseMetrics.totalWorkHours),
        avgDuration: fuzz(baseMetrics.avgDuration),
        avgResponseTime: fuzz(baseMetrics.avgResponseTime),
        medianResponse: fuzz(baseMetrics.medianResponse),
        maxResponse: fuzz(baseMetrics.maxResponse),
        preventiveRatio: fuzz(baseMetrics.preventiveRatio)
    }
  };
};

export const periodOptions = [
    { id: '1', label: 'January 2025' },
    { id: '2', label: 'February 2025' },
    { id: '3', label: 'March 2025' },
    { id: '4', label: 'April 2025' },
    { id: '5', label: 'May 2025' },
    { id: '6', label: 'June 2025' },
    { id: '7', label: 'July 2025' },
    { id: '8', label: 'August 2025' },
    { id: '9', label: 'September 2025' },
    { id: '10', label: 'October 2025' },
    { id: 'current', label: 'october 10/12/2025 till november 11/8/2025' },
    { id: '11', label: 'November 2025' },
];