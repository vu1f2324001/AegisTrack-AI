import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <PageContainer>
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center font-mono space-y-4">
        <h2 className="text-4xl font-bold text-cyan-400">404</h2>
        <p className="text-slate-400 text-sm">TELEMETRY SECTOR NOT LOCATED</p>
        <Link to="/dashboard">
          <Button variant="primary" size="md">
            RETURN TO RACE CONTROL
          </Button>
        </Link>
      </div>
    </PageContainer>
  );
};
