// src/components/Sidebar.js
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, Home, Briefcase, Send } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="md:col-span-1 md:sticky md:top-8 h-fit p-6 bg-gray-800 rounded-lg text-center">
      <Image
        src="/yo.jpg" // Asegúrate de tener profile.jpg en la carpeta /public
        alt="Frederick Abril"
        width={128}
        height={128}
        className="rounded-full mx-auto mb-4 border-4 border-cyan-500"
      />
      <h1 className="text-3xl font-bold text-white">Frederick Abril</h1>
      <p className="text-cyan-400 mb-4">Estudiante de Desarrollo de Software</p>
      
      {/* --- Navegación Principal --- */}
      <nav className="my-6">
        <ul className="space-y-2">
          <li>
            <Link href="/" className="flex items-center justify-center gap-2 py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
              <Home size={20} />
              <span className="font-semibold">Sobre Mí</span>
            </Link>
          </li>
          <li>
            <Link href="/proyectos" className="flex items-center justify-center gap-2 py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
              <Briefcase size={20} />
              <span className="font-semibold">Proyectos</span>
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="flex items-center justify-center gap-2 py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
              <Send size={20} />
              <span className="font-semibold">Contacto</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex justify-center space-x-4 mb-6">
        <a href="https://github.com/frederickdev" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><Github /></a>
        <a href="https://linkedin.com/in/frederickdev" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><Linkedin /></a>
        <a href="mailto:frederick.dev@email.com" className="hover:text-cyan-400"><Mail /></a>
      </div>
      
      <a 
        href="/hoja de vida.pdf" 
        download
        className="w-full inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
      >
        Descargar Hoja de Vida
      </a>
    </aside>
  );
};

export default Sidebar;