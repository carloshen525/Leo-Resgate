import React, { useState } from 'react';
import { Clock, Shield } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { regionalCities, highwaysCovered, businessInfo } from '../data/content';

export default function ServiceArea() {
  const [activeCity, setActiveCity] = useState(regionalCities[0]);

  return (
    <section id="atendimento" className="py-20 lg:py-24 bg-[#0a0c10] text-white relative overflow-hidden">
      
      {/* Background Skyline with gradient blend */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="/images/area-atendimento-bg-2x.jpg" 
          alt="Área de atendimento da LÉO AUTO SOCORRO em Angelim - São Luís - MA" 
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/80 to-[#0a0c10]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E51920]" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#E51920] uppercase font-['Montserrat',sans-serif]">
              ÁREA DE ATENDIMENTO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black font-['Montserrat',sans-serif] tracking-tight text-white uppercase leading-tight">
            Angelim e região de São Luís - MA
          </h2>

          <p className="mt-3 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            A LÉO AUTO SOCORRO atende Angelim e região de São Luís - MA com guincho, reboque e auto socorro 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
            
            {/* Active City Detail Card */}
            <div className="bg-[#141822] rounded-2xl p-6 border border-neutral-800 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E51920]">
                  Área Selecionada
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-green-400 font-semibold bg-green-950/40 px-2.5 py-1 rounded-full border border-green-800/40">
                  <Clock className="w-3.5 h-3.5" />
                  {activeCity.status}
                </span>
              </div>

              <h3 className="text-2xl font-black font-['Montserrat',sans-serif] text-white">
                {activeCity.name}
              </h3>
              
              <p className="text-sm text-neutral-300 mt-1 mb-4">
                {activeCity.isHub
                  ? "Localização da LÉO AUTO SOCORRO em Angelim, São Luís - MA."
                  : `Consulte a disponibilidade de atendimento em ${activeCity.name} pelo WhatsApp.`
                }
              </p>

              {/* Action Button for this location */}
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95 group"
              >
                <WhatsAppIcon className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
                <span>Solicitar Guincho em {activeCity.name} via WhatsApp</span>
              </a>
            </div>

            {/* Quick City Selector Pill List */}
            <div className="bg-[#111319] rounded-2xl p-5 border border-neutral-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Locais na Área de Atendimento
              </h4>
              <div className="flex flex-wrap gap-2">
                {regionalCities.map((city) => (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => setActiveCity(city)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeCity.name === city.name
                        ? 'bg-[#E51920] text-white shadow-sm'
                        : 'bg-neutral-800/80 text-neutral-300 hover:text-white hover:bg-neutral-700'
                    }`}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Highways List */}
            <div className="bg-[#111319] rounded-2xl p-5 border border-neutral-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#E51920]" />
                Área de Atendimento
              </h4>
              <ul className="space-y-2 text-xs text-neutral-300">
                {highwaysCovered.slice(0, 3).map((hw) => (
                  <li key={hw.name} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E51920]" />
                    <span className="font-semibold text-white">{hw.name}:</span>
                    <span className="text-neutral-400">{hw.desc}</span>
                  </li>
                ))}
              </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

