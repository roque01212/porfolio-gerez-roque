import { About } from "@/components/About";
import { Courses } from "@/components/Courses";
import { CustomHero } from "@/components/CustomHero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export const HomePage = () => {
  return (
    <main>
      <CustomHero name="Gerez Roque Emanuel" />
      <About />
      <Skills />
      <Projects />
      <Courses />
    </main>
  );
};
