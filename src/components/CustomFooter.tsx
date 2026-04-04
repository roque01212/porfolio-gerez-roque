import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const CustomFooter = () => {
  return (
    <footer
      id="contacto"
      className="py-12 px-6 md:px-16 lg:px-24 border-t border-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col px-6 md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-display text-primary text-xl font-semibold mb-2">
            Gerez Roque Emanuel
          </h3>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-4">
            <a
              href="https://github.com/roque01212"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaGithub size={24} />
            </a>
            {/*  Futuro linkedin */}
            {/* <a
              href="https://linkedin.com/in/roque01212"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin size={24} />
            </a> */}

            <a
              href="mailto:roque_gerez@hotmail.com"
              aria-label="Enviar correo"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <a
            href="mailto:roque_gerez@hotmail.com"
            className="text-sm text-muted-foreground  hover:text-primary transition-colors"
          >
            roque_gerez@hotmail.com
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border/50 text-center">
        <p className="text-muted-foreground text-sm font-body">
          © 2026 Gerez Roque Emanuel. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
