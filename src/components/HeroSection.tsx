import React from 'react';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import HeroCarousel from './HeroCarousel';
import type { ServiceCategory } from '../data/studioData';

interface HeroSectionProps {
  onSelectService?: (service: ServiceCategory) => void;
}

const CAPABILITY_STRIP = [
  { label: 'Web Architecture', detail: 'React 19 · TypeScript · Next.js' },
  { label: 'Mobile Engineering', detail: 'Android · iOS · Offline-First' },
  { label: 'Product UI/UX', detail: 'User Research · Figma Design Systems' },
  { label: 'Quality Standard', detail: 'WCAG AA · Core Web Vitals' },
];

const HeroSection: React.FC<HeroSectionProps> = ({ onSelectService }) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Kolom Kiri: Tesis Utama Studio */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h1 className="font-display font-extrabold text-[2.4rem] sm:text-[3.1rem] xl:text-[3.55rem] leading-[1.06] tracking-[-0.03em] text-ink">
              Membangun produk web &amp; mobile yang siap tumbuh bersama{' '}
              <span className="text-cobalt">bisnis Anda.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-graphite leading-relaxed max-w-[54ch]">
              ARKA Studio menyatukan rekayasa perangkat lunak berpresisi tinggi dan desain UI/UX
              berpusat pada manusia dalam satu tim lintas disiplin—dari perumusan prototipe hingga
              rilis produksi.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-cobalt hover:bg-cobalt-deep text-white font-semibold px-6 py-3.5 rounded-full transition-colors duration-200 w-full sm:w-auto"
              >
                Mulai Diskusi Proyek
                <FiArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 bg-paper hover:bg-stone-subtle text-ink border border-hairline hover:border-ink font-semibold px-6 py-3.5 rounded-full transition-colors duration-200 w-full sm:w-auto"
              >
                Lihat Studi Kasus
                <FiArrowRight size={17} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-9 pt-6 border-t border-hairline w-full flex items-center gap-3.5">
              <span
                className="w-2.5 h-2.5 rounded-full bg-signal-mint shrink-0"
                aria-hidden="true"
              />
              <p className="text-sm text-pewter">
                Tersedia slot kolaborasi baru untuk pengembangan produk &amp; audit UX kuartal ini.
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Dek Studi Kasus Interaktif */}
          <div className="lg:col-span-7">
            <HeroCarousel onSelectService={onSelectService} />
          </div>
        </div>

        {/* Pita Kapabilitas Teknis di Bagian Bawah Hero */}
        <div className="mt-14 pt-8 border-t border-hairline grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITY_STRIP.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <p className="font-display font-bold text-base text-ink">{item.label}</p>
              <p className="font-mono text-xs text-pewter">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
