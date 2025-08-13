
import React from 'react';
import { WaterDropIcon, ClockIcon, ChartBarIcon, SunIcon, ThumbUpIcon, WrenchScrewdriverIcon } from './Icons';

interface BenefitItemProps {
    Icon: React.ElementType;
    title: string;
    description: string;
}

const BenefitItem = ({ Icon, title, description }: BenefitItemProps) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-shadow hover:shadow-xl">
        <div className="bg-smart-light-green text-white rounded-full p-4 mb-4">
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-smart-green mb-2">{title}</h3>
        <p className="text-smart-gray">{description}</p>
    </div>
);

const Benefits = () => {
  const benefits = [
    { Icon: WaterDropIcon, title: 'Ahorro de Agua (hasta 60%)', description: 'Riega con precisión milimétrica, usando solo el agua que su cultivo necesita.' },
    { Icon: ClockIcon, title: 'Ahorro de Tiempo', description: 'Libere horas de su día. Deje que el sistema trabaje mientras usted se dedica a otras labores.' },
    { Icon: ChartBarIcon, title: 'Mejora en la Producción', description: 'Un riego óptimo y constante se traduce en cosechas de mayor calidad y cantidad.' },
    { Icon: SunIcon, title: 'Cero Costos de Energía', description: 'Funciona 100% con energía solar. Dígale adiós a la factura de la luz o al gasto en combustible.' },
    { Icon: ThumbUpIcon, title: 'Fácil de Usar', description: 'Diseñado para ser intuitivo. Si sabe usar una herramienta, sabe usar Smart Solar.' },
    { Icon: WrenchScrewdriverIcon, title: 'Hecho para el Campo', description: 'Portátil para moverlo entre cultivos y robusto para aguantar el trabajo duro del día a día.' },
  ];

  return (
    <section className="py-20 bg-smart-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-smart-green mb-4">Más que un Sistema de Riego, una Inversión Inteligente.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} Icon={benefit.Icon} title={benefit.title} description={benefit.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
