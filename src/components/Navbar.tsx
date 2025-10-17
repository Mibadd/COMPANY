// src/components/Navbar.tsx

import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="font-bold text-2xl text-blue-600">
                    MyCompany
                </a>
                <div className="hidden md:flex space-x-6">
                    <a href="#about" className="text-gray-600 hover:text-blue-600">Tentang Kami</a>
                    <a href="#services" className="text-gray-600 hover:text-blue-600">Layanan</a>
                    <a href="#team" className="text-gray-600 hover:text-blue-600">Tim Kami</a>
                    <a href="#contact" className="text-gray-600 hover:text-blue-600">Kontak</a>
                </div>
                {/* Mobile Menu Button bisa ditambahkan di sini */}
            </div>
        </nav>
    );
};

export default Navbar;