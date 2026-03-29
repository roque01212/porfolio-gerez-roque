import { ArrowDown } from "lucide-react";

interface Props {
  name: string;
}
export const CustomHero = ({ name }: Props) => {
  return (
    <section className="min-h-screen flex flex-col justify-center  px-6 md:px-16 lg:px-24 relative">
      <div className="flex justify-evenly xl:flex-row flex-col items-center gap-10">
        <div className="max-w-4xl ">
          <p className="text-primary font-display text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-up">
            Desarrollador Frontend
          </p>
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Hola, soy <span className="text-gradient">{name}</span>
          </h1>
          <p
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 animate-fade-up font-body"
            style={{ animationDelay: "0.2s" }}
          >
            Desarrollo interfaces web y aplicaciones móviles con React, React
            Native, TypeScript y Firebase, enfocándome en crear soluciones
            funcionales, claras y bien estructuradas.
          </p>
          <div
            className="flex gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#proyectos"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-display font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Ver proyectos
            </a>
            <a
              href="#cursos"
              className="border border-border px-6 py-3 rounded-md font-display font-semibold text-sm text-foreground hover:border-primary transition-colors"
            >
              Ver formación
            </a>
          </div>
        </div>
        <div>
          <img
            className="rounded-t-4xl w-md object-cover mask-b-from-40% mask-b-to-100% "
            // className="w-md mask-radial-at-center mask-radial-from-40% mask-radial-to-75%"
            src="/emanuel.jpg"
            alt=""
          />
        </div>
      </div>
      <a
        href="#sobreMi"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce xl:block hidden  "
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};
