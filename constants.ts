import { Technician, ChartDataPoint, TeamLeader, RootCause, DashboardData } from './types';

// --- Base Data (Week 1: Oct 12 - Nov 8) ---

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

// Team Section Data Week 1
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
  { name: 'لؤي حازم محمد', leader: '-', total: 4, corrective: 1, preventive: 3, avg: 18, efficiency: 3 },
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
    { name: 'ذو الفقار فاضل طه', tasks: 195, percentage: 76, corrective: 38, preventive: 130, dev: 27, hours: 372, avg: 114, eff: 1 },
    { name: 'لؤي حازم محمد', tasks: 63, percentage: 24, corrective: 15, preventive: 42, dev: 6, hours: 269, avg: 256, eff: 0 },
];

const baseMetrics = {
    totalRecords: 262,
    tasksPerDay: 6,
    totalWorkHours: 642,
    avgDuration: 147,
    avgResponseTime: 3,
    medianResponse: 1,
    maxResponse: 45,
    preventiveRatio: 67,
    teamCount: 10
};

// --- Week 2 Data (Nov 16 - Nov 24) ---

const taskDistributionDataW2: ChartDataPoint[] = [
  { name: 'Preventive', value: 38, fill: '#10b981' },
  { name: 'Corrective', value: 15, fill: '#ef4444' },
  { name: 'Dev/New', value: 0, fill: '#8b5cf6' },
];

const equipmentFailuresDataW2: ChartDataPoint[] = [
  { name: 'Repeater Gen', value: 8 },
  { name: 'UPS', value: 6 },
  { name: 'Splitter', value: 5 },
  { name: 'Power Sensor', value: 4 },
  { name: 'Generator', value: 3 },
  { name: 'Switch', value: 3 },
  { name: 'Router', value: 2 },
  { name: 'Inverter', value: 2 },
  { name: 'Battery', value: 2 },
  { name: 'Cable', value: 1 },
];

const dailyDistributionDataW2: ChartDataPoint[] = [
  { name: 'Sun', value: 2 },
  { name: 'Mon', value: 8 },
  { name: 'Tue', value: 9 },
  { name: 'Wed', value: 11 },
  { name: 'Thu', value: 10 },
  { name: 'Fri', value: 8 },
  { name: 'Sat', value: 5 },
];

const hourlyDistributionDataW2: ChartDataPoint[] = [
  { name: '8', value: 3 },
  { name: '9', value: 5 },
  { name: '10', value: 7 },
  { name: '11', value: 6 },
  { name: '12', value: 4 },
  { name: '13', value: 5 },
  { name: '14', value: 8 },
  { name: '15', value: 6 },
  { name: '16', value: 4 },
  { name: '17', value: 3 },
  { name: '18', value: 2 },
  { name: '19', value: 0 },
  { name: '20', value: 0 },
];

const ratioDataW2: ChartDataPoint[] = [
  { name: 'Preventive', value: 72, fill: '#10b981' },
  { name: 'Corrective', value: 28, fill: '#ef4444' },
  { name: 'Other', value: 0, fill: '#8b5cf6' },
];

const efficiencyDataW2: ChartDataPoint[] = [
  { name: 'ذو الفقار فاضل طه', value: 3 },
  { name: 'لؤي حازم', value: 2 },
  { name: 'محمد عدي', value: 2 },
];

const techTaskCountDataW2: ChartDataPoint[] = [
    { name: 'Ahmed H.', value: 9, value2: 3 },
    { name: 'محمد علي', value: 8, value2: 2 },
    { name: 'علي أحمد', value: 4, value2: 4 },
    { name: 'سعد محمود', value: 5, value2: 2 },
    { name: 'حسن أحمد', value: 5, value2: 1 },
    { name: 'خالد محمد', value: 3, value2: 2 },
    { name: 'محمود أحمد', value: 2, value2: 1 },
    { name: 'فاضل طه', value: 2, value2: 0 },
];

