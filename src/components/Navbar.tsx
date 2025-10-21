import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const sections = ['about', 'services', 'portfolio', 'team', 'news', 'contact'];
        const handleScroll = () => {
            let currentSection = '';
            for (const id of sections) {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = id;
                        break;
                    }
                }
            }
            if (window.scrollY === 0) {
                currentSection = '';
            }
            setActiveLink(currentSection);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getLinkClass = (id: string, isMobile: boolean = false): string => {
        const baseClass = isMobile ? 'block py-3 text-lg' : '';
        const activeClass = 'text-blue-600 font-semibold';
        const inactiveClass = 'text-gray-600 hover:text-blue-600 transition-colors duration-300';
        return `${baseClass} ${activeLink === id ? activeClass : inactiveClass}`;
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="font-bold text-2xl text-blue-600">
                    MyCompany
                </a>

                <div className="hidden md:flex space-x-6">
                    <a href="#about" className={getLinkClass('about')}>Tentang Kami</a>
                    <a href="#services" className={getLinkClass('services')}>Layanan</a>
                    <a href="#portfolio" className={getLinkClass('portfolio')}>Portofolio</a>
                    <a href="#team" className={getLinkClass('team')}>Tim Kami</a>
                    <a href="#news" className={getLinkClass('news')}>Berita</a>
                    <a href="#contact" className={getLinkClass('contact')}>Kontak</a>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <FaTimes className="text-2xl text-gray-700" />
                        ) : (
                            <FaBars className="text-2xl text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <div className="flex flex-col px-6 py-4">
                    <a href="#about" className={getLinkClass('about', true)} onClick={() => setIsMobileMenuOpen(false)}>Tentang Kami</a>
                    <a href="#services" className={getLinkClass('services', true)} onClick={() => setIsMobileMenuOpen(false)}>Layanan</a>
                    <a href="#portfolio" className={getLinkClass('portfolio', true)} onClick={() => setIsMobileMenuOpen(false)}>Portofolio</a>
                    <a href="#team" className={getLinkClass('team', true)} onClick={() => setIsMobileMenuOpen(false)}>Tim Kami</a>
                    <a href="#news" className={getLinkClass('news', true)} onClick={() => setIsMobileMenuOpen(false)}>Berita</a>
                    <a href="#contact" className={getLinkClass('contact', true)} onClick={() => setIsMobileMenuOpen(false)}>Kontak</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;