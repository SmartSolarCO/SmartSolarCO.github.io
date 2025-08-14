import React from 'react';

const Solution = () => {
  return (
    <section className="py-20 bg-smart-light-gray">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2">
            <img 
              src="assets/solution.png" 
              alt="Sistema Smart Solar en funcionamiento en un cultivo" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-smart-green mb-6">La Solución está en el Sol. Y en la Inteligencia.</h2>
            <p className="text-lg mb-4">
              Smart Solar no es otra máquina complicada. Es su nuevo socio de trabajo, diseñado para ser tan trabajador y confiable como usted.
            </p>
            <p className="text-lg">
              Es una herramienta que entiende sus necesidades y le permite enfocarse en lo que realmente importa: hacer crecer su cultivo y su negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;