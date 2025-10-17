// src/components/HeroSection.tsx

import React from 'react';
import HeroCarousel from './HeroCarousel'; // Impor komponen carousel baru

const HeroSection: React.FC = () => {
    return (
        <section className="relative w-full overflow-hidden">
            {/*
              Kita membungkus carousel di dalam section ini.
              Semua tampilan dan logika kini ada di dalam HeroCarousel.
            */}
            <HeroCarousel />
        </section>
    );
};

export default HeroSection;