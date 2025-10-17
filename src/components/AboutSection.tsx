// src/components/AboutSection.tsx

import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Kolom Gambar */}
                    <div className="md:w-1/2">
                        <img
                            src="https://via.placeholder.com/500x350" // Ganti dengan URL gambar Anda
                            alt="Tim kami sedang berdiskusi"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    {/* Kolom Teks */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Tentang Kami</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            MyCompany adalah agensi digital yang berfokus pada penyediaan solusi teknologi inovatif. Sejak didirikan pada tahun 2020, kami telah berkomitmen untuk membantu klien kami mencapai tujuan bisnis mereka melalui pengembangan web, aplikasi seluler, dan desain yang berpusat pada pengguna.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Visi kami adalah menjadi mitra teknologi terpercaya yang mendorong transformasi digital untuk bisnis di seluruh Indonesia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;