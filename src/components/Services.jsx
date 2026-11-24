import { CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { businessInfo } from '../data/content';

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-24 bg-white text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E51920]" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#E51920] uppercase font-['Montserrat',sans-serif]">
              NOSSOS SERVIÇOS
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black font-['Montserrat',sans-serif] tracking-tight text-neutral-900 leading-tight">
            Guincho, reboque e auto socorro
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Atendimento 24 horas em Angelim e região de São Luís - MA para carros, motos e veículos em geral.
          </p>
        </div>

        {/* Main Service Details */}
        <div className="mt-8 bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-md bg-[#E51920] text-xs font-bold uppercase tracking-wider">
                  Serviços
                </span>
                <h4 className="text-xl sm:text-2xl font-black font-['Montserrat',sans-serif] text-white">
                  Guincho, reboque e auto socorro
                </h4>
              </div>
              
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mt-2">
                Atendimento 24 horas para guincho, reboque e auto socorro, com transporte de carros e motos e remoção segura em Angelim e região de São Luís - MA.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs font-medium text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Guincho 24 horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Reboque e remoção segura</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Auto socorro e transporte de carros e motos</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-2.5">
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95 group"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Solicitar pelo WhatsApp</span>
              </a>

              <a
                href={businessInfo.phoneCallUrl}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl text-sm transition-all border border-neutral-700"
              >
                <span>Ou ligue: {businessInfo.phoneDisplay}</span>
              </a>
            </div>

          </div>
        </div>

        {/* Extra Service Guarantees */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E51920] flex items-center justify-center flex-shrink-0 font-bold">
              1
            </div>
            <div>
              <h5 className="font-bold text-neutral-900 text-sm">Atendimento 24 horas</h5>
              <p className="text-xs text-neutral-600 mt-0.5">
                Estamos disponíveis para ajudar em situações de emergência.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E51920] flex items-center justify-center flex-shrink-0 font-bold">
              2
            </div>
            <div>
              <h5 className="font-bold text-neutral-900 text-sm">Remoção Segura</h5>
              <p className="text-xs text-neutral-600 mt-0.5">
                Cuidado e segurança durante o transporte do veículo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E51920] flex items-center justify-center flex-shrink-0 font-bold">
              3
            </div>
            <div>
              <h5 className="font-bold text-neutral-900 text-sm">Atendimento na Região</h5>
              <p className="text-xs text-neutral-600 mt-0.5">
                Atendemos Angelim e região de São Luís - MA.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

