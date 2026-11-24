import React, { useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCode, FiLayers, FiSmartphone } from 'react-icons/fi';
import { SERVICE_BLUEPRINTS, type ServiceCategory } from '../data/studioData';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceCategory) => void;
}

const SERVICE_ICONS: Record<ServiceCategory, React.ReactNode> = {
  'Web Development': <FiCode size={20} aria-hidden="true" />,
  'Mobile App': <FiSmartphone size={20} aria-hidden="true" />,
  'UI/UX Design': <FiLayers size={20} aria-hidden="true" />,
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeId, setActiveId] = useState<string>(SERVICE_BLUEPRINTS[0].id);

  const activeService =
    SERVICE_BLUEPRINTS.find((item) => item.id === activeId) ?? SERVICE_BLUEPRINTS[0];

  const handleTabKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const nextIdx =
        e.key === 'ArrowDown'
          ? (idx + 1) % SERVICE_BLUEPRINTS.length
          : (idx - 1 + SERVICE_BLUEPRINTS.length) % SERVICE_BLUEPRINTS.length;
      setActiveId(SERVICE_BLUEPRINTS[nextIdx].id);
    }
  };

  return (
    <section id="services" className="bg-canvas py-20 lg:py-28 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Split Arsitektural */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-12 border-b border-hairline">
          <div className="lg:col-span-7">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] text-ink leading-[1.12]">
              Tiga disiplin terpadu dari perumusan desain hingga rilis produksi.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-graphite text-base leading-relaxed">
              Pilih lini kapabilitas di bawah untuk melihat rincian hasil kerja, tumpukan teknologi,
              serta estimasi durasi pengerjaan standar studio kami.
            </p>
          </div>
        </div>

        {/* Komposisi Blueprint Interaktif */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Daftar Pemilih Disiplin Layanan */}
          <div
            className="lg:col-span-5 flex flex-col gap-3"
            role="tablist"
            aria-label="Daftar layanan utama ARKA Studio"
          >
            {SERVICE_BLUEPRINTS.map((service, idx) => {
              const isSelected = service.id === activeService.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  id={`tab-${service.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${service.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveId(service.id)}
                  onKeyDown={(e) => handleTabKeyDown(e, idx)}
                  className={`w-full text-left rounded-2xl p-5 sm:p-6 transition-colors duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-ink text-canvas border-ink'
                      : 'bg-paper hover:bg-stone-subtle text-ink border-hairline'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2.5 font-display font-bold text-lg sm:text-xl">
                      <span
                        className={`w-9 h-9 rounded-xl inline-flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-cobalt text-white'
                            : 'bg-canvas text-ink border border-hairline'
                        }`}
                      >
                        {SERVICE_ICONS[service.category]}
                      </span>
                      {service.category}
                    </span>
                    <span
                      className={`font-mono text-xs px-2.5 py-1 rounded-full ${
                        isSelected
                          ? 'bg-ink-elevated text-silver-tint'
                          : 'bg-canvas text-pewter'
                      }`}
                    >
                      {service.timeline}
                    </span>
                  </div>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      isSelected ? 'text-silver-tint' : 'text-graphite'
                    }`}
                  >
                    {service.lead}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Panel Spesifikasi Layanan Aktif */}
          <div
            id={`panel-${activeService.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeService.id}`}
            className="lg:col-span-7 bg-paper rounded-2xl border border-hairline p-6 sm:p-9"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-hairline">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
                {activeService.title}
              </h3>
              <span className="font-mono text-xs font-medium px-3 py-1.5 rounded-full bg-cobalt-tint text-cobalt">
                Estimasi {activeService.timeline}
              </span>
            </div>

            <p className="mt-6 text-graphite text-base sm:text-lg leading-relaxed max-w-[62ch]">
              {activeService.description}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-display font-bold text-base text-ink mb-3.5">
                  Cakupan Hasil Kerja
                </h4>
                <ul className="space-y-2.5">
                  {activeService.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-graphite">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-cobalt-tint text-cobalt inline-flex items-center justify-center shrink-0">
                        <FiCheck size={12} aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display font-bold text-base text-ink mb-3.5">
                  Teknologi &amp; Standar
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1.5 rounded-full bg-canvas border border-hairline text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm text-pewter leading-relaxed pt-4 border-t border-hairline">
                  {activeService.outcomeHighlight}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-hairline flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-pewter">
                Butuh cakupan khusus untuk tim Anda? Kami siap sesuaikan ruang lingkupnya.
              </p>
              <button
                type="button"
                onClick={() => onSelectService?.(activeService.category)}
                className="inline-flex items-center gap-2 bg-cobalt hover:bg-cobalt-deep text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors cursor-pointer"
              >
                Konsultasikan {activeService.category}
                <FiArrowUpRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
