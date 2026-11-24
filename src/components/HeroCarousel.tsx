import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/effect-fade';

import { HERO_SLIDES, type ServiceCategory } from '../data/studioData';

interface HeroCarouselProps {
  onSelectService?: (service: ServiceCategory) => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onSelectService }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    swiperInstance?.slideToLoop(index);
  };

  const handleTabKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const nextIdx =
        e.key === 'ArrowRight'
          ? (idx + 1) % HERO_SLIDES.length
          : (idx - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
      handleTabClick(nextIdx);
    }
  };

  return (
    <div className="bg-ink text-canvas rounded-2xl overflow-hidden shadow-stage flex flex-col">
      {/* Bar kontrol disiplin layanan di bagian atas dek */}
      <div className="px-4 sm:px-6 pt-4 pb-3 border-b border-ink-border flex flex-wrap items-center justify-between gap-3">
        <div
          className="flex flex-wrap items-center gap-1.5"
          role="tablist"
          aria-label="Sorotan lini kapabilitas"
        >
          {HERO_SLIDES.map((slide, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => handleTabClick(idx)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-cobalt text-white'
                    : 'bg-ink-elevated text-silver-tint hover:text-white'
                }`}
              >
                {slide.discipline}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Sorotan sebelumnya"
            className="w-8 h-8 rounded-full bg-ink-elevated hover:bg-ink-border text-silver-tint hover:text-white inline-flex items-center justify-center transition-colors cursor-pointer"
          >
            <FiChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Sorotan berikutnya"
            className="w-8 h-8 rounded-full bg-ink-elevated hover:bg-ink-border text-silver-tint hover:text-white inline-flex items-center justify-center transition-colors cursor-pointer"
          >
            <FiChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Indikator progres per slide */}
      <div className="grid grid-cols-3 gap-1.5 px-4 sm:px-6 pt-2.5" aria-hidden="true">
        {HERO_SLIDES.map((slide, idx) => (
          <div key={slide.id} className="h-1 rounded-full bg-ink-border overflow-hidden">
            {activeIndex === idx && (
              <div key={`${slide.id}-${activeIndex}`} className="h-full bg-cobalt animate-slide-progress" />
            )}
          </div>
        ))}
      </div>

      {/* Area utama Swiper */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        slidesPerView={1}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full"
      >
        {HERO_SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="p-4 sm:p-6 flex flex-col gap-5">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-ink-elevated">
                <img
                  src={slide.imageUrl}
                  alt={`${slide.projectTitle} — ${slide.discipline}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex flex-wrap items-end justify-between gap-2">
                  <div>
                    <p className="text-xs text-silver-tint">{slide.clientSector}</p>
                    <p className="font-display font-bold text-lg text-white">
                      {slide.projectTitle}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {slide.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-ink/85 text-silver-tint border border-ink-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-end pt-1">
                <div className="sm:col-span-8">
                  <p className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
                    {slide.headline}
                  </p>
                  <p className="mt-2 text-sm text-silver-tint leading-relaxed">
                    {slide.summary}
                  </p>
                </div>

                <div className="sm:col-span-4 pt-4 sm:pt-0 sm:pl-5 border-t sm:border-t-0 sm:border-l border-ink-border flex flex-col justify-between gap-2">
                  <div>
                    <p className="font-mono font-semibold text-2xl text-white">
                      {slide.metricValue}
                    </p>
                    <p className="text-xs text-silver-tint leading-snug mt-0.5">
                      {slide.metricLabel}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectService?.(slide.discipline)}
                    className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-cobalt-tint transition-colors cursor-pointer"
                  >
                    Konsultasi {slide.discipline}
                    <FiArrowUpRight size={14} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