const techniciansW2: Technician[] = [
  { name: 'Ahmed Hekmat Ahmed', leader: 'ذو الفقار فاضل طه', total: 12, corrective: 3, preventive: 9, avg: 86, efficiency: 3 },
  { name: 'محمد علي حسن', leader: 'ذو الفقار فاضل طه', total: 10, corrective: 2, preventive: 8, avg: 92, efficiency: 2 },
  { name: 'علي أحمد محمد', leader: 'لؤي حازم', total: 8, corrective: 4, preventive: 4, avg: 116, efficiency: 2 },
  { name: 'سعد محمود عبدالله', leader: 'محمد عدي', total: 7, corrective: 2, preventive: 5, avg: 78, efficiency: 3 },
  { name: 'حسن أحمد علي', leader: 'لؤي حازم', total: 6, corrective: 1, preventive: 5, avg: 96, efficiency: 2 },
  { name: 'خالد محمد يوسف', leader: 'محمد عدي', total: 5, corrective: 2, preventive: 3, avg: 102, efficiency: 1 },
  { name: 'محمود أحمد حسن', leader: 'ذو الفقار فاضل طه', total: 3, corrective: 1, preventive: 2, avg: 89, efficiency: 2 },
  { name: 'فاضل طه ذو الفقار', leader: '-', total: 2, corrective: 0, preventive: 2, avg: 75, efficiency: 3 },
];

