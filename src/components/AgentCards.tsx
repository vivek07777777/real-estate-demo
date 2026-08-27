import React from 'react';
import { Agent } from '../types';
import { AGENTS } from '../data';
import { Phone, ArrowUpRight } from 'lucide-react';

interface AgentCardsProps {
  onSelectAgent: (agent: Agent) => void;
  onContactAgent: (agent: Agent) => void;
}

export default function AgentCards({ onSelectAgent }: AgentCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {AGENTS.map((agent) => (
        <div
          key={agent.id}
          onClick={() => onSelectAgent(agent)}
          className="group cursor-pointer flex flex-col space-y-4"
        >
          {/* Agent Portrait Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#11141e] border border-white/10 group-hover:border-[#c5a880]/50 transition-colors">
            <img
              src={agent.photo}
              alt={agent.name}
              className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Subtle bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Hover overlay hint */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-black/80 text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm border border-white/15 backdrop-blur-sm flex items-center gap-1">
                Profile <ArrowUpRight className="w-3 h-3 text-[#c5a880]" />
              </span>
            </div>
          </div>

          {/* Agent Info Meta */}
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-normal text-white group-hover:text-[#dfc9a8] transition-colors">
              {agent.name}
            </h3>
            
            <p className="text-xs text-[#c5a880] font-light tracking-wide">
              {agent.role.split('&')[0]}
            </p>

            <div className="flex items-center justify-between text-xs text-slate-400 font-light pt-1">
              <span className="font-mono">{agent.phone}</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400">{agent.experienceYears}y Exp</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

