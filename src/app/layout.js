// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ParticlesComponent from "@/components/ParticlesComponent"; // <-- 1. IMPORTA EL COMPONENTE

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio | Frederick Abril",
  description: "Portafolio de desarrollo de software de Frederick Abril",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-900 text-gray-300`}>
        <ParticlesComponent /> {/* <-- 2. AÑADE EL COMPONENTE AQUÍ */}
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 relative z-10"> {/* Añadimos clases para posicionar el contenido por encima del fondo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Sidebar />
            <main className="md:col-span-2">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}