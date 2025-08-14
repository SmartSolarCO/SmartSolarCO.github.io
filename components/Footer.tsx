import React from 'react';
import { SunIcon, FacebookIcon, YouTubeIcon } from './Icons';

const Footer = () => {
    return (
        <footer className="bg-smart-green text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                            <SunIcon className="w-8 h-8 text-smart-yellow" />
                            <span className="text-2xl font-bold">Smart Solar</span>
                        </div>
                        <p className="text-gray-300">Riega fácil, vive mejor.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contacto</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>WhatsApp: +57 300 123 4567</li>
                            <li>Correo: <a href="mailto:contacto@smartsolar.co" className="hover:text-smart-yellow transition-colors">contacto@smartsolar.co</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Síganos en:</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://facebook.com/smartsolar.co" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-smart-yellow transition-colors">
                                <FacebookIcon className="w-8 h-8" />
                            </a>
                            <a href="https://youtube.com/smartsolar.co" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-300 hover:text-smart-yellow transition-colors">
                                <YouTubeIcon className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    <p>© 2025 Smart Solar. Todos los derechos reservados. Una solución para el campo colombiano.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;