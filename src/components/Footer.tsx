// src/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; {currentYear} MyCompany. Semua Hak Cipta Dilindungi.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="hover:text-white">Facebook</a>
                    <a href="#" className="hover:text-white">Twitter</a>
                    <a href="#" className="hover:text-white">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;