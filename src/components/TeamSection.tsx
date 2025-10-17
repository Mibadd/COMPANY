// src/components/TeamSection.tsx

import React from 'react';

interface TeamMemberProps {
    name: string;
    role: string;
    imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, imageUrl }) => {
    return (
        <div
            className="relative h-80 w-full rounded-lg overflow-hidden group shadow-lg"
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Ganti class di div ini untuk efek gradien */}
            <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent 
                           flex flex-col justify-end p-6
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <h3 className="text-xl font-bold text-white">{name}</h3>
                    <p className="text-blue-300">{role}</p>
                </div>
            </div>
        </div>
    );
};

const TeamSection: React.FC = () => {
    const teamMembers = [
        { name: 'John Doe', role: 'CEO & Founder', imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto-format&fit=crop' },
        { name: 'Jane Smith', role: 'CTO', imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto-format&fit=crop' },
        { name: 'Peter Jones', role: 'Lead Developer', imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto-format&fit=crop' },
        { name: 'Lisa Wang', role: 'UI/UX Designer', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto-format&fit=crop' },
    ];

    return (
        <section id="team" className="bg-blue-50 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Tim Profesional Kami</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;