import { Incident, StewardDecisionType } from '../types/incident';
import { initialMockIncidents } from '../data/mockIncidents';
import { mockSession } from '../data/mockSession';
import { SessionData } from '../types/session';

const STORAGE_KEY = 'aegistrack_incidents_v1';

function getStoredIncidents(): Incident[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialMockIncidents));
      return initialMockIncidents;
    }
    return JSON.parse(raw);
  } catch {
    return initialMockIncidents;
  }
}

function saveStoredIncidents(incidents: Incident[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(incidents));
  } catch (err) {
    console.error('Failed to save incidents to localStorage', err);
  }
}

export const incidentService = {
  async getIncidents(): Promise<Incident[]> {
    return getStoredIncidents();
  },

  async getIncidentById(id: string): Promise<Incident | null> {
    const incidents = getStoredIncidents();
    return incidents.find((inc) => inc.id === id) || null;
  },

  async getSession(): Promise<SessionData> {
    const incidents = getStoredIncidents();
    const highConf = incidents.filter((i) => i.status === 'HIGH_CONFIDENCE').length;
    const review = incidents.filter((i) => i.status === 'HUMAN_REVIEW').length;
    const uncertain = incidents.filter((i) => i.status === 'UNCERTAIN').length;
    const conflicts = incidents.filter((i) => i.conflicts.length > 0).length;
    const avgConfidence = incidents.reduce((acc, curr) => acc + curr.confidence, 0) / (incidents.length || 1);

    return {
      ...mockSession,
      highConfidenceCount: highConf,
      humanReviewCount: review,
      uncertainCount: uncertain,
      conflictCount: conflicts,
      averageConfidence: Number(avgConfidence.toFixed(1)),
    };
  },

  async updateStewardDecision(
    id: string,
    decision: StewardDecisionType,
    notes?: string
  ): Promise<Incident | null> {
    const incidents = getStoredIncidents();
    const idx = incidents.findIndex((inc) => inc.id === id);
    if (idx === -1) return null;

    const updated: Incident = {
      ...incidents[idx],
      stewardDecision: decision,
      decisionNotes: notes || incidents[idx].decisionNotes,
      decisionTimestamp: new Date().toISOString(),
      reviewedBy: 'Chief Steward Panel (Active User)',
    };

    incidents[idx] = updated;
    saveStoredIncidents(incidents);
    return updated;
  },

  async resetToDefaults(): Promise<void> {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialMockIncidents));
  }
};
