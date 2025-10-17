// src/components/PortfolioSection.tsx

import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Ikon untuk link eksternal

// Interface untuk properti setiap item portofolio
interface PortfolioItemProps {
    imageUrl: string;
    category: string;
    title: string;
    description: string;
}

const PortfolioCard: React.FC<PortfolioItemProps> = ({ imageUrl, category, title, description }) => {
    return (
        <div
            className="relative h-80 w-full rounded-lg overflow-hidden group shadow-lg"
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent 
                       flex flex-col justify-end p-6
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <p className="text-sm font-semibold text-blue-300">{category}</p>
                    <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
                    <p className="text-gray-300 mt-2 text-sm">{description}</p>
                    <a href="#" className="flex items-center mt-4 text-white font-semibold hover:underline">
                        Lihat Proyek <FaExternalLinkAlt className="ml-2" size={12} />
                    </a>
                </div>
            </div>
        </div>
    );
};

const PortfolioSection: React.FC = () => {
    // Data portofolio placeholder. Ganti dengan data proyek Anda.
    const portfolioItems = [
        {
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop',
            category: 'WEB DEVELOPMENT',
            title: 'Dashboard Analitik',
            description: 'Pengembangan dashboard interaktif untuk visualisasi data perusahaan.',
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1887&auto=format&fit=crop',
            category: 'UI/UX DESIGN',
            title: 'Aplikasi Mobile E-commerce',
            description: 'Desain ulang antarmuka aplikasi mobile untuk meningkatkan pengalaman pengguna.',
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1740&auto=format&fit=crop',
            category: 'WEB DEVELOPMENT',
            title: 'Website Company Profile',
            description: 'Membangun website modern dan responsif untuk agensi kreatif.',
        },
    ];

    return (
        <section id="portfolio" className="bg-white py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Portofolio Kami</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <PortfolioCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;