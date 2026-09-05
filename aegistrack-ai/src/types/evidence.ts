export interface EvidenceChannel {
  name: string;
  key: string;
  score: number;
  weight: number;
  confidenceDelta: number;
  status: 'nominal' | 'degraded' | 'conflict';
  sourceSensor: string;
}

export interface ReplayFrame {
  frameIndex: number;
  timestampOffsetSec: number;
  isCrossingBoundary: boolean;
  excursionDeltaCm: number;
  wheelPositions: {
    frontLeft: [number, number];
    frontRight: [number, number];
    rearLeft: [number, number];
    rearRight: [number, number];
  };
}
