import React from 'react';
import { Agent } from '../types';
import { AGENTS } from '../data';
import { Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';

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
          className="group cursor-pointer flex flex-col space-y-4 bg-white p-4 rounded-sm border border-[#EAE4DA] hover:border-[#B89358]/60 hover:shadow-lg transition-all duration-300"
        >
          {/* Agent Portrait Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-xs bg-[#FAF8F5]">
            <img
              src={agent.photo}
              alt={agent.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Subtle bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1B18]/70 via-transparent to-transparent" />

            {/* License Tag */}
            <div className="absolute top-3 left-3">
              <span className="text-[9px] font-mono font-medium px-2 py-1 rounded-xs bg-white/90 text-[#1D1B18] backdrop-blur-sm">
                {agent.licenseNumber}
              </span>
            </div>

            {/* Hover overlay hint */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-[#1D1B18]/90 text-white text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-xs backdrop-blur-sm flex items-center gap-1 font-medium">
                Advisor Dossier <ArrowUpRight className="w-3 h-3 text-[#DFC9A8]" />
              </span>
            </div>
          </div>

          {/* Agent Info Meta */}
          <div className="space-y-1 pt-1">
            <h3 className="font-serif text-xl font-normal text-[#1D1B18] group-hover:text-[#8C6A34] transition-colors">
              {agent.name}
            </h3>
            
            <p className="text-xs text-[#8C6A34] font-medium tracking-wide">
              {agent.role}
            </p>

            <div className="flex items-center justify-between text-xs text-[#6F6A61] font-light pt-2 border-t border-[#F4EFE6]">
              <span className="font-mono text-[11px]">{agent.phone}</span>
              <span className="text-[10px] uppercase tracking-wider font-medium text-[#8C6A34]">{agent.totalVolume}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
