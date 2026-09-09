import React from 'react';
import { Agent } from '../types';
import { PROPERTIES, AGENCY_INFO } from '../data';
import { X, Phone, Mail, Award, CheckCircle, Star, Calendar, ArrowRight, ShieldCheck, MessageSquare } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white border border-[#EAE4DA] w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl relative my-8 text-[#1D1B18]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-[#6F6A61] hover:text-[#1D1B18] p-2 rounded-full border border-[#EAE4DA] transition-colors cursor-pointer shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column: Photo & Direct Quick Contacts */}
          <div className="md:col-span-5 bg-[#FAF8F5] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#EAE4DA]">
            <div className="space-y-6">
              <div className="relative rounded-xs overflow-hidden border border-[#EAE4DA] aspect-square">
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 text-[10px] text-[#8C6A34] font-semibold font-mono rounded-xs border border-[#EAE4DA] shadow-xs">
                  {agent.licenseNumber}
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-light text-[#1D1B18]">{agent.name}</h3>
                <p className="text-xs text-[#8C6A34] font-medium uppercase tracking-wider">{agent.role}</p>
                <div className="flex items-center gap-1.5 pt-1">
                  <div className="flex text-[#B89358]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B89358]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#6F6A61]">({agent.reviewCount} Verified Closings)</span>
                </div>
              </div>

              {/* Stat Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white border border-[#EAE4DA] p-3 rounded-xs shadow-xs">
                  <p className="text-[10px] text-[#6F6A61] uppercase tracking-wider">Career Volume</p>
                  <p className="text-lg font-serif font-bold text-[#1D1B18]">{agent.totalVolume}</p>
                </div>
                <div className="bg-white border border-[#EAE4DA] p-3 rounded-xs shadow-xs">
                  <p className="text-[10px] text-[#6F6A61] uppercase tracking-wider">Experience</p>
                  <p className="text-lg font-serif font-bold text-[#8C6A34]">{agent.experienceYears} Years</p>
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
                className="w-full py-3 bg-[#1D1B18] hover:bg-[#8C6A34] text-white font-medium text-xs uppercase tracking-widest rounded-xs transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Private Advisory</span>
              </button>

              <a
                href={`https://wa.me/${AGENCY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Direct%20inquiry%20for%20${encodeURIComponent(agent.name)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-medium uppercase tracking-widest rounded-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct WhatsApp Desk</span>
              </a>

              <div className="text-center pt-2">
                <span className="text-[11px] font-mono text-[#6F6A61]">{agent.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Credentials & Listed Estates */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
            
            {/* Bio Narrative */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C6A34]">
                Partner Dossier
              </span>
              <h4 className="font-serif text-2xl text-[#1D1B18]">About {agent.name}</h4>
              <p className="text-xs sm:text-sm text-[#4A453E] font-light leading-relaxed">
                {agent.bio}
              </p>
            </div>

            {/* Specialties Badges */}
            <div className="space-y-2 pt-2 border-t border-[#F4EFE6]">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#6F6A61]">
                Practice Areas & Specialization
              </span>
              <div className="flex flex-wrap gap-2">
                {agent.specialties.map((spec, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#FAF8F5] border border-[#EAE4DA] text-xs text-[#1D1B18] rounded-xs font-light"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#6F6A61]">
                Languages Spoken
              </span>
              <p className="text-xs text-[#1D1B18] font-light">
                {agent.languages.join(' • ')}
              </p>
            </div>

            {/* Active Property Mandates */}
            <div className="space-y-3 pt-4 border-t border-[#F4EFE6]">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C6A34]">
                Active Private Mandates ({agentProperties.length})
              </span>

              {agentProperties.length === 0 ? (
                <p className="text-xs text-[#6F6A61] italic">
                  Additional trophy estates held under private non-disclosure agreement. Contact advisor directly.
                </p>
              ) : (
                <div className="space-y-3">
                  {agentProperties.map((prop) => (
                    <div
                      key={prop.id}
                      onClick={() => {
                        onClose();
                        onSelectProperty(prop.id);
                      }}
                      className="p-3 bg-[#FAF8F5] hover:bg-white border border-[#EAE4DA] hover:border-[#8C6A34] rounded-xs transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={prop.heroImage}
                          alt={prop.title}
                          className="w-12 h-12 rounded-xs object-cover"
                        />
                        <div className="space-y-0.5">
                          <h5 className="text-xs font-medium text-[#1D1B18] group-hover:text-[#8C6A34] transition-colors">
                            {prop.title}
                          </h5>
                          <p className="text-[11px] text-[#6F6A61]">
                            {prop.neighborhood} • {prop.city}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-serif font-semibold text-[#8C6A34] block">
                          {prop.priceCr || prop.priceFormatted}
                        </span>
                        <span className="text-[10px] text-[#6F6A61] flex items-center justify-end gap-1 group-hover:text-[#1D1B18]">
                          View <ArrowRight className="w-2.5 h-2.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Trust Assurance */}
            <div className="p-4 bg-[#FAF8F5] border border-[#DFC9A8] rounded-xs flex items-center gap-3 text-xs text-[#6F6A61]">
              <ShieldCheck className="w-5 h-5 text-[#8C6A34] shrink-0" />
              <span>
                All transactions protected by state RERA bank escrow compliance and High Court title warranty.
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
