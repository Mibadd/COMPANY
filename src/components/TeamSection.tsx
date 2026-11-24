import React from 'react';
import { TEAM_MEMBERS } from '../data/studioData';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="bg-paper py-20 lg:py-28 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-12 border-b border-hairline">
          <div className="lg:col-span-7">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] text-ink leading-[1.12]">
              Dipimpin praktisi yang terlibat langsung di setiap baris kode dan layar.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-graphite text-base leading-relaxed">
              Tanpa lapisan birokrasi berlapis—Anda berdiskusi langsung dengan arsitek sistem,
              engineer utama, dan desainer prinsipal yang mengerjakan produk Anda.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <article key={member.id} className="group flex flex-col">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-stone-subtle border border-hairline">
                <img
                  src={member.imageUrl}
                  alt={`${member.name} — ${member.role}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-studio group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-3 left-3 font-mono text-xs px-2.5 py-1 rounded-full bg-paper/95 text-ink border border-hairline">
                  {member.experience}
                </span>
              </div>

              <div className="mt-4 flex flex-col">
                <h3 className="font-display font-bold text-xl text-ink">{member.name}</h3>
                <p className="text-sm font-semibold text-cobalt mt-0.5">{member.role}</p>
                <p className="mt-2 text-xs font-medium text-pewter">{member.specialty}</p>
                <p className="mt-2.5 text-sm text-graphite leading-relaxed">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
