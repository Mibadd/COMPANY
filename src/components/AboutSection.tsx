import React from 'react';
import { FaProjectDiagram, FaUsers, FaClock } from 'react-icons/fa';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">

                    <div className="md:w-1/3" data-aos="fade-right">
                        <img
                            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1740&auto-format&fit=crop"
                            alt="Diskusi tim di kantor"
                            className="rounded-lg shadow-xl"
                        />
                    </div>

                    {/* Tambahkan data-aos="fade-up" di sini */}
                    <div className="md:w-2/3" data-aos="fade-up">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Tentang Kami</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            MyCompany adalah agensi digital yang berfokus pada penyediaan solusi teknologi inovatif. Sejak didirikan, kami telah berkomitmen untuk membantu klien mencapai tujuan bisnis mereka melalui pengembangan web, aplikasi seluler, dan desain yang berpusat pada pengguna.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Visi kami adalah menjadi mitra teknologi terpercaya yang mendorong transformasi digital untuk bisnis di seluruh Indonesia.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                                <FaProjectDiagram className="mx-auto text-blue-500 text-4xl mb-2" />
                                <p className="text-2xl font-bold text-gray-900">100+</p>
                                <p className="text-gray-500">Proyek Selesai</p>
                            </div>
                            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                                <FaUsers className="mx-auto text-blue-500 text-4xl mb-2" />
                                <p className="text-2xl font-bold text-gray-900">50+</p>
                                <p className="text-gray-500">Klien Puas</p>
                            </div>
                            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                                <FaClock className="mx-auto text-blue-500 text-4xl mb-2" />
                                <p className="text-2xl font-bold text-gray-900">15k+</p>
                                <p className="text-gray-500">Jam Kerja</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;