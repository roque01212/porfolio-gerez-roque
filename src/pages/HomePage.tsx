import { Courses } from "@/components/Courses";
import { CustomFooter } from "@/components/CustomFooter";
import { CustomHero } from "@/components/CustomHero";
import { Projects } from "@/components/Projects";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomHero name="Gerez Roque Emanuel" />
      <Courses />
      <Projects />
      <CustomFooter />
    </div>
  );
};
