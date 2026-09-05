import { useState, useEffect, useCallback } from 'react';
import { Incident, StewardDecisionType } from '../types/incident';
import { incidentService } from '../services/incidentService';

export function useIncident(id: string | undefined) {
  const [incident, setIncident] = useState<Incident | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchIncident = useCallback(async () => {
    if (!id) {
      setIncident(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const data = await incidentService.getIncidentById(id);
      setIncident(data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchIncident();
  }, [fetchIncident]);

  const submitDecision = async (decision: StewardDecisionType, notes?: string) => {
    if (!id) return;
    const updated = await incidentService.updateStewardDecision(id, decision, notes);
    if (updated) {
      setIncident(updated);
    }
    return updated;
  };

  return { incident, loading, submitDecision, refresh: fetchIncident };
}
