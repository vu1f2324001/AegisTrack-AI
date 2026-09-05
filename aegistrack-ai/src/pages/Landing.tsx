import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Activity, Layers, Cpu } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans">
      <div className="border-b border-[#1e2638] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-cyan-950 border border-cyan-500/40 flex items-center justify-center font-bold font-mono text-cyan-400 text-sm">
            AT
          </div>
          <span className="font-mono font-bold tracking-wider text-slate-100 text-base">
            AEGISTRACK AI
          </span>
        </div>
        <Link to="/dashboard">
          <Button variant="primary" size="sm" icon={<ArrowRight size={14} />}>
            ENTER RACE CONTROL
          </Button>
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center max-w-5xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold tracking-wider">
          <ShieldCheck size={14} /> EVIDENCE-FUSION & EXPLAINABLE AI FOR TRACK-LIMIT STEWARDING
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-mono tracking-tight text-slate-100 uppercase">
          From Detection to <span className="text-cyan-400">Decision-Ready</span> Evidence
        </h1>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
          AegisTrack transforms fragmented race data into explainable evidence for faster, more consistent track-limit stewarding.
        </p>

        <div className="pt-2">
          <Link to="/dashboard">
            <Button
              variant="primary"
              size="lg"
              className="font-mono font-bold tracking-wider px-8 py-3 text-base shadow-[0_0_25px_rgba(6,182,212,0.3)]"
              icon={<ArrowRight size={18} />}
            >
              ENTER RACE CONTROL
            </Button>
          </Link>
        </div>

        <div className="w-full pt-8 pb-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-4">
            EVIDENCE REASONING PIPELINE
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-xs font-bold text-slate-300">
            <div className="px-3 py-2 bg-slate-900 border border-slate-700 rounded">1. DETECT</div>
            <span className="text-cyan-500">→</span>
            <div className="px-3 py-2 bg-slate-900 border border-slate-700 rounded">2. FUSE</div>
            <span className="text-cyan-500">→</span>
            <div className="px-3 py-2 bg-slate-900 border border-slate-700 rounded">3. MEASURE</div>
            <span className="text-cyan-500">→</span>
            <div className="px-3 py-2 bg-slate-900 border border-slate-700 rounded">4. EXPLAIN</div>
            <span className="text-cyan-500">→</span>
            <div className="px-3 py-2 bg-slate-900 border border-slate-700 rounded">5. CONFIDENCE</div>
            <span className="text-cyan-500">→</span>
            <div className="px-3 py-2 bg-emerald-950 border border-emerald-500/50 text-emerald-400 rounded shadow-[0_0_12px_rgba(16,185,129,0.2)]">
              6. HUMAN DECISION
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left w-full pt-6">
          <div className="bg-[#0d1117] border border-[#1e2638] p-5 rounded-lg">
            <div className="w-9 h-9 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
              <Layers size={18} />
            </div>
            <h3 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider mb-1.5">
              Evidence Fusion
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              Multiple race signals (60 FPS optical video, wheel contact patches, differential GPS, CAD geometry) fused into one decision plane.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-[#1e2638] p-5 rounded-lg">
            <div className="w-9 h-9 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
              <Activity size={18} />
            </div>
            <h3 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider mb-1.5">
              Uncertainty-Aware AI
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              Does not pretend to know when data is weak. Automatically flags conflicting telemetry, lens flare, or curb occlusion for human review.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-[#1e2638] p-5 rounded-lg">
            <div className="w-9 h-9 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
              <Cpu size={18} />
            </div>
            <h3 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider mb-1.5">
              Explainable Rationale
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              No black boxes. Every proposal is backed by a transparent chain of evidence with exact centimeter excursions and frame persistency.
            </p>
          </div>
        </div>

        <div className="border-t border-[#1e2638] pt-8 mt-12 w-full text-center font-mono text-xs text-slate-400">
          <p className="text-slate-300 font-semibold mb-1">
            "AI doesn't make the penalty decision. It makes the evidence impossible to miss."
          </p>
          <p className="text-[11px] text-slate-400">
            AegisTrack Stewarding Prototype • Human-in-the-Loop Architecture
          </p>
        </div>
      </div>
    </div>
  );
};
