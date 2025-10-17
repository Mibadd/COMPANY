// src/components/HeroCarousel.tsx

import React from 'react';
import Slider from 'react-slick';

// Impor CSS untuk styling default dari slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel: React.FC = () => {
    // Pengaturan untuk carousel
    const settings = {
        dots: true,         // Menampilkan titik-titik navigasi di bawah
        infinite: true,     // Loop carousel tanpa henti
        speed: 500,         // Kecepatan transisi dalam milidetik
        slidesToShow: 1,    // Hanya tampilkan 1 slide dalam satu waktu
        slidesToScroll: 1,  // Geser 1 slide setiap kali
        autoplay: true,     // Mainkan otomatis
        autoplaySpeed: 3000, // Pindah slide setiap 3 detik
        fade: false,         // Gunakan efek fade untuk transisi
        cssEase: 'linear'   // Tipe easing untuk transisi
    };

    // Data untuk slide. Anda bisa ganti gambar dan teksnya.
    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop',
            title: 'Membangun Solusi Digital Inovatif',
            description: 'Kami membantu bisnis Anda bertransformasi melalui teknologi terdepan.',
        },
        {
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto=format&fit=crop',
            title: 'Desain yang Berpusat Pada Pengguna',
            description: 'Fokus pada pengalaman pengguna untuk hasil yang maksimal.',
        },
        {
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740&auto=format&fit=crop',
            title: 'Tim Profesional & Berpengalaman',
            description: 'Didukung oleh talenta terbaik di bidangnya.',
        },
    ];

    return (
        <div className="w-full">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative">
                        {/* Background Gambar */}
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-[60vh] object-cover"
                        />
                        {/* Overlay Gelap untuk Kontras */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Konten Teks di Tengah */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
                            <h1 className="text-4xl md:text-6xl font-bold">
                                {slide.title}
                            </h1>
                            <p className="mt-4 text-lg max-w-2xl">
                                {slide.description}
                            </p>
                            <button className="mt-8 bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                                Pelajari Lebih Lanjut
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroCarousel;