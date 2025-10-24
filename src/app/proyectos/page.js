// src/app/proyectos/page.js
"use client"; // Necesario para usar hooks de React como useState

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react'; // Ícono para el botón de cerrar

// --- Datos de los Proyectos ---
const projectsData = [
  {
    id: 1,
    title: "Gestor de Tareas (Task Manager)",
    description: "Aplicación web para la gestión de tareas personales, desarrollada como proyecto final del curso de Backend. Permite a los usuarios crear, editar, eliminar y marcar tareas como completadas.",
    tech: ["Node.js", "Express", "React", "MySQL"],
    imageUrl: "/gestor.png", // Ruta a la nueva imagen
    comment: "Este fue uno de mis primeros proyectos full-stack. Aprendí muchísimo sobre la conexión entre el frontend y el backend, y cómo manejar el estado de una aplicación."
  },
  {
    id: 2,
    title: "Blog Personal Básico",
    description: "Un blog dinámico construido desde cero para practicar los fundamentos de Java y la Programación Orientada a Objetos. El proyecto incluye un sistema básico de autenticación para escribir y gestionar publicaciones.",
    tech: ["Java", "HTML", "CSS"],
    imageUrl: "/blog.png", // Ruta a la nueva imagen
    comment: "Con este proyecto solidifiqué mis bases en Java y la POO. Fue un reto interesante construir la lógica del blog desde cero sin usar frameworks avanzados."
  }
];

// --- Componente Principal de la Página ---
export default function ProyectosPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="space-y-12">
      <ProjectsSection projects={projectsData} onProjectClick={openModal} />
      <SkillsSection />
      
      {/* --- Ventana Modal --- */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

// --- Secciones y Componentes ---
const ProjectsSection = ({ projects, onProjectClick }) => (
  <section id="projects" className="p-6 bg-gray-800 rounded-lg">
    <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Proyectos</h2>
    <p className="mb-6 text-gray-400">Haz clic en un proyecto para ver más detalles.</p>
    <div className="grid grid-cols-1 gap-6">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} onClick={() => onProjectClick(project)} />
      ))}
    </div>
  </section>
);

const ProjectCard = ({ project, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-gray-900 p-6 rounded-lg hover:ring-2 hover:ring-cyan-500 transition-all cursor-pointer"
  >
    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
    <p className="text-gray-400 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map(t => <SkillBadge key={t} name={t} />)}
    </div>
  </div>
);

const SkillsSection = () => (
    <section id="skills" className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Herramientas y Tecnologías</h2>
      <div className="flex flex-wrap gap-2">
        <SkillBadge name="Python" /><SkillBadge name="Java" /><SkillBadge name="JavaScript" />
        <SkillBadge name="React.js" /><SkillBadge name="Node.js" /><SkillBadge name="Express" />
        <SkillBadge name="SQL (MySQL)" /><SkillBadge name="HTML5 & CSS3" /><SkillBadge name="Git & GitHub" />
        <SkillBadge name="Docker" /><SkillBadge name="Scrum" />
      </div>
    </section>
  );

const SkillBadge = ({ name }) => (
  <span className="bg-gray-700 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full">{name}</span>
);

// --- El Componente de la Ventana Modal ---
const ProjectModal = ({ project, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-lg max-w-2xl w-full mx-4 p-6 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic dentro de él
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
        <div className="mb-4">
          <Image
            src={project.imageUrl}
            alt={`Imagen de ${project.title}`}
            width={1280}
            height={720}
            className="rounded-md object-contain"
          />
        </div>
        <p className="text-lg text-gray-300 bg-gray-900 p-4 rounded-md">{project.comment}</p>
      </div>
    </div>
  );
};