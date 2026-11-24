import React, { useEffect, useState } from 'react';
import { FiArrowUpRight, FiCheckCircle, FiClock, FiMail, FiMapPin } from 'react-icons/fi';
import type { ServiceCategory } from '../data/studioData';

type InquiryTopic = ServiceCategory | 'Kolaborasi Penuh';

const TOPICS: InquiryTopic[] = [
  'Web Development',
  'Mobile App',
  'UI/UX Design',
  'Kolaborasi Penuh',
];

interface ContactFormProps {
  selectedService?: ServiceCategory | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ selectedService }) => {
  const [topic, setTopic] = useState<InquiryTopic>('Web Development');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    topic: InquiryTopic;
  } | null>(null);

  useEffect(() => {
    if (selectedService) {
      setTopic(selectedService);
      setSubmittedData(null);
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      setErrorMsg('Masukkan nama lengkap Anda minimal 2 karakter agar kami tahu kepada siapa harus menyapa.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMsg('Format alamat email belum tepat. Gunakan format seperti nama@perusahaan.com.');
      return;
    }

    if (trimmedMessage.length < 15) {
      setErrorMsg('Tuliskan gambaran singkat proyek minimal 15 karakter agar tim kami dapat menyiapkan respons yang relevan.');
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        name: trimmedName,
        email: trimmedEmail,
        topic,
      });
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    }, 450);
  };

  return (
    <section id="contact" className="bg-paper py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Kolom Kiri: Informasi Konsultasi & Kontak Langsung */}
          <div className="lg:col-span-5">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] text-ink leading-[1.12]">
              Mari petakan langkah pertama produk digital Anda.
            </h2>

            <p className="mt-5 text-graphite text-base sm:text-lg leading-relaxed">
              Ceritakan target rilis, tantangan sistem saat ini, atau ide produk baru Anda. Tim inti
              kami akan merespons dengan estimasi alur kerja awal yang konkret.
            </p>

            <div className="mt-10 pt-8 border-t border-hairline space-y-5">
              <div className="flex items-start gap-3.5">
                <span className="w-10 h-10 rounded-xl bg-canvas border border-hairline text-ink inline-flex items-center justify-center shrink-0">
                  <FiMail size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium text-pewter">Email Diskusi Proyek</p>
                  <a
                    href="mailto:halo@arkastudio.id"
                    className="font-mono text-sm font-medium text-ink hover:text-cobalt transition-colors"
                  >
                    halo@arkastudio.id
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-10 h-10 rounded-xl bg-canvas border border-hairline text-ink inline-flex items-center justify-center shrink-0">
                  <FiMapPin size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium text-pewter">Studio &amp; Jangkauan Kerja</p>
                  <p className="text-sm font-medium text-ink">
                    Jakarta Selatan · Kolaborasi Hibrida &amp; Remote Se-Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-10 h-10 rounded-xl bg-canvas border border-hairline text-ink inline-flex items-center justify-center shrink-0">
                  <FiClock size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium text-pewter">Waktu Respons Standar</p>
                  <p className="font-mono text-sm text-ink">Sen–Jum · Maksimal 1×24 jam kerja</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Interaktif */}
          <div className="lg:col-span-7 bg-canvas rounded-2xl border border-hairline p-6 sm:p-9">
            {submittedData ? (
              <div className="py-8 flex flex-col items-start" role="status" aria-live="polite">
                <span className="w-12 h-12 rounded-2xl bg-cobalt-tint text-cobalt inline-flex items-center justify-center">
                  <FiCheckCircle size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display font-extrabold text-2xl sm:text-3xl text-ink">
                  Rincian awal proyek telah tercatat.
                </h3>
                <p className="mt-3 text-graphite text-base leading-relaxed max-w-[56ch]">
                  Terima kasih, <strong className="text-ink">{submittedData.name}</strong>. Simulasi
                  pengiriman untuk kebutuhan{' '}
                  <strong className="text-ink">{submittedData.topic}</strong> telah berhasil—pada
                  lingkungan produksi, konfirmasi otomatis dikirimkan ke{' '}
                  <span className="font-mono text-sm text-ink">{submittedData.email}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="mt-7 inline-flex items-center gap-2 bg-ink hover:bg-ink-elevated text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
                >
                  Kirim Rincian Proyek Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div>
                  <span
                    id="topic-group-label"
                    className="block text-sm font-semibold text-ink mb-3"
                  >
                    Fokus Kebutuhan Utama
                  </span>
                  <div
                    role="radiogroup"
                    aria-labelledby="topic-group-label"
                    className="flex flex-wrap gap-2"
                  >
                    {TOPICS.map((item) => {
                      const isSelected = topic === item;
                      return (
                        <button
                          key={item}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => setTopic(item)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-cobalt text-white'
                              : 'bg-paper text-graphite hover:text-ink border border-hairline'
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {errorMsg && (
                  <div
                    role="alert"
                    className="mt-5 rounded-xl bg-paper border border-cobalt px-4 py-3 text-sm text-ink"
                  >
                    {errorMsg}
                  </div>
                )}

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Mis. Nadia Pratama"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-paper border border-hairline text-ink placeholder:text-pewter focus:outline-none focus:border-cobalt transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
                      Email Kerja
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      placeholder="nadia@perusahaan.id"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-paper border border-hairline text-ink placeholder:text-pewter focus:outline-none focus:border-cobalt transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="company" className="block text-sm font-semibold text-ink mb-2">
                    Nama Perusahaan / Startup <span className="font-normal text-pewter">(Opsional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Mis. PT Nusantara Digital"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-paper border border-hairline text-ink placeholder:text-pewter focus:outline-none focus:border-cobalt transition-colors"
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">
                    Gambaran Proyek &amp; Target Waktu
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Ceritakan produk yang ingin dibangun atau ditingkatkan, fitur utama, serta perkiraan jadwal rilis..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-paper border border-hairline text-ink placeholder:text-pewter focus:outline-none focus:border-cobalt transition-colors resize-y"
                    required
                  />
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-pewter">
                    Seluruh informasi proyek dijaga kerahasiaannya sejak diskusi pertama.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-cobalt hover:bg-cobalt-deep disabled:opacity-60 text-white font-semibold py-3.5 px-7 rounded-full transition-colors cursor-pointer"
                  >
                    {isSubmitting ? 'Menyiapkan Ringkasan...' : 'Kirim Rincian Proyek'}
                    <FiArrowUpRight size={18} aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
