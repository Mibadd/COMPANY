// src/components/ServicesSection.tsx
import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPalette } from 'react-icons/fa';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-5xl mb-4 text-blue-600 inline-block">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="bg-blue-50 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Layanan Kami</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={<FaLaptopCode />}
                        title="Web Development"
                        description="Membangun website modern dan responsif untuk kebutuhan bisnis Anda."
                    />
                    <ServiceCard
                        icon={<FaMobileAlt />}
                        title="Mobile App"
                        description="Solusi aplikasi mobile di platform Android dan iOS."
                    />
                    <ServiceCard
                        icon={<FaPalette />}
                        title="UI/UX Design"
                        description="Desain antarmuka yang intuitif dan pengalaman pengguna yang memuaskan."
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
