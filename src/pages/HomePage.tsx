import { About } from "@/components/About";
import { Courses } from "@/components/Courses";
import { CustomHero } from "@/components/CustomHero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export const HomePage = () => {
  return (
    <main>
      <CustomHero name="Gerez Roque Emanuel" />
      <About title={"Implementar seccion sobre mi"} />
      <Skills title={"Implementar seccion de habilidades"} />
      <Projects />
      <Courses />
    </main>
  );
};
