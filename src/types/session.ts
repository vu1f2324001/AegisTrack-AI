export interface SessionData {
  sessionId: string;
  eventName: string;
  circuitName: string;
  sessionType: 'RACE' | 'QUALIFYING' | 'FP1' | 'FP2' | 'FP3';
  status: 'LIVE' | 'RED_FLAG' | 'SAFETY_CAR' | 'FINISHED';
  currentLap: number;
  totalLaps: number;
  activeCars: number;
  totalIncidents: number;
  highConfidenceCount: number;
  humanReviewCount: number;
  uncertainCount: number;
  conflictCount: number;
  averageConfidence: number;
}
