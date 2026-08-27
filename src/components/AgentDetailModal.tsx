import React from 'react';
import { Agent } from '../types';
import { PROPERTIES } from '../data';
import { X, Phone, Mail, Award, CheckCircle, Star, Calendar, ArrowRight, ShieldCheck, Instagram, Linkedin } from 'lucide-react';

interface AgentDetailModalProps {
  agent: Agent | null;
  onClose: () => void;
  onBookAgentConsult: (agent: Agent) => void;
  onSelectProperty: (propertyId: string) => void;
}

export default function AgentDetailModal({
  agent,
  onClose,
  onBookAgentConsult,
  onSelectProperty
}: AgentDetailModalProps) {
  if (!agent) return null;

  const agentProperties = PROPERTIES.filter((p) => p.agentId === agent.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#0f121a] border border-white/15 w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-slate-300 hover:text-white p-2 rounded-full border border-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column: Photo & Direct Quick Contacts */}
          <div className="md:col-span-5 bg-[#0a0c11] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
            <div className="space-y-6">
              <div className="relative rounded-sm overflow-hidden border border-white/10 aspect-square">
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 left-3 bg-[#08090c]/90 px-2.5 py-1 text-[10px] text-[#dfc9a8] font-semibold tracking-wider rounded-sm border border-white/10">
                  {agent.licenseNumber}
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-light text-white">{agent.name}</h3>
                <p className="text-xs text-[#c5a880] font-medium uppercase tracking-wider">{agent.role}</p>
                <div className="flex items-center gap-1.5 pt-1">
                  <div className="flex text-[#c5a880]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#c5a880]" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">({agent.reviewCount} Verified Closings)</span>
                </div>
              </div>

              {/* Stat Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white/[0.03] border border-white/10 p-3 rounded-sm">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Career Volume</p>
                  <p className="text-lg font-serif font-bold text-white">{agent.totalVolume}</p>
                </div>
                <div className="bg-white/[0.03] border border-white/10 p-3 rounded-sm">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Experience</p>
                  <p className="text-lg font-serif font-bold text-[#c5a880]">{agent.experienceYears} Years</p>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-6 space-y-2.5">
              <button
                onClick={() => {
                  onClose();
                  onBookAgentConsult(agent);
                }}
                className="w-full py-3 bg-[#c5a880] hover:bg-[#dfc9a8] text-[#08090c] font-semibold text-xs uppercase tracking-widest rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Private Advisory</span>
              </button>

              <a
                href={`tel:${agent.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white font-medium text-xs rounded-sm border border-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Call {agent.phone}</span>
              </a>

              <a
                href={`mailto:${agent.email}`}
                className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white font-medium text-xs rounded-sm border border-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>{agent.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Bio, Awards, Specialties & Listings */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
            
            {/* Biography */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Professional Background & Philosophy</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {agent.bio}
              </p>
            </div>

            {/* Specialties & Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <h5 className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Specializations</h5>
                <div className="flex flex-wrap gap-1.5">
                  {agent.specialties.map((spec, i) => (
                    <span key={i} className="text-[11px] bg-white/5 text-slate-200 border border-white/10 px-2.5 py-1 rounded-sm">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Languages Spoken</h5>
                <div className="flex flex-wrap gap-1.5">
                  {agent.languages.map((lang, i) => (
                    <span key={i} className="text-[11px] bg-[#c5a880]/10 text-[#dfc9a8] border border-[#c5a880]/20 px-2.5 py-1 rounded-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Recognitions & Accolades */}
            <div className="space-y-2.5 pt-2">
              <h5 className="text-[11px] uppercase tracking-wider text-slate-400 font-medium flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Industry Recognitions & Accolades</span>
              </h5>
              <div className="space-y-1.5">
                {agent.awards.map((award, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                    <span>{award}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Active Exclusive Listings Under This Agent */}
            {agentProperties.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h5 className="text-xs uppercase tracking-wider text-white font-medium">
                  Exclusive Estates Represented by {agent.name}
                </h5>
                <div className="space-y-2">
                  {agentProperties.map((prop) => (
                    <div
                      key={prop.id}
                      onClick={() => {
                        onClose();
                        onSelectProperty(prop.id);
                      }}
                      className="p-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-sm flex items-center justify-between gap-3 cursor-pointer transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={prop.heroImage}
                          alt={prop.title}
                          className="w-14 h-12 object-cover rounded-sm border border-white/10"
                        />
                        <div>
                          <p className="text-xs font-semibold text-white group-hover:text-[#dfc9a8] transition-colors">{prop.title}</p>
                          <p className="text-[11px] text-slate-400">{prop.neighborhood} • {prop.bedrooms} Beds • {prop.sqft.toLocaleString()} Sqft</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs font-serif font-bold text-[#c5a880]">{prop.priceFormatted}</p>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1 justify-end">
                          View <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
