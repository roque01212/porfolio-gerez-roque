import { Monitor, Code2, Layers } from "lucide-react";

export const courses = [
  {
    id: "1",
    icon: Monitor,
    title: "Diseño Web",
    description:
      "Formación en maquetación web con HTML y CSS, diseño responsive, estructura semántica y buenas prácticas de interfaz.",
    tags: ["HTML", "CSS", "Responsive"],
    diploma: "/desarrolloweb.png",
  },
  {
    id: "2",
    icon: Code2,
    title: "JavaScript",
    description:
      "Aprendizaje de lógica de programación, manipulación del DOM, funciones, asincronía, ES6+ y bases sólidas para desarrollo frontend.",
    tags: ["JavaScript", "DOM", "Async"],
    diploma: "/javascript.png",
  },
  {
    id: "3",
    icon: Layers,
    title: "React JS",
    description:
      "Desarrollo de interfaces con componentes, props, hooks, manejo de estado, routing y consumo de APIs en proyectos reales.",
    tags: ["React", "Hooks", "Router"],
    diploma: "/react.png",
  },
];