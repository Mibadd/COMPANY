// src/components/Footer.tsx

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-gray-300 py-8">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; {currentYear} MyCompany. Semua Hak Cipta Dilindungi.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label="Facebook"
                    >
                        <FaFacebook size={24} />
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label="Twitter"
                    >
                        <FaTwitter size={24} />
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;