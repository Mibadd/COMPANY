// src/components/NewsSection.tsx

import React from 'react';

// Interface untuk properti setiap kartu berita
interface NewsCardProps {
    imageUrl: string;
    category: string;
    title: string;
    summary: string;
    date: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ imageUrl, category, title, summary, date }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <span className="text-sm font-semibold text-blue-600 bg-blue-100 py-1 px-3 rounded-full">
                    {category}
                </span>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600">{summary}</p>
                <p className="mt-4 text-sm text-gray-500">{date}</p>
            </div>
        </div>
    );
};

const NewsSection: React.FC = () => {
    // Data berita placeholder. Ganti dengan data berita Anda.
    const newsData = [
        {
            imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop',
            category: 'Teknologi',
            title: 'Peluncuran Produk Baru Kami di Kuartal 4',
            summary: 'Kami dengan bangga mengumumkan peluncuran produk terbaru yang akan merevolusi industri...',
            date: '15 Oktober 2025',
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop',
            category: 'Perusahaan',
            title: 'MyCompany Meraih Penghargaan "Best Workplace 2025"',
            summary: 'Sebuah pengakuan atas dedikasi dan budaya kerja positif yang kami bangun bersama...',
            date: '5 Oktober 2025',
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop',
            category: 'Komunitas',
            title: 'Program CSR: Pelatihan Digital untuk UMKM Lokal',
            summary: 'Sebagai bagian dari komitmen kami, kami mengadakan pelatihan untuk mendukung pertumbuhan UMKM...',
            date: '28 September 2025',
        },
    ];

    return (
        <section id="news" className="bg-white py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Berita & Informasi Terbaru</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((news, index) => (
                        <NewsCard key={index} {...news} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;