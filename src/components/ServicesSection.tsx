// src/components/ServicesSection.tsx

import React from 'react';

// Definisikan tipe data untuk props Card
interface ServiceCardProps {
    icon: string; // Misal: emoji atau class ikon
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Layanan Kami</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ServiceCard
                        icon="💻"
                        title="Web Development"
                        description="Membangun website modern dan responsif untuk kebutuhan bisnis Anda."
                    />
                    <ServiceCard
                        icon="📱"
                        title="Mobile App"
                        description="Solusi aplikasi mobile di platform Android dan iOS."
                    />
                    <ServiceCard
                        icon="🎨"
                        title="UI/UX Design"
                        description="Desain antarmuka yang intuitif dan pengalaman pengguna yang memuaskan."
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;