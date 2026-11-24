import React from 'react';
import { Star, ExternalLink, ShieldCheck, HeartHandshake, Info } from 'lucide-react';
import { businessInfo, customerReviews } from '../data/content';

export default function ReviewsSection() {
  return (
    <section id="avaliacoes" className="py-20 lg:py-24 bg-[#0d0f14] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E51920]" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#E51920] uppercase font-['Montserrat',sans-serif]">
              REPUTAÇÃO & SATISFAÇÃO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black font-['Montserrat',sans-serif] tracking-tight text-white uppercase leading-tight">
            Compromisso com cada cliente atendido
          </h2>

          <p className="mt-3 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Confira os relatos de clientes atendidos pela LÉO AUTO SOCORRO.
          </p>
        </div>

        {/* Google Reviews Badge Showcase Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#141822] to-[#0c0e14] border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-center">
          
          {/* Rating Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700/80 mb-6">
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google" 
              className="w-4 h-4" 
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="text-xs font-bold text-neutral-200">Google Avaliações</span>
          </div>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-7 h-7 sm:w-8 sm:h-8 ${i < 4 ? 'fill-amber-400' : 'fill-amber-400/30'}`} />
            ))}
          </div>

          <div className="text-3xl sm:text-4xl font-black font-['Montserrat',sans-serif] text-white">
            4,3 <span className="text-sm font-semibold text-neutral-400 font-sans">estrelas • 17 avaliações</span>
          </div>

          <p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-lg mx-auto">
            Avaliações de clientes da LÉO AUTO SOCORRO.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-left">
            {customerReviews.map((review) => (
              <blockquote key={review.name} className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-4">
                <p className="text-sm text-neutral-200">“{review.quote}”</p>
                <footer className="mt-3 text-xs font-bold text-white">{review.name}</footer>
              </blockquote>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <a
              href={businessInfo.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95 group"
            >
              <ExternalLink className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
              <span>Avaliar no Google</span>
            </a>

            <a
              href={businessInfo.phoneCallUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl text-sm transition-all border border-neutral-700"
            >
              <span>Fale Conosco: {businessInfo.phoneDisplay}</span>
            </a>
          </div>

          {/* Transparent Notice about Client Reviews */}
          <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-start sm:items-center justify-center gap-2.5 text-xs text-neutral-400">
            <Info className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong>Avaliação:</strong> 4,3 estrelas em 17 avaliações.
            </span>
          </div>

        </div>

        {/* 3 Pillars of Trust */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5 text-center">
            <ShieldCheck className="w-8 h-8 text-[#E51920] mx-auto mb-3" />
            <h4 className="font-bold text-white text-base">Remoção Segura</h4>
            <p className="text-xs text-neutral-400 mt-1">Cuidado e atenção durante a remoção e o transporte do veículo.</p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5 text-center">
            <HeartHandshake className="w-8 h-8 text-[#E51920] mx-auto mb-3" />
            <h4 className="font-bold text-white text-base">Atendimento 24 horas</h4>
            <p className="text-xs text-neutral-400 mt-1">Disponibilidade para ajudar nos momentos de emergência.</p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5 text-center">
            <ExternalLink className="w-8 h-8 text-[#E51920] mx-auto mb-3" />
            <h4 className="font-bold text-white text-base">Atendimento Comprometido</h4>
            <p className="text-xs text-neutral-400 mt-1">Atenção às necessidades do cliente em cada atendimento.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

