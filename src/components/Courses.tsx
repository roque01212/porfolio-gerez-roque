import { courses } from "@/interface/cursos";
import { Link } from "react-router";

export const Courses = () => {
  return (
    <section id="cursos" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">
          Formación
        </p>

        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
          Formación académica y cursos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <Link
              to={`/image/${course.id}`}
              key={course.title}
              className="relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:glow-primary transition-all duration-300 group overflow-visible"
            >
              <course.icon
                className="text-primary mb-4 group-hover:scale-110 transition-transform"
                size={32}
              />

              <h3 className="font-display text-xl font-semibold mb-2">
                {course.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 font-body">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-sm font-display"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className={`pointer-events-none absolute -top-6 left-1/2 z-20 w-72 -translate-x-1/2 -translate-y-full opacity-0  scale-95 transition-all duration-300  group-hover:opacity-100 group-hover:scale-100`}
              >
                <div className="rounded-xl border border-border bg-card p-2 shadow-2xl">
                  <img
                    src={course.diploma}
                    alt={` Documento o certificado de ${course.title}`}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
