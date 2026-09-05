import React, { useState } from 'react';
import { Incident } from '../../types/incident';
import { Modal } from '../ui/Modal';
import { ExplanationPanel } from './ExplanationPanel';
import { Search } from 'lucide-react';
import { Button } from '../ui/Button';

interface ShowMeWhyProps {
  incident: Incident;
}

export const ShowMeWhy: React.FC<ShowMeWhyProps> = ({ incident }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        size="lg"
        onClick={() => setIsOpen(true)}
        className="w-full font-mono font-bold tracking-wider uppercase py-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
        icon={<Search size={18} />}
      >
        🔍 SHOW ME WHY
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="WHY WAS THIS INCIDENT FLAGGED?"
        subtitle={`Incident #${incident.id} • Car #${incident.carNumber} • Lap ${incident.lap} (Turn ${incident.turn})`}
        maxWidth="max-w-2xl"
      >
        <ExplanationPanel incident={incident} />
      </Modal>
    </>
  );
};
