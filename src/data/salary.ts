export interface SalaryRecord {
  employment: number | null;
  hourlyMedian: number | null;
  annualMedian: number | null;
}

export const salaryYear = 2024;

export const salaryRecords: Record<string, SalaryRecord> = {
  "us": { employment: 139700, hourlyMedian: 20.99, annualMedian: 43660 },
};
