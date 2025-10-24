// src/app/contacto/page.js

export default function ContactoPage() {
  return (
    <section id="contact" className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Contacto</h2>
      <p className="mb-6 text-lg">
        Si tienes alguna pregunta, oportunidad de colaboración o simplemente quieres saludar, no dudes en escribirme.
      </p>
      
      <form action="mailto:frederick.dev@email.com" method="GET" className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="subject" className="mb-2 font-semibold">Asunto</label>
          <input type="text" name="subject" id="subject" className="p-3 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="body" className="mb-2 font-semibold">Mensaje</label>
          <textarea name="body" id="body" rows="5" className="p-3 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
        </div>

        <div>
          <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Enviar Correo
          </button>
        </div>
      </form>
    </section>
  );
}