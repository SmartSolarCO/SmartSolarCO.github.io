
import React from 'react';
import { SunIcon } from './Icons';

const Header = () => {
    const scrollToForm = () => {
        document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <SunIcon className="w-8 h-8 text-smart-yellow" />
                    <span className="text-2xl font-bold text-smart-green">Smart Solar</span>
                </div>
                <button 
                    onClick={scrollToForm}
                    className="hidden md:inline-block bg-smart-yellow text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-amber-500 transition-all duration-300 transform hover:scale-105">
                    Asesoría Gratuita
                </button>
            </div>
        </header>
    );
};

export default Header;
