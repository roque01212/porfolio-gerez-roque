import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "App de Acreditación por Escaneo de DNI",
      description:
        "Aplicación móvil desarrollada para agilizar la acreditación de personas en eventos, integrando escaneo de DNI con actualización automática en Google Sheets.",
      tech: [
        "React Native",
        "Expo",
        "Google Sheets API",
        "Google Apps Script",
        "AsyncStorage",
      ],
      github: "",
      live: "",
    },
    {
      title: "Feed Good Food – E-commerce",
      description:
        "Aplicación web de comercio electrónico con catálogo de productos, filtrado por categorías, vista de detalle, carrito persistente y generación de órdenes con Firebase.",
      tech: ["React", "TypeScript", "React Router", "Firebase", "Tailwind CSS"],
      github: "",
      live: "https://feedgoodfood.vercel.app/",
    },
    {
      title: "Agenda Telefónica Web",
      description:
        "Aplicación web responsive para gestionar contactos telefónicos, aplicando lógica de programación, manipulación del DOM y organización dinámica de datos.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "",
      live: "https://segunda-entrega-js-one.vercel.app/",
    },
    {
      title: "La Fuente Salta – Sitio Web Responsive",
      description:
        "Sitio web estático enfocado en maquetación, diseño adaptable y organización de estilos para una experiencia visual clara y responsive.",
      tech: ["HTML", "CSS", "SASS"],
      github: "",
      live: "https://roque01212.github.io/LaFuenteSalta/",
    },
  ];

  return (
    <section id="proyectos" className="py-24 px-6 md:px-16 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">
          Proyectos
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
          Algunos de mis proyectos recientes
        </h2>
        <div className="grid  md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-background border border-border rounded-lg p-6 flex flex-col hover:border-primary/50 transition-colors group"
            >
              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 font-body flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs border border-border text-muted-foreground px-2 py-1 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-center  gap-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FaGithub size={22} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={22} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
