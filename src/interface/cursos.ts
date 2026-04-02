import { Monitor, Code2, Layers, GraduationCap } from "lucide-react";


export const courses = [
   {
  id: "1",
  icon: GraduationCap,
  title: "Técnico Analista de Sistemas",
  description:
    "Carrera finalizada en el Instituto El Milagro. Actualmente cuento con estado curricular completo y el título oficial se encuentra en trámite.",
  tags: ["Formación académica", "Título en trámite"],
  diploma: "/estado-curricular-preview.jpg",
  file: "/EstadoCurricular.pdf",

},
  {
    id: "2",
    icon: Monitor,
    title: "Diseño Web",
    description:
      "Formación en maquetación web con HTML y CSS, diseño responsive, estructura semántica y buenas prácticas de interfaz.",
    tags: ["HTML", "CSS", "SASS", "Responsive"],
    diploma: "/desarrolloweb.png",
  },
  {
    id: "3",
    icon: Code2,
    title: "JavaScript",
    description:
      "Aprendizaje de lógica de programación, manipulación del DOM, funciones, asincronía, ES6+ y bases sólidas para desarrollo frontend.",
    tags: ["JavaScript", "DOM", "ES6+", "Asincronía"],
    diploma: "/javascript.png",
  },
  {
    id: "4",
    icon: Layers,
    title: "React JS",
    description:
      "Desarrollo de interfaces con componentes, props, hooks, manejo de estado, routing y consumo de APIs en proyectos reales.",
    tags: ["React", "Hooks", "React-Router", "APIs", "Firebase"],
    diploma: "/react.png",
  },

];