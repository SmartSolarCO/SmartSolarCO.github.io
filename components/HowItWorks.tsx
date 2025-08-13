
import React from 'react';

const Step = ({ number, title, description }: { number: string, title: string, description: string }) => (
    <div className="text-center p-6 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
        <div className="mb-4">
            <span className="inline-block bg-smart-yellow text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">{number}</span>
        </div>
        <h3 className="text-xl font-bold text-smart-green mb-2">{title}</h3>
        <p className="text-smart-gray">{description}</p>
    </div>
);


const HowItWorks = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-smart-green mb-4">Tan Fácil que Parece Magia. Pero es Pura Tecnología.</h2>
                    <p className="text-lg">Olvídese de manuales complejos y configuraciones interminables.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Step 
                        number="1"
                        title="INSTALA"
                        description="Usted mismo instala el sistema en minutos. Es tan simple como conectar las piezas. Sin necesidad de técnicos ni herramientas especiales."
                    />
                    <Step 
                        number="2"
                        title="EL SOL TRABAJA"
                        description="El panel solar alimenta el sistema. El sensor inteligente mide la humedad del suelo y le dice al sistema cuándo regar. Justo cuando se necesita."
                    />
                    <Step 
                        number="3"
                        title="COSECHA"
                        description="Usted se dedica a sus otras labores con la tranquilidad de que el riego está bajo control. Smart Solar se encarga del resto."
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
