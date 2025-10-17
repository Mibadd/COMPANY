// src/components/Navbar.tsx

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    // State untuk melacak link mana yang aktif
    const [activeLink, setActiveLink] = useState<string>('');

    // Efek untuk mendengarkan event scroll
    useEffect(() => {
        const handleScroll = () => {
            // Sesuaikan array ini dengan ID section yang ada di navbar Anda
            const sections = ['about', 'services', 'portfolio', 'team', 'news', 'contact'];
            let currentSection = '';

            for (const id of sections) {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // Offset 150px dari atas, agar highlight berpindah saat section mendekati bagian atas
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = id;
                        break;
                    }
                }
            }

            // Hapus highlight jika scroll kembali ke paling atas
            if (window.scrollY === 0) {
                currentSection = '';
            }

            setActiveLink(currentSection);
        };

        // Tambahkan event listener
        window.addEventListener('scroll', handleScroll);

        // Hapus event listener saat komponen tidak lagi digunakan
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Efek ini hanya berjalan sekali

    // Fungsi untuk memberikan kelas CSS berdasarkan state activeLink
    const getLinkClass = (id: string): string => {
        if (activeLink === id) {
            return 'text-blue-600 font-semibold'; // Style untuk link aktif
        }
        return 'text-gray-600 hover:text-blue-600'; // Style untuk link non-aktif
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a className="font-bold text-2xl text-blue-600">
                    MyCompany
                </a>
                <div className="hidden md:flex space-x-6">
                    {/* 4. Terapkan fungsi getLinkClass ke setiap link */}
                    <a href="#about" className={getLinkClass('about')}>Tentang Kami</a>
                    <a href="#services" className={getLinkClass('services')}>Layanan</a>
                    <a href="#portfolio" className={getLinkClass('portfolio')}>Portofolio</a>
                    <a href="#team" className={getLinkClass('team')}>Tim Kami</a>
                    <a href="#news" className={getLinkClass('news')}>Berita</a>
                    <a href="#contact" className={getLinkClass('contact')}>Kontak</a>
                </div>
                {/* Mobile Menu Button bisa ditambahkan di sini */}
            </div>
        </nav>
    );
};

export default Navbar;