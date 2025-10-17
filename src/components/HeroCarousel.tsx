// src/components/HeroCarousel.tsx

import React from 'react';
// 1. Impor komponen dan modul yang dibutuhkan dari Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// 2. Impor file CSS Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroCarousel: React.FC = () => {
    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto-format&fit=crop',
            title: 'Membangun Solusi Digital Inovatif',
            description: 'Kami membantu bisnis Anda bertransformasi melalui teknologi terdepan.',
        },
        {
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto-format&fit=crop',
            title: 'Desain yang Berpusat Pada Pengguna',
            description: 'Fokus pada pengalaman pengguna untuk hasil yang maksimal.',
        },
        {
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740&auto-format&fit=crop',
            title: 'Tim Profesional & Berpengalaman',
            description: 'Didukung oleh talenta terbaik di bidangnya.',
        },
    ];

    return (
        <div className="w-full h-[60vh] relative">
            <Swiper
                // 3. Konfigurasi Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                navigation={true} // Menampilkan panah navigasi
                pagination={{ clickable: true }} // Menampilkan titik navigasi
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
                                <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-down">
                                    {slide.title}
                                </h1>
                                <p className="mt-4 text-lg max-w-2xl animate-fade-in-up">
                                    {slide.description}
                                </p>
                                <button className="mt-8 bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                                    Pelajari Lebih Lanjut
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroCarousel;