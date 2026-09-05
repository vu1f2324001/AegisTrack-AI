import React, { useState, useMemo } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { IncidentTable } from '../components/incidents/IncidentTable';
import { IncidentFilters } from '../components/incidents/IncidentFilters';
import { useIncidents } from '../hooks/useIncidents';
import { LoadingSkeleton } from '../components/ui/LoadingSkeleton';

export const Incidents: React.FC = () => {
  const { incidents, loading } = useIncidents();
  const [filters, setFilters] = useState({
    search: '',
    tab: 'ALL' as 'ALL' | 'HIGH_CONFIDENCE' | 'HUMAN_REVIEW' | 'UNCERTAIN' | 'CONFLICT',
    turn: '',
  });

  const filteredIncidents = useMemo(() => {
    return incidents.filter((inc) => {
      if (filters.tab === 'HIGH_CONFIDENCE' && inc.status !== 'HIGH_CONFIDENCE') return false;
      if (filters.tab === 'HUMAN_REVIEW' && inc.status !== 'HUMAN_REVIEW') return false;
      if (filters.tab === 'UNCERTAIN' && inc.status !== 'UNCERTAIN') return false;
      if (filters.tab === 'CONFLICT' && inc.conflicts.length === 0) return false;

      if (filters.turn && inc.turn.toString() !== filters.turn) return false;

      if (filters.search) {
        const query = filters.search.toLowerCase();
        const matchesCar = inc.carNumber.includes(query);
        const matchesDriver = inc.driverName.toLowerCase().includes(query);
        const matchesTurn = `turn ${inc.turn}`.toLowerCase().includes(query);
        const matchesId = inc.id.includes(query);
        if (!matchesCar && !matchesDriver && !matchesTurn && !matchesId) return false;
      }

      return true;
    });
  }, [incidents, filters]);

  return (
    <PageContainer
      title="INCIDENT MANAGEMENT"
      subtitle="EVIDENCE-VERIFIED TRACK LIMIT EVENTS WITH MULTI-MODAL LOGGING"
    >
      <div className="space-y-4">
        <IncidentFilters filters={filters} onChange={setFilters} />
        {loading ? (
          <LoadingSkeleton count={8} className="h-12" />
        ) : (
          <IncidentTable incidents={filteredIncidents} />
        )}
      </div>
    </PageContainer>
  );
};
