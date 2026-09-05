import { SessionData } from '../types/session';

export const mockSession: SessionData = {
  sessionId: 'GP-2026-R08',
  eventName: 'Grand Prix of Monaco',
  circuitName: 'Circuit de Monaco (Synthetic Spec)',
  sessionType: 'RACE',
  status: 'LIVE',
  currentLap: 61,
  totalLaps: 78,
  activeCars: 20,
  totalIncidents: 127,
  highConfidenceCount: 43,
  humanReviewCount: 31,
  uncertainCount: 12,
  conflictCount: 8,
  averageConfidence: 87.4,
};
