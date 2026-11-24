import React, { useEffect, useState } from 'react';
import { FiArrowUpRight, FiX } from 'react-icons/fi';
import {
  PORTFOLIO_ITEMS,
  type PortfolioCaseStudy,
  type ServiceCategory,
} from '../data/studioData';

type FilterOption = 'Semua' | ServiceCategory;

const FILTER_TABS: FilterOption[] = ['Semua', 'Web Development', 'Mobile App', 'UI/UX Design'];

interface PortfolioSectionProps {
  onSelectService?: (service: ServiceCategory) => void;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('Semua');
  const [selectedCase, setSelectedCase] = useState<PortfolioCaseStudy | null>(null);

  const filteredItems =
    activeFilter === 'Semua'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  useEffect(() => {
    if (!selectedCase) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCase(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCase]);

  const handleStartSimilarProject = (category: ServiceCategory) => {
    setSelectedCase(null);
    onSelectService?.(category);
  };

  return (
    <section id="portfolio" className="bg-ink text-canvas py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header & Bar Filter Kategori */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-ink-border">
          <div className="max-w-2xl">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] text-white leading-[1.12]">
              Karya terpilih yang memecahkan hambatan operasional nyata.
            </h2>
            <p className="mt-4 text-silver-tint text-base leading-relaxed">
              Setiap studi kasus merangkum tantangan awal, pendekatan arsitektur atau desain yang
              diterapkan, serta dampaknya bagi bisnis mitra.
            </p>
          </div>

          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter kategori portofolio"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab;
              const count =
                tab === 'Semua'
                  ? PORTFOLIO_ITEMS.length
                  : PORTFOLIO_ITEMS.filter((i) => i.category === tab).length;
              return (
                <button
                  key={tab}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(tab)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-cobalt text-white'
                      : 'bg-ink-elevated text-silver-tint hover:text-white border border-ink-border'
                  }`}
                >
                  <span>{tab}</span>
                  <span className="font-mono text-xs opacity-80">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Asimetris Studi Kasus */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-7">
          {filteredItems.map((item, idx) => {
            // Pola bentang asimetris 7/5 lalu 5/7 saat menampilkan banyak kartu
            const rowIndex = Math.floor(idx / 2);
            const isWide =
              filteredItems.length > 2 &&
              ((rowIndex % 2 === 0 && idx % 2 === 0) || (rowIndex % 2 === 1 && idx % 2 === 1));
            const colSpanClass = isWide ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <article
                key={item.id}
                className={`${colSpanClass} group bg-ink-elevated rounded-2xl border border-ink-border hover:border-silver-tint/50 overflow-hidden flex flex-col justify-between transition-colors duration-300`}
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-ink">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-studio group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-ink/85 text-white border border-ink-border backdrop-blur-sm">
                        {item.category}
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-ink/85 text-silver-tint border border-ink-border">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <p className="text-xs text-silver-tint">{item.clientType}</p>
                    <h3 className="mt-1.5 font-display font-bold text-xl sm:text-2xl text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base text-silver-tint leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-ink-border flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-ink text-silver-tint border border-ink-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCase(item)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-cobalt-tint transition-colors cursor-pointer"
                  >
                    Bedah Studi Kasus
                    <FiArrowUpRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal Detail Studi Kasus */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-modal-title"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-paper text-ink rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-stage"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/8] bg-ink overflow-hidden">
              <img
                src={selectedCase.imageUrl}
                alt={selectedCase.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedCase(null)}
                aria-label="Tutup rincian studi kasus"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-ink/85 hover:bg-ink text-white inline-flex items-center justify-center transition-colors cursor-pointer"
              >
                <FiX size={18} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-cobalt-tint text-cobalt font-semibold">
                  {selectedCase.category}
                </span>
                <span className="text-pewter">{selectedCase.clientType}</span>
                <span className="font-mono text-pewter">· {selectedCase.year}</span>
              </div>

              <h3
                id="case-modal-title"
                className="mt-3 font-display font-extrabold text-2xl sm:text-3xl text-ink"
              >
                {selectedCase.title}
              </h3>

              <div className="mt-6 pt-6 border-t border-hairline grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-display font-bold text-sm text-ink">Tantangan Awal</h4>
                  <p className="mt-1.5 text-sm text-graphite leading-relaxed">
                    {selectedCase.challenge}
                  </p>
                </div>
                <div className="sm:pl-6 sm:border-l sm:border-hairline">
                  <h4 className="font-display font-bold text-sm text-ink">Solusi ARKA Studio</h4>
                  <p className="mt-1.5 text-sm text-graphite leading-relaxed">
                    {selectedCase.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 py-4 border-y border-hairline">
                {selectedCase.impactMetrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-mono font-semibold text-2xl text-cobalt">{metric.value}</p>
                    <p className="text-xs text-pewter mt-0.5">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedCase.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded-full bg-canvas border border-hairline text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleStartSimilarProject(selectedCase.category)}
                  className="inline-flex items-center gap-2 bg-cobalt hover:bg-cobalt-deep text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  Bangun Proyek Serupa
                  <FiArrowUpRight size={16} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
