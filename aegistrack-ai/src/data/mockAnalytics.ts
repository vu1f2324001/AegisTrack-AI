export const mockIncidentsByLap = [
  { lap: 'L1-10', incidents: 14, highConf: 8, review: 4 },
  { lap: 'L11-20', incidents: 21, highConf: 12, review: 6 },
  { lap: 'L21-30', incidents: 27, highConf: 15, review: 9 },
  { lap: 'L31-40', incidents: 38, highConf: 22, review: 11 },
  { lap: 'L41-50', incidents: 29, highConf: 18, review: 8 },
  { lap: 'L51-60', incidents: 34, highConf: 20, review: 10 },
];

export const mockConfidenceDistribution = [
  { range: '90-100%', count: 43, fill: '#10b981' },
  { range: '80-89%', count: 28, fill: '#06b6d4' },
  { range: '70-79%', count: 18, fill: '#3b82f6' },
  { range: '50-69%', count: 26, fill: '#f59e0b' },
  { range: '< 50%', count: 12, fill: '#ef4444' },
];

export const mockIncidentsByTurn = [
  { turn: 'T1', count: 8 },
  { turn: 'T2', count: 2 },
  { turn: 'T3', count: 12 },
  { turn: 'T4', count: 19 },
  { turn: 'T5', count: 6 },
  { turn: 'T6', count: 7 },
  { turn: 'T7', count: 5 },
  { turn: 'T8', count: 28 },
  { turn: 'T9', count: 21 },
  { turn: 'T10', count: 9 },
  { turn: 'T11', count: 14 },
  { turn: 'T12', count: 16 },
];

export const mockEvidenceAgreement = [
  { subject: 'Video Cam', A: 96, fullMark: 100 },
  { subject: 'Wheel Edge', A: 92, fullMark: 100 },
  { subject: 'D-GPS', A: 78, fullMark: 100 },
  { subject: 'Track CAD', A: 95, fullMark: 100 },
  { subject: 'Temporal', A: 91, fullMark: 100 },
  { subject: 'Visibility', A: 84, fullMark: 100 },
];

export const mockExcursionTrend = [
  { lap: 10, excursionCm: 5.2, car: 'Car #27' },
  { lap: 15, excursionCm: 8.1, car: 'Car #27' },
  { lap: 21, excursionCm: 12.0, car: 'Car #27' },
  { lap: 27, excursionCm: 15.3, car: 'Car #27' },
  { lap: 34, excursionCm: 18.4, car: 'Car #27' },
];
