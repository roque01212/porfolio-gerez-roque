export const About = () => {
  return (
    <section id="sobre-mi" className="py-24 px-6 md:px-16 lg:px-24 bg-card/30">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">
            Sobre mí
          </p>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Desarrollador junior con enfoque en web y mobile
          </h2>
        </div>

        <div className="space-y-4 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
          <p>
            Soy Técnico Analista de Sistemas y actualmente continúo formándome y
            fortaleciendo mis habilidades en desarrollo web y móvil.
          </p>

          <p>
            Trabajo con tecnologías como JavaScript, TypeScript, React, React
            Native y Firebase, desarrollando proyectos prácticos que me permiten
            seguir aprendiendo y mejorar mi forma de resolver problemas.
          </p>

          <p>
            Me interesa crecer como desarrollador, crear aplicaciones útiles y
            continuar incorporando buenas prácticas, experiencia y solidez en
            cada nuevo proyecto.
          </p>
        </div>
      </div>
    </section>
  );
};
