
import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-smart-green focus:outline-none"
            >
                <span>{question}</span>
                <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                 <p className="text-smart-gray pr-6">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: '¿Cuánto cuesta el sistema Smart Solar?',
            answer: 'El precio varía según el tamaño de su necesidad. Ofrecemos una asesoría gratuita para darle una cotización exacta y sin sorpresas. Nuestro objetivo es que sea la mejor inversión para su finca.'
        },
        {
            question: '¿Qué pasa si no hay sol?',
            answer: 'El sistema está diseñado para ser ultra-eficiente y cuenta con una batería interna que almacena energía, garantizando el funcionamiento incluso en días nublados.'
        },
        {
            question: '¿Y si algo falla? ¿Tienen garantía?',
            answer: '¡Por supuesto! Todos nuestros sistemas tienen una garantía de 1 año y ofrecemos soporte técnico directo y en español a través de WhatsApp. Estamos para acompañarlo.'
        },
        {
            question: '¿Es muy difícil de instalar?',
            answer: 'No. Está diseñado para que cualquier persona pueda instalarlo siguiendo nuestra guía visual "paso a paso". Si puede armar un mueble sencillo, puede instalar Smart Solar.'
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-smart-green mb-4">¿Aún Tiene Dudas? Aquí se las Resolvemos.</h2>
                </div>
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
