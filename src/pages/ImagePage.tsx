import { courses } from "@/interface/cursos";
import { ArrowLeft, Award } from "lucide-react";
import { Link, useParams } from "react-router";

export const ImagePage = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <section className="min-h-screen px-4 py-10 mt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-2xl border bg-card p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-foreground">
            Documento no encontrado
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            No pudimos encontrar el documento o certificado solicitado.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-background px-4 py-6 sm:px-6 sm:py-10  mt-15">
      <div className="mx-auto flex  w-full max-w-5xl flex-col gap-6">
        <div className="flex justify-center items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-foreground   hover:text-primary transition-colors animate-bounce"
          >
            <ArrowLeft size={25} />
            <p className="text-xl font-medium">Volver</p>
          </Link>
        </div>

        <div className="rounded-3xl border bg-card p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Award size={14} />
                {course.title.includes("Técnico")
                  ? "Título en trámite"
                  : "Certificado"}
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {course.title}
              </h1>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {course.title.includes("Técnico")
                  ? "Estado curricular completo. El título oficial se encuentra en trámite."
                  : "Diploma correspondiente al curso realizado. Puedes visualizarlo en tamaño completo a continuación."}
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl  bg-background shadow-md">
            <img
              src={course.diploma}
              alt={`Documento de ${course.title}`}
              className="h-auto w-full object-contain"
            />
          </div>

          {course.file && (
            <div className="mt-6 flex justify-center">
              <a
                href={course.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Abrir documento
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
