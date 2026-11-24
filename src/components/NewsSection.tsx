import React, { useEffect, useState } from 'react';
import { FiArrowUpRight, FiX } from 'react-icons/fi';
import { NEWS_ARTICLES, type NewsArticle } from '../data/studioData';

const NewsSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const [featured, ...secondaryArticles] = NEWS_ARTICLES;

  useEffect(() => {
    if (!activeArticle) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveArticle(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeArticle]);

  return (
    <section id="news" className="bg-canvas py-20 lg:py-28 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-hairline">
          <div className="max-w-2xl">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] text-ink leading-[1.12]">
              Catatan rekayasa, kabar studio, dan kontribusi komunitas.
            </h2>
          </div>
          <p className="text-graphite text-base max-w-md leading-relaxed">
            Dokumentasi pembaruan metode kerja kami serta inisiatif kolaborasi bersama ekosistem
            digital lokal.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Artikel Utama Pilihan */}
          {featured && (
            <article className="lg:col-span-7 bg-paper rounded-2xl border border-hairline overflow-hidden group">
              <div className="aspect-[16/9] overflow-hidden bg-stone-subtle">
                <img
                  src={featured.imageUrl}
                  alt={featured.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-studio group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className="px-3 py-1 rounded-full bg-cobalt-tint text-cobalt font-semibold">
                    {featured.category}
                  </span>
                  <span className="font-mono text-pewter">{featured.date}</span>
                  <span className="font-mono text-pewter">· {featured.readTime}</span>
                </div>

                <h3 className="mt-4 font-display font-extrabold text-2xl sm:text-3xl text-ink leading-snug">
                  {featured.title}
                </h3>
                <p className="mt-3 text-graphite text-base leading-relaxed">{featured.summary}</p>

                <div className="mt-6 pt-5 border-t border-hairline flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-medium text-pewter">{featured.author}</span>
                  <button
                    type="button"
                    onClick={() => setActiveArticle(featured)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-deep transition-colors cursor-pointer"
                  >
                    Baca Selengkapnya
                    <FiArrowUpRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* Indeks Artikel Pendamping */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryArticles.map((article) => (
              <article
                key={article.id}
                className="bg-paper rounded-2xl border border-hairline p-6 flex flex-col justify-between group"
              >
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="sm:w-32 sm:h-28 rounded-xl overflow-hidden bg-stone-subtle shrink-0">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-40 sm:h-full object-cover transition-transform duration-500 ease-studio group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-stone-subtle text-ink font-medium">
                        {article.category}
                      </span>
                      <span className="font-mono text-pewter">{article.date}</span>
                    </div>
                    <h3 className="mt-2.5 font-display font-bold text-lg text-ink leading-snug">
                      {article.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-3.5 text-sm text-graphite leading-relaxed">{article.summary}</p>

                <div className="mt-5 pt-4 border-t border-hairline flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-pewter">{article.readTime}</span>
                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-deep transition-colors cursor-pointer"
                  >
                    Baca Artikel
                    <FiArrowUpRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Dialog Baca Artikel Lengkap */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-paper text-ink rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-stage"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/8] bg-stone-subtle overflow-hidden">
              <img
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label="Tutup artikel"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-ink/85 hover:bg-ink text-white inline-flex items-center justify-center transition-colors cursor-pointer"
              >
                <FiX size={18} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <span className="px-3 py-1 rounded-full bg-cobalt-tint text-cobalt font-semibold">
                  {activeArticle.category}
                </span>
                <span className="font-mono text-pewter">{activeArticle.date}</span>
                <span className="font-mono text-pewter">· {activeArticle.readTime}</span>
              </div>

              <h3
                id="article-modal-title"
                className="mt-3 font-display font-extrabold text-2xl sm:text-3xl text-ink leading-snug"
              >
                {activeArticle.title}
              </h3>
              <p className="mt-2 text-xs font-medium text-pewter">Ditulis oleh {activeArticle.author}</p>

              <div className="mt-6 space-y-4 text-graphite text-base leading-relaxed">
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-hairline flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 rounded-full bg-ink hover:bg-ink-elevated text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  Selesai Membaca
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsSection;
