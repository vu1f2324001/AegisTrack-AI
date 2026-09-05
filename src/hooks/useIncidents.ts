import { useState, useEffect, useCallback } from 'react';
import { Incident } from '../types/incident';
import { incidentService } from '../services/incidentService';

export function useIncidents() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await incidentService.getIncidents();
      setIncidents(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { incidents, loading, refresh };
}
