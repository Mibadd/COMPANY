// src/components/TeamSection.tsx

import React from 'react';

// Interface untuk properti setiap anggota tim
interface TeamMemberProps {
    name: string;
    role: string;
    imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, imageUrl }) => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
            <img
                src={imageUrl}
                alt={name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-blue-600">{role}</p>
        </div>
    );
};

const TeamSection: React.FC = () => {
    const teamMembers = [
        { name: 'John Doe', role: 'CEO & Founder', imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Jane Smith', role: 'CTO', imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Peter Jones', role: 'Lead Developer', imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Lisa Wang', role: 'UI/UX Designer', imageUrl: 'https://via.placeholder.com/150' },
    ];

    return (
        <section id="team" className="bg-blue-50 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Tim Profesional Kami</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            imageUrl={member.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;