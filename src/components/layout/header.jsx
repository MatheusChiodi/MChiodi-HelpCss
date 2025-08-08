import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, X } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Estude", path: "/study" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full border-neutral-800 bg-neutral-800 shadow-md backdrop-blur-md transition-transform duration-500 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } ${menuOpen ? "hidden" : ""}`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-[#FF5555]">MChiodi</span> HelpCss
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group relative inline-block font-medium transition ${
                  location.pathname === link.path ? "text-[#FF5555]" : ""
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[1px] w-0 bg-[#FF5555] transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.path ? "w-full" : ""
                  }`}
                />
              </Link>
            ))}
          </div>

          {!menuOpen && (
            <motion.button
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
              whileTap={{ scale: 0.95 }}
              className="flex items-center rounded-lg border px-3 py-2 transition hover:bg-[#FF5555] hover:text-white md:hidden"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: menuOpen ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                ☰
              </motion.div>
            </motion.button>
          )}
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-50 h-full w-4/5 max-w-xs rounded-l-3xl border-l border-neutral-800 bg-neutral-800/90 p-6 shadow-2xl backdrop-blur-md"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold">
                  <span className="text-[#FF5555]">MChiodi</span> HelpCss
                </Link>
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fechar menu"
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg border px-2 py-2 transition hover:bg-[#FF5555] hover:text-white"
                >
                  <X size={20} />
                </motion.button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block rounded-xl px-3 py-3 text-lg transition ${
                      location.pathname === link.path ? "text-[#FF5555]" : ""
                    } hover:bg-neutral-800`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
