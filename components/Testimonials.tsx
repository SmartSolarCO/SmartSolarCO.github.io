import React from 'react';

interface TestimonialCardProps {
    quote: string;
    name: string;
    location: string;
    imageUrl: string;
}

const TestimonialCard = ({ quote, name, location, imageUrl }: TestimonialCardProps) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <img className="w-full md:w-1/3 h-48 md:h-auto object-cover" src={imageUrl} alt={name} />
        <div className="p-8 flex flex-col justify-center">
            <p className="text-smart-gray italic mb-4">"{quote}"</p>
            <p className="font-bold text-smart-green">{name}</p>
            <p className="text-sm text-gray-500">{location}</p>
        </div>
    </div>
);

const Testimonials = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-smart-green mb-4">No nos Crea a Nosotros. Créale a Otros Agricultores.</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
                    <TestimonialCard 
                        quote="Antes terminaba el día agotado solo por el riego. Con Smart Solar, ese peso se fue. Ahora tengo tiempo hasta para arreglar la cerca y estar con mi familia. La inversión se pagó sola con el ahorro en gasolina."
                        name="José Vargas"
                        location="Productor de Hortalizas en Boyacá"
                        imageUrl="assets/jose-vargas.jpg"
                    />
                    <TestimonialCard 
                        quote="En mi finca la luz falla mucho. Con Smart Solar eso ya no es un problema. Tengo la seguridad de que mis matas de café siempre tienen el agua que necesitan. La cosecha salió mejor que nunca."
                        name="María Rojas"
                        location="Caficultora en Antioquia"
                        imageUrl="assets/maria-rojas.jpg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;