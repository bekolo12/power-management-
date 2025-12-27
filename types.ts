export interface Technician {
  name: string;
  leader: string;
  total: number;
  corrective: number;
  preventive: number;
  avg: number;
  efficiency: number;
}

export interface TeamLeader {
  name: string;
  tasks: number;
  percentage: number;
  corrective: number;
  preventive: number;
  dev: number;
  hours: number;
  avg: number;
  eff: number;
}

export interface RootCause {
  name: string;
  count: number;
  color: string;
  bg: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  value2?: number; // Optional second value for stacked/grouped charts
  fill?: string;
}

export interface KeyMetric {
  label: string;
  value: string | number;
  unit?: string;
  icon: string;
}

export type TabType = 'power' | 'team' | 'census';

export interface DashboardData {
  taskDistributionData: ChartDataPoint[];
  equipmentFailuresData: ChartDataPoint[];
  dailyDistributionData: ChartDataPoint[];
  hourlyDistributionData: ChartDataPoint[];
  ratioData: ChartDataPoint[];
  efficiencyData: ChartDataPoint[];
  techTaskCountData: ChartDataPoint[];
  technicians: Technician[];
  rootCauses: RootCause[];
  teamLeaders: TeamLeader[];
  isProjected: boolean;
  metrics: {
    totalRecords: number;
    tasksPerDay: number;
    totalWorkHours: number;
    avgDuration: number;
    avgResponseTime: number;
    medianResponse: number;
    maxResponse: number;
    preventiveRatio: number;
    teamCount: number;
  };
}