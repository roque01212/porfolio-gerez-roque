import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const CustomFooter = () => {
  return (
    <footer className="py-12 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-sm font-body">
          © 2026 Gerez Roque Emanuel.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:tu@email.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
