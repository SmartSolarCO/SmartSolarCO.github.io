
import React from 'react';
import { XCircleIcon } from './Icons';

const Problem = () => {
  const problems = [
    { text: 'Horas perdidas en una labor repetitiva.' },
    { text: 'Altos costos en combustible o electricidad.' },
    { text: 'Desperdicio de agua, un recurso cada vez más valioso.' },
    { text: 'Cosechas irregulares por un riego inconsistente.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-smart-green mb-6">¿Cansado del Trabajo que Nunca Termina?</h2>
        <p className="max-w-3xl mx-auto text-lg mb-12">
          Sabemos lo que es. Madrugar a regar, luchar con la manguera, el costo de la gasolina para la motobomba, y la preocupación constante de si el agua fue suficiente o demasiada. Es un trabajo físico agotador que le roba tiempo y dinero.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start space-x-4 text-left p-4 bg-red-50 rounded-lg">
              <XCircleIcon className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <span className="text-lg text-smart-gray">{problem.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
