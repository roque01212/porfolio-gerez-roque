import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "Landing Page Moderna",
      description:
        "Sitio web responsive creado con HTML, CSS y JavaScript vanilla.",
      tech: ["HTML", "CSS", "JS"],
      github: "https://github.com/tu-usuario/landing-page",
      live: "https://roque01212.github.io/LaFuenteSalta/",
    },
    {
      title: "App de Tareas",
      description: "Aplicación CRUD de tareas construida con React y hooks.",
      tech: ["React", "CSS Modules"],
      github: "https://github.com/tu-usuario/todo-app",
      live: "",
    },
    {
      title: "Portfolio Personal",
      description: "Este mismo portfolio, construido con React y Tailwind CSS.",
      tech: ["React", "Tailwind", "TypeScript"],
      github: "https://github.com/tu-usuario/portfolio",
      live: "",
    },
  ];

  return (
    <section id="proyectos" className="py-24 px-6 md:px-16 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">
          Trabajo
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
          Proyectos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaGithub size={22} />
                </a>
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
