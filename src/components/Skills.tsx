import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiExpo,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={34} /> },
  { name: "CSS", icon: <FaCss3Alt size={34} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={34} /> },
  { name: "JavaScript", icon: <FaJs size={34} /> },
  { name: "TypeScript", icon: <SiTypescript size={34} /> },
  { name: "React", icon: <FaReact size={34} /> },
  { name: "React Native", icon: <FaReact size={34} /> },
  { name: "Expo", icon: <SiExpo size={34} /> },
  { name: "Firebase", icon: <SiFirebase size={34} /> },
  { name: "Git", icon: <FaGitAlt size={34} /> },
  { name: "GitHub", icon: <FaGithub size={34} /> },
];

export const Skills = () => {
  return (
    <section id="habilidades" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">
          Habilidades
        </p>

        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 r">
          Tecnologías que utilizo en mis proyectos
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`
                rounded-2xl p-6 min-h-35
                flex flex-col items-center justify-center text-center bg-card/50
                border transition-all duration-300
                hover:-translate-y-1 hover:border-primary/50  hover:bg-card 
            
              `}
            >
              <div className="mb-4 text-primary">{skill.icon}</div>
              <p className="text-sm md:text-base font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
