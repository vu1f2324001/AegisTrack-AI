export type IncidentStatus = 'HIGH_CONFIDENCE' | 'HUMAN_REVIEW' | 'UNCERTAIN';
export type StewardDecisionType = 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'FURTHER_REVIEW';

export interface EvidenceScores {
  video: number;
  wheelPosition: number;
  gps: number;
  trackGeometry: number;
  temporal: number;
  visibility: number;
  context: number;
}

export interface Incident {
  id: string;
  carNumber: string;
  driverName: string;
  team: string;
  lap: number;
  turn: number;
  timestamp: string;
  sessionTime: string;
  excursionCm: number;
  durationSec: number;
  framesAffected: number;
  entrySpeedKmh: number;
  exitSpeedKmh: number;
  confidence: number;
  priority: number;
  status: IncidentStatus;
  offendingWheel: 'FRONT_LEFT' | 'FRONT_RIGHT' | 'REAR_LEFT' | 'REAR_RIGHT' | 'ALL_FOUR';
  evidence: EvidenceScores;
  conflicts: string[];
  explanation: string[];
  recommendation: string;
  context: string;
  stewardDecision: StewardDecisionType;
  decisionNotes?: string;
  decisionTimestamp?: string;
  reviewedBy?: string;
}
