import React, { useState, useEffect } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

const NAV_ITEMS = [
  { id: 'about', label: 'Tentang' },
  { id: 'services', label: 'Layanan' },
  { id: 'portfolio', label: 'Portofolio' },
  { id: 'team', label: 'Tim Inti' },
  { id: 'news', label: 'Jurnal' },
  { id: 'contact', label: 'Kontak' },
];

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(100, (scrollY / docHeight) * 100) : 0);

      if (scrollY < 120) {
        setActiveLink('');
        return;
      }

      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveLink(item.id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ease-studio ${
        isScrolled
          ? 'bg-paper/95 backdrop-blur-md border-b border-hairline'
          : 'bg-canvas border-b border-transparent'
      }`}
    >
      {/* Indikator progres baca halaman */}
      <div className="h-[2px] w-full bg-transparent overflow-hidden" aria-hidden="true">
        <div
          className="h-full bg-cobalt transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className="max-w-7xl mx-auto px-5 sm:px-8 h-[74px] flex items-center justify-between gap-4"
        aria-label="Navigasi utama"
      >
        <a
          href="#"
          className="group inline-flex items-center gap-3 focus-visible:rounded-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="w-9 h-9 rounded-lg bg-paper border border-hairline flex items-center justify-center overflow-hidden shrink-0 transition-transform duration-300 ease-studio group-hover:scale-105">
            <img
              src="/logo.jpg"
              alt="Logo ARKA Studio"
              className="w-7 h-7 object-contain mix-blend-multiply"
            />
          </span>
          <span className="flex items-baseline gap-1.5">
            <span className="font-display font-extrabold text-xl tracking-tight text-ink">
              ARKA
            </span>
            <span className="text-sm font-medium text-pewter">Studio</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1 bg-stone-subtle/75 p-1 rounded-full border border-hairline">
          {NAV_ITEMS.map((item) => {
            const isActive = activeLink === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-ink text-canvas'
                    : 'text-graphite hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-cobalt hover:bg-cobalt-deep text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
          >
            Mulai Proyek
            <FiArrowUpRight className="text-base" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={isMobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-paper border border-hairline text-ink hover:border-ink transition-colors"
        >
          {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* Panel navigasi perangkat seluler */}
      <div
        id="mobile-nav-drawer"
        className={`lg:hidden overflow-hidden bg-paper border-b border-hairline transition-all duration-300 ease-studio ${
          isMobileMenuOpen ? 'max-h-[440px] opacity-100' : 'max-h-0 opacity-0 border-b-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeLink === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-ink text-canvas'
                    : 'text-graphite hover:bg-stone-subtle hover:text-ink'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-cobalt" aria-hidden="true" />
                )}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 bg-cobalt hover:bg-cobalt-deep text-white font-semibold py-3.5 px-5 rounded-full transition-colors"
          >
            Diskusikan Proyek Anda
            <FiArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