const rootCausesW2: RootCause[] = [
  { name: 'صيانة دورية', count: 12, color: 'text-green-400', bg: 'bg-green-500/20' },
  { name: 'انقطاع مصدر', count: 8, color: 'text-red-400', bg: 'bg-red-500/20' },
  { name: 'ارتفاع درجة الحرارة', count: 6, color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
  { name: 'عطل في المولد', count: 5, color: 'text-red-400', bg: 'bg-red-500/20' },
  { name: 'مشكلة في البطارية', count: 4, color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
  { name: 'قطع في الكابل', count: 3, color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
  { name: 'مشكلة في المحول', count: 3, color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
  { name: 'تلف في الجهاز', count: 2, color: 'text-green-400', bg: 'bg-green-500/20' },
  { name: 'مشكلة في الشبكة', count: 2, color: 'text-green-400', bg: 'bg-green-500/20' },
  { name: 'انقطاع التيار', count: 2, color: 'text-green-400', bg: 'bg-green-500/20' },
];

const teamLeadersW2: TeamLeader[] = [
    { name: 'ذو الفقار فاضل طه', tasks: 27, percentage: 51, corrective: 6, preventive: 21, dev: 0, hours: 39, avg: 86, eff: 3 },
    { name: 'لؤي حازم', tasks: 14, percentage: 26, corrective: 5, preventive: 9, dev: 0, hours: 24, avg: 104, eff: 2 },
    { name: 'محمد عدي', tasks: 12, percentage: 23, corrective: 4, preventive: 8, dev: 0, hours: 18, avg: 91, eff: 2 },
];

const baseMetricsW2 = {
    totalRecords: 53,
    tasksPerDay: 7,
    totalWorkHours: 85,
    avgDuration: 97,
    avgResponseTime: 3,
    medianResponse: 2,
    maxResponse: 24,
    preventiveRatio: 72,
    teamCount: 8
};


// --- Helper for generating projected data ---
const fuzz = (value: number, factor = 0.2, seed?: number) => {
    // Basic deterministic-ish fuzzing based on a seed (optional)
    const random = seed ? (Math.sin(seed) + 1) / 2 : Math.random();
    const change = value * factor * (random - 0.5);
    return Math.max(0, Math.round(value + change));
};

// Fixed team growth mapping for deterministic census
const teamGrowthMap: Record<string, number> = {
    '1': 6,  // Jan
    '2': 6,  // Feb
    '3': 7,  // Mar
    '4': 7,  // Apr
    '5': 8,  // May
    '6': 8,  // Jun
    '7': 9,  // Jul
    '8': 9,  // Aug
    '9': 10, // Sep
    '10': 10,// Oct
    '11': 11 // Nov
};

// --- Data Selector Function ---

export const getDashboardData = (periodId: string): DashboardData => {
  if (periodId === 'total_2025') {
      // Aggregate data from all 11 months for a yearly summary
      const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
      const monthData = months.map(m => getDashboardData(m));
      
      const aggregate = {
          taskDistributionData: [...taskDistributionData].map(d => ({ ...d, value: 0 })),
          equipmentFailuresData: [...equipmentFailuresData].map(d => ({ ...d, value: 0 })),
          dailyDistributionData: [...dailyDistributionData].map(d => ({ ...d, value: 0 })),
          hourlyDistributionData: [...hourlyDistributionData].map(d => ({ ...d, value: 0 })),
          metrics: { 
              totalRecords: 0, 
              tasksPerDay: 0, 
              totalWorkHours: 0, 
              avgDuration: 0, 
              avgResponseTime: 0, 
              medianResponse: 0, 
              maxResponse: 0, 
              preventiveRatio: 0, 
              teamCount: 11 // Max census
          }
      };

      monthData.forEach(m => {
          aggregate.metrics.totalRecords += m.metrics.totalRecords;
          aggregate.metrics.totalWorkHours += m.metrics.totalWorkHours;
          aggregate.metrics.tasksPerDay += m.metrics.tasksPerDay;
          aggregate.metrics.avgDuration += m.metrics.avgDuration;
          aggregate.metrics.avgResponseTime += m.metrics.avgResponseTime;
          aggregate.metrics.medianResponse += m.metrics.medianResponse;
          aggregate.metrics.maxResponse = Math.max(aggregate.metrics.maxResponse, m.metrics.maxResponse);
          aggregate.metrics.preventiveRatio += m.metrics.preventiveRatio;

          m.taskDistributionData.forEach(td => {
              const target = aggregate.taskDistributionData.find(atd => atd.name === td.name);
              if (target) target.value += td.value;
          });
          m.equipmentFailuresData.forEach(ef => {
              const target = aggregate.equipmentFailuresData.find(aef => aef.name === ef.name);
              if (target) target.value += ef.value;
          });
          m.dailyDistributionData.forEach(dd => {
              const target = aggregate.dailyDistributionData.find(add => add.name === dd.name);
              if (target) target.value += dd.value;
          });
          m.hourlyDistributionData.forEach(hd => {
              const target = aggregate.hourlyDistributionData.find(ahd => ahd.name === hd.name);
              if (target) target.value += hd.value;
          });
      });

      // Simple averages for rate-based metrics
      aggregate.metrics.tasksPerDay = Math.round(aggregate.metrics.tasksPerDay / months.length);
      aggregate.metrics.avgDuration = Math.round(aggregate.metrics.avgDuration / months.length);
      aggregate.metrics.avgResponseTime = Math.round(aggregate.metrics.avgResponseTime / months.length);
      aggregate.metrics.medianResponse = Math.round(aggregate.metrics.medianResponse / months.length);
      aggregate.metrics.preventiveRatio = Math.round(aggregate.metrics.preventiveRatio / months.length);

      // Return aggregated yearly data
      return {
          ...aggregate,
          ratioData: taskDistributionData.map(d => {
              const totalVal = aggregate.taskDistributionData.find(td => td.name === d.name)?.value || 0;
              const sum = aggregate.taskDistributionData.reduce((acc, curr) => acc + curr.value, 0);
              return { ...d, value: Math.round((totalVal / sum) * 100) };
          }),
          efficiencyData: efficiencyData.map(e => ({ ...e, value: fuzz(e.value, 0.1, 999) })),
          techTaskCountData: techTaskCountData.map(t => ({ ...t, value: fuzz(t.value, 0.2, 888), value2: t.value2 ? fuzz(t.value2, 0.2, 777) : undefined })),
          technicians: technicians.map(t => ({ ...t, total: fuzz(t.total, 0.3, 666) })),
          rootCauses: rootCauses.map(r => ({ ...r, count: fuzz(r.count, 0.5, 555) })),
          teamLeaders: teamLeaders.map(tl => ({ ...tl, tasks: fuzz(tl.tasks, 0.3, 444), percentage: tl.name.includes('ذو الفقار') ? 76 : 24 })),
          isProjected: true
      } as DashboardData;
  }

  const isCurrent = periodId === 'current';
  const isWeek2 = periodId === 'nov_16_24';
  
  if (isCurrent) {
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

  if (isWeek2) {
      return {
          taskDistributionData: taskDistributionDataW2,
          equipmentFailuresData: equipmentFailuresDataW2,
          dailyDistributionData: dailyDistributionDataW2,
          hourlyDistributionData: hourlyDistributionDataW2,
          ratioData: ratioDataW2,
          efficiencyData: efficiencyDataW2,
          techTaskCountData: techTaskCountDataW2,
          technicians: techniciansW2,
          rootCauses: rootCausesW2,
          teamLeaders: teamLeadersW2,
          isProjected: false,
          metrics: baseMetricsW2
      };
  }

  // Determine team count for the specific periodId if available
  const monthSeed = parseInt(periodId) || Math.random() * 1000;
  const monthTeamCount = teamGrowthMap[periodId] || Math.floor(7 + fuzz(4, 0.5, monthSeed));

  return {
    taskDistributionData: taskDistributionData.map(d => ({ ...d, value: fuzz(d.value, 0.2, monthSeed) })),
    equipmentFailuresData: equipmentFailuresData.map(d => ({ ...d, value: fuzz(d.value, 0.2, monthSeed + 1) })),
    dailyDistributionData: dailyDistributionData.map(d => ({ ...d, value: fuzz(d.value, 0.2, monthSeed + 2) })),
    hourlyDistributionData: hourlyDistributionData.map(d => ({ ...d, value: fuzz(d.value, 0.2, monthSeed + 3) })),
    ratioData: ratioData.map(d => ({ ...d, value: fuzz(d.value, 0.1, monthSeed + 4) })),
    efficiencyData: efficiencyData.map(d => ({ ...d, value: fuzz(d.value, 0.3, monthSeed + 5) })),
    techTaskCountData: techTaskCountData.map(d => ({ 
        ...d, 
        value: fuzz(d.value, 0.2, monthSeed + 6), 
        value2: d.value2 ? fuzz(d.value2, 0.2, monthSeed + 7) : undefined 
    })),
    technicians: technicians.map(t => ({
        ...t,
        total: fuzz(t.total, 0.2, monthSeed + 8),
        corrective: fuzz(t.corrective, 0.2, monthSeed + 9),
        preventive: fuzz(t.preventive, 0.2, monthSeed + 10),
        avg: fuzz(t.avg, 0.2, monthSeed + 11),
        efficiency: fuzz(t.efficiency, 0.2, monthSeed + 12)
    })),
    rootCauses: rootCauses.map(r => ({ ...r, count: fuzz(r.count, 0.2, monthSeed + 13) })),
    teamLeaders: teamLeaders.map(tl => ({
        ...tl,
        tasks: fuzz(tl.tasks, 0.2, monthSeed + 14),
        hours: fuzz(tl.hours, 0.2, monthSeed + 15),
        avg: fuzz(tl.avg, 0.2, monthSeed + 16),
        eff: fuzz(tl.eff, 0.2, monthSeed + 17)
    })),
    isProjected: true,
    metrics: {
        totalRecords: fuzz(baseMetrics.totalRecords, 0.2, monthSeed + 18),
        tasksPerDay: fuzz(baseMetrics.tasksPerDay, 0.2, monthSeed + 19),
        totalWorkHours: fuzz(baseMetrics.totalWorkHours, 0.2, monthSeed + 20),
        avgDuration: fuzz(baseMetrics.avgDuration, 0.2, monthSeed + 21),
        avgResponseTime: fuzz(baseMetrics.avgResponseTime, 0.2, monthSeed + 22),
        medianResponse: fuzz(baseMetrics.medianResponse, 0.2, monthSeed + 23),
        maxResponse: fuzz(baseMetrics.maxResponse, 0.2, monthSeed + 24),
        preventiveRatio: fuzz(baseMetrics.preventiveRatio, 0.1, monthSeed + 25),
        teamCount: monthTeamCount
    }
  };
};

export const periodGroups = [
  {
    label: 'Overview',
    options: [
        { id: 'total_2025', label: 'Total Year 2025 (Estimated)' }
    ]
  },
  {
    label: 'Months',
    options: [
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
        { id: '11', label: 'November 2025' },
    ]
  },
  {
    label: 'Weeks',
    options: [
        { id: 'current', label: 'October 12, 2025 - November 8, 2025' },
        { id: 'nov_16_24', label: 'November 16, 2025 - November 24, 2025' }
    ]
  }
];