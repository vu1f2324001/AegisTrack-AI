export interface TrackTurnData {
  turnNumber: number;
  turnName?: string;
  incidentCount: number;
  avgConfidence: number;
  highConfidenceCount: number;
  humanReviewCount: number;
  severity: 'low' | 'medium' | 'high';
  svgCoords: { x: number; y: number };
}
