import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Youtube, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Estude", path: "/study" },
  ];

  return (
    <footer className="mt-24 w-full rounded-t-3xl border-t border-neutral-700 bg-neutral-800 px-6 py-16 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-7xl flex-col gap-16 md:flex-row md:justify-between"
      >
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-3xl font-bold transition hover:scale-[1.02]">
            MChiodi <span className="text-[#FF5555]">HelpCss</span>
          </h2>
          <p className="text-muted-foreground max-w-sm text-sm">
            Conteúdos sobre desenvolvimento, IA, tecnologia e design. Construído
            com café ☕, código 💻 e dedicação.
          </p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div>
            <h3 className="mb-4 text-base font-semibold">Navegação</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`group relative inline-block text-sm transition hover:text-[#FF5555] ${
                      location.pathname === link.path ? "text-[#FF5555]" : ""
                    }`}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FF5555] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold">Redes Sociais</h3>
            <div className="flex flex-wrap gap-5">
              {[
                { icon: Youtube, link: "https://www.youtube.com/@MChiodiDev" },
                { icon: Github, link: "https://github.com/MatheusChiodi" },
                {
                  icon: Linkedin,
                  link: "https://www.linkedin.com/in/matheus-chiodi/",
                  target: "_blank",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border p-2 shadow-md transition hover:scale-110 hover:bg-[#FF5555] hover:text-white dark:border-neutral-700"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="my-10 border-t border-neutral-200 dark:border-neutral-700" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-muted-foreground text-center text-xs"
      >
        &copy; {new Date().getFullYear()} MChiodi News. Todos os direitos
        reservados.
      </motion.div>
    </footer>
  );
}
