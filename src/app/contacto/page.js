// src/app/contacto/page.js
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

export default function ContactoPage() {
  return (
    <section id="contact" className="p-6 bg-gray-800 rounded-lg text-center"> {/* Agregamos text-center aquí */}
      <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Hablemos</h2>
      <p className="mb-8 text-lg max-w-2xl mx-auto">
        Estoy disponible para nuevas oportunidades y colaboraciones. ¡Me encantaría saber de ti!
      </p>
      
      {/* --- Ilustración de Contacto --- */}
      <div className="mb-10 mt-8 flex justify-center">
        <Image
          src="/contact.png" // Asegúrate de que tu imagen esté en public/contact_illustration.svg o .png
          alt="Contacta con Frederick Abril"
          width={500} // Ajusta el tamaño según tu imagen y preferencia
          height={500}
          className="object-contain"
        />
      </div>

      <div className="space-y-6 max-w-lg mx-auto"> {/* Centramos los datos de contacto */}
        {/* --- Tarjeta de Email --- */}
        <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg shadow-md">
          <Mail size={24} className="text-cyan-400 flex-shrink-0" />
          <div className="text-left">
            <h3 className="font-semibold text-white">Correo Electrónico</h3>
            <a 
              href="mailto:frederick.dev@email.com" 
              className="text-gray-300 hover:text-cyan-400 transition-colors break-words" // break-words para emails largos
            >
              frederick.dev@email.com
            </a>
          </div>
        </div>
        
        {/* --- Tarjeta de Teléfono --- */}
        <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg shadow-md">
          <Phone size={24} className="text-cyan-400 flex-shrink-0" />
          <div className="text-left">
            <h3 className="font-semibold text-white">Teléfono / WhatsApp</h3>
            <a 
              href="https://wa.me/573001234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              +57 300 123 4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}