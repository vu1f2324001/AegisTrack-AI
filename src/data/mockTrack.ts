import { TrackTurnData } from '../types/track';

export const mockTrackTurns: TrackTurnData[] = [
  { turnNumber: 1, turnName: "Sainte Dévote", incidentCount: 8, avgConfidence: 74, highConfidenceCount: 3, humanReviewCount: 4, severity: 'medium', svgCoords: { x: 180, y: 380 } },
  { turnNumber: 2, turnName: "Beau Rivage", incidentCount: 2, avgConfidence: 92, highConfidenceCount: 2, humanReviewCount: 0, severity: 'low', svgCoords: { x: 260, y: 290 } },
  { turnNumber: 3, turnName: "Massenet", incidentCount: 12, avgConfidence: 71, highConfidenceCount: 5, humanReviewCount: 5, severity: 'medium', svgCoords: { x: 380, y: 170 } },
  { turnNumber: 4, turnName: "Casino Square", incidentCount: 19, avgConfidence: 95, highConfidenceCount: 16, humanReviewCount: 2, severity: 'high', svgCoords: { x: 500, y: 150 } },
  { turnNumber: 5, turnName: "Mirabeau Haute", incidentCount: 6, avgConfidence: 68, highConfidenceCount: 2, humanReviewCount: 3, severity: 'low', svgCoords: { x: 620, y: 210 } },
  { turnNumber: 6, turnName: "Grand Hotel Hairpin", incidentCount: 7, avgConfidence: 58, highConfidenceCount: 1, humanReviewCount: 4, severity: 'low', svgCoords: { x: 670, y: 280 } },
  { turnNumber: 7, turnName: "Mirabeau Bas", incidentCount: 5, avgConfidence: 82, highConfidenceCount: 3, humanReviewCount: 1, severity: 'low', svgCoords: { x: 650, y: 350 } },
  { turnNumber: 8, turnName: "Portier (Apex 8)", incidentCount: 28, avgConfidence: 94, highConfidenceCount: 22, humanReviewCount: 5, severity: 'high', svgCoords: { x: 690, y: 440 } },
  { turnNumber: 9, turnName: "Nouvelle Chicane (Entry)", incidentCount: 21, avgConfidence: 89, highConfidenceCount: 14, humanReviewCount: 6, severity: 'high', svgCoords: { x: 510, y: 510 } },
  { turnNumber: 10, turnName: "Nouvelle Chicane (Exit)", incidentCount: 9, avgConfidence: 65, highConfidenceCount: 3, humanReviewCount: 4, severity: 'medium', svgCoords: { x: 440, y: 530 } },
  { turnNumber: 11, turnName: "Tabac", incidentCount: 14, avgConfidence: 91, highConfidenceCount: 10, humanReviewCount: 3, severity: 'medium', svgCoords: { x: 320, y: 490 } },
  { turnNumber: 12, turnName: "Louis Chiron", incidentCount: 16, avgConfidence: 63, highConfidenceCount: 4, humanReviewCount: 9, severity: 'high', svgCoords: { x: 210, y: 470 } },
];
