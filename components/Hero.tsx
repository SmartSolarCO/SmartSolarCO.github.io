import React from 'react';

const Hero = () => {
    const scrollToForm = () => {
        document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white text-center">
            <img 
                src="assets/hero.png" 
                alt="" 
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 p-6 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                    El Campo se Riega Solo. Tú Cosechas los Resultados.
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    Presentamos Smart Solar: el sistema de riego inteligente y 100% solar que le devuelve su tiempo y aumenta la rentabilidad de su cultivo. Sin complicaciones, sin facturas de luz, sin esfuerzo.
                </p>
                <button
                    onClick={scrollToForm} 
                    className="bg-smart-yellow text-white font-bold py-4 px-10 rounded-lg shadow-xl text-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                    SÍ, QUIERO MI ASESORÍA GRATUITA
                </button>
                <p className="mt-6 text-sm opacity-80 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                    *Confianza y tecnología para el agricultor colombiano.*
                </p>
            </div>
        </section>
    );
};

export default Hero;