// src/app/proyectos/page.js

export default function ProyectosPage() {
  return (
    <div className="space-y-12">
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}

const SkillsSection = () => (
  <section id="skills" className="p-6 bg-gray-800 rounded-lg">
    <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Herramientas y Tecnologías</h2>
    <div className="flex flex-wrap gap-2">
      <SkillBadge name="Python" />
      <SkillBadge name="Java" />
      <SkillBadge name="JavaScript" />
      <SkillBadge name="React.js" />
      <SkillBadge name="Node.js" />
      <SkillBadge name="Express" />
      <SkillBadge name="SQL (MySQL)" />
      <SkillBadge name="HTML5 & CSS3" />
      <SkillBadge name="Git & GitHub" />
      <SkillBadge name="Docker" />
      <SkillBadge name="Scrum" />
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="projects" className="p-6 bg-gray-800 rounded-lg">
    <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Proyectos</h2>
    <div className="grid grid-cols-1 gap-6">
      <ProjectCard
        title="Gestor de Tareas (Task Manager)"
        description="Aplicación web para la gestión de tareas personales, desarrollada como proyecto final del curso de Backend. Permite a los usuarios crear, editar, eliminar y marcar tareas como completadas."
        tech={["Node.js", "Express", "React", "MySQL"]}
      />
      <ProjectCard
        title="Blog Personal Básico"
        description="Un blog dinámico construido desde cero para practicar los fundamentos de Java y la Programación Orientada a Objetos. El proyecto incluye un sistema básico de autenticación para escribir y gestionar publicaciones."
        tech={["Java", "HTML", "CSS"]}
      />
    </div>
  </section>
);

const SkillBadge = ({ name }) => (
  <span className="bg-gray-700 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full">{name}</span>
);

const ProjectCard = ({ title, description, tech }) => (
  <div className="bg-gray-900 p-6 rounded-lg hover:ring-2 hover:ring-cyan-500 transition-all">
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map(t => <SkillBadge key={t} name={t} />)}
    </div>
  </div>
);