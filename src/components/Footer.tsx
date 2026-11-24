import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import type { ServiceCategory } from '../data/studioData';

interface FooterProps {
  onSelectService?: (service: ServiceCategory) => void;
}

const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-canvas border-t border-ink-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-ink-border">
          {/* Identitas Studio */}
          <div className="lg:col-span-5">
            <a href="#" className="inline-flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-paper flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src="/logo.jpg"
                  alt="Logo ARKA Studio"
                  className="w-8 h-8 object-contain"
                />
              </span>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                ARKA <span className="font-normal text-silver-tint">Studio</span>
              </span>
            </a>

            <p className="mt-4 text-sm text-silver-tint leading-relaxed max-w-sm">
              Studio rekayasa perangkat lunak dan desain UI/UX yang mendampingi startup serta bisnis
              modern membangun produk digital berkualitas produksi.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn ARKA Studio"
                className="w-9 h-9 rounded-full bg-ink-elevated hover:bg-cobalt text-silver-tint hover:text-white border border-ink-border inline-flex items-center justify-center transition-colors"
              >
                <FaLinkedinIn size={15} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub ARKA Studio"
                className="w-9 h-9 rounded-full bg-ink-elevated hover:bg-cobalt text-silver-tint hover:text-white border border-ink-border inline-flex items-center justify-center transition-colors"
              >
                <FaGithub size={15} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram ARKA Studio"
                className="w-9 h-9 rounded-full bg-ink-elevated hover:bg-cobalt text-silver-tint hover:text-white border border-ink-border inline-flex items-center justify-center transition-colors"
              >
                <FaInstagram size={15} />
              </a>
            </div>
          </div>

          {/* Navigasi Halaman */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-sm text-white">Eksplorasi</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-silver-tint">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Tentang Studio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Layanan &amp; Kapabilitas
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Studi Kasus Terpilih
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Tim Inti
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-white transition-colors">
                  Jurnal &amp; Kabar
                </a>
              </li>
            </ul>
          </div>

          {/* Lini Layanan */}
          <div className="lg:col-span-4">
            <h3 className="font-display font-bold text-sm text-white">Mulai Berdasarkan Layanan</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-silver-tint">
              {(['Web Development', 'Mobile App', 'UI/UX Design'] as ServiceCategory[]).map(
                (srv) => (
                  <li key={srv}>
                    <button
                      type="button"
                      onClick={() => onSelectService?.(srv)}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      Konsultasi {srv}
                    </button>
                  </li>
                )
              )}
            </ul>
            <p className="mt-5 font-mono text-xs text-silver-tint">
              Jakarta, ID · halo@arkastudio.id
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-silver-tint">
          <p>
            &copy; <span className="font-mono">{currentYear}</span> ARKA Studio. Seluruh hak cipta
            dilindungi.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-silver-tint hover:text-white transition-colors cursor-pointer"
          >
            Kembali ke Atas
            <FiArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
