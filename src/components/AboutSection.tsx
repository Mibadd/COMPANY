import React, { useEffect, useRef, useState } from 'react';

interface MilestoneStat {
  target: number;
  suffix: string;
  label: string;
  note: string;
}

const MILESTONES: MilestoneStat[] = [
  {
    target: 100,
    suffix: '+',
    label: 'Proyek Selesai',
    note: 'Aplikasi web, mobile, dan perombakan antarmuka lintas industri.',
  },
  {
    target: 50,
    suffix: '+',
    label: 'Mitra Startup & Bisnis',
    note: 'Kolaborasi jangka panjang dengan tingkat keberlanjutan proyek tinggi.',
  },
  {
    target: 15,
    suffix: 'k+',
    label: 'Jam Rekayasa & Riset',
    note: 'Dedikasi tim inti pada arsitektur kode bersih dan pengujian pengguna.',
  },
];

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [counts, setCounts] = useState<number[]>(() => MILESTONES.map((m) => m.target));
  const hasAnimatedRef = useRef<boolean>(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          const duration = 750;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = Math.min(1, (now - startTime) / duration);
            const eased = 1 - Math.pow(1 - elapsed, 3);
            setCounts(
              MILESTONES.map((m) => Math.max(1, Math.round(m.target * (0.55 + 0.45 * eased))))
            );
            if (elapsed < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-paper py-20 lg:py-28 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Kolom Kiri: Potret Kolaborasi & Filosofi Simbol Studio */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="rounded-2xl overflow-hidden border border-hairline bg-stone-subtle">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                alt="Diskusi perancangan produk tim ARKA Studio"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div className="rounded-2xl bg-canvas border border-hairline p-5 sm:p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-paper border border-hairline flex items-center justify-center shrink-0">
                <img
                  src="/logo.jpg"
                  alt="Simbol geometris ARKA Studio"
                  className="w-9 h-9 object-contain mix-blend-multiply"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-ink">
                  Filosofi Dua Garis ARKA
                </h3>
                <p className="mt-1 text-sm text-graphite leading-relaxed">
                  Sudut panah ke atas melambangkan akselerasi teknologi, sementara lengkung wadah di
                  bawahnya mewakili desain yang berpusat pada manusia.
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Narasi Tentang Kami & Rekam Jejak */}
          <div className="lg:col-span-7">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] text-ink leading-[1.12]">
              Mitra rekayasa produk yang menerjemahkan visi bisnis menjadi perangkat lunak andal.
            </h2>

            <div className="mt-6 space-y-4 text-graphite text-base sm:text-lg leading-relaxed max-w-[65ch]">
              <p>
                ARKA Studio adalah studio produk digital yang berfokus pada penyediaan solusi
                teknologi terukur. Sejak didirikan, kami membantu founder startup dan perusahaan di
                Indonesia meluncurkan platform web, aplikasi seluler, serta sistem desain antarmuka
                yang siap dipakai ribuan pengguna nyata.
              </p>
              <p>
                Kami bekerja bukan sebagai vendor lepas tangan, melainkan perpanjangan tim produk
                Anda—menyatukan riset UX, kejelasan arsitektur kode, dan ketepatan jadwal rilis di
                bawah satu atap.
              </p>
            </div>

            {/* Matriks Capaian Studio */}
            <div className="mt-10 pt-8 border-t border-hairline grid grid-cols-1 sm:grid-cols-3 gap-8">
              {MILESTONES.map((stat, idx) => (
                <div key={stat.label} className="flex flex-col">
                  <p className="font-mono font-semibold text-3xl sm:text-4xl text-ink tracking-tight">
                    {counts[idx]}
                    <span className="text-cobalt">{stat.suffix}</span>
                  </p>
                  <p className="mt-2 font-display font-bold text-base text-ink">{stat.label}</p>
                  <p className="mt-1 text-sm text-pewter leading-relaxed">{stat.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
