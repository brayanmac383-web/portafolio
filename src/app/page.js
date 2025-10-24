// src/app/page.js

export default function HomePage() {
  return (
    <div className="space-y-12">
      <AboutSection />
      <EducationSection />
    </div>
  );
}

const AboutSection = () => (
  <section id="about" className="p-6 bg-gray-800 rounded-lg">
    <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Sobre Mí</h2>
    <p className="text-lg leading-relaxed">
      Estudiante de los últimos semestres de Desarrollo de Software, con un enfoque apasionado en la creación de soluciones tecnológicas eficientes y escalables. Cuento con sólidos conocimientos en el desarrollo backend y una creciente curiosidad por la arquitectura de software en la nube. Mi objetivo es unirme a un equipo innovador donde pueda aplicar mis habilidades para resolver problemas complejos, contribuir en proyectos desafiantes y continuar mi desarrollo profesional en un entorno colaborativo.
    </p>
  </section>
);

const EducationSection = () => (
   <section id="education" className="p-6 bg-gray-800 rounded-lg">
    <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Educación</h2>
    <div>
      <h3 className="font-bold text-lg text-cyan-400">TECNOLOGO Desarrollo de Software</h3>
      <p className="font-medium">(UNIMINUTO)</p>
      <p className="text-sm text-gray-400">2023 - Presente</p>
    </div>
  </section>
);