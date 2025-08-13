
import React, { useState } from 'react';

const CTAForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        department: '',
        crop: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a server or CRM
        console.log("Form data submitted:", formData);
        alert('¡Gracias! Un asesor se pondrá en contacto con usted pronto.');
        setFormData({ name: '', whatsapp: '', department: '', crop: '' });
    };

    return (
        <section id="cta-form" className="py-20 bg-smart-green text-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Dé el Primer Paso Hacia un Campo Más Inteligente y Rentable</h2>
                    <p className="text-lg opacity-90">¿Está listo para transformar su forma de trabajar? Hable con uno de nuestros asesores sin ningún compromiso. Entenderemos las necesidades de su cultivo y le daremos una cotización a su medida.</p>
                </div>

                <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-2xl text-smart-gray">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-smart-light-green focus:border-smart-light-green" />
                        </div>
                        <div>
                            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">Número de WhatsApp</label>
                            <input type="tel" name="whatsapp" id="whatsapp" required value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-smart-light-green focus:border-smart-light-green" />
                        </div>
                        <div>
                            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Departamento</label>
                            <input type="text" name="department" id="department" required value={formData.department} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-smart-light-green focus:border-smart-light-green" />
                        </div>
                        <div>
                            <label htmlFor="crop" className="block text-sm font-medium text-gray-700 mb-1">¿Qué cultiva principalmente?</label>
                            <input type="text" name="crop" id="crop" required value={formData.crop} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-smart-light-green focus:border-smart-light-green" />
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-smart-yellow text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 text-lg">
                                SOLICITAR MI ASESORÍA GRATUITA
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CTAForm;
