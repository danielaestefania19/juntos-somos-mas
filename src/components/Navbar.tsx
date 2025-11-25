import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logos/LogoJSM.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openOthers, setOpenOthers] = useState(false);

  const navItems = [
    { name: "Sobre nosotros", href: "#quienes-somos" },
    { name: "Historias", href: "#historias" },
    { name: "Servicios", href: "#programas" },
    { name: "Eventos", href: "#eventos" },
  ];

  return (
    <header className="sticky top-4 mb-5 z-50">
      <div className="max-w-5xl mx-auto px-3">
        <div className="bg-white/95 backdrop-blur-md rounded-full shadow-lg ring-1 ring-black/10 px-3 md:px-6 h-16 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Juntos Somos Más"
              className="h-10 md:h-12 w-auto rounded-full object-cover"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-slate-800 font-medium">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="relative group">
                {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-slate-900/80 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <div className="relative">
              <button
                onClick={() => setOpenOthers((v) => !v)}
                className="flex items-center gap-2"
              >
                Otros
                <svg
                  className={`h-4 w-4 transition-transform ${
                    openOthers ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                </svg>
              </button>

              <AnimatePresence>
                {openOthers && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute right-0 mt-3 w-48 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/10"
                  >
                    <a
                      href="#blog"
                      className="block px-4 py-3 hover:bg-slate-50"
                      onClick={() => setOpenOthers(false)}
                    >
                      Blog
                    </a>
                    <a
                      href="#faq"
                      className="block px-4 py-3 hover:bg-slate-50"
                      onClick={() => setOpenOthers(false)}
                    >
                      Preguntas frecuentes
                    </a>
                    <a
                      href="#recursos"
                      className="block px-4 py-3 hover:bg-slate-50"
                      onClick={() => setOpenOthers(false)}
                    >
                      Recursos
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
          <a
            href="#donar"
            className="hidden md:inline-flex items-center rounded-full bg-secondary px-6 py-3 text-white font-semibold hover:bg-slate-900 transition"
          >
            Donar ahora
          </a>
          <button
            aria-label="Abrir menú"
            onClick={() => {
              setOpen((v) => !v);
              setOpenOthers(false);
            }}
            className="md:hidden inline-flex flex-col justify-center items-center gap-1.5 p-2"
          >
            <span
              className={`h-0.5 w-6 bg-slate-900 transition ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-slate-900 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-slate-900 transition ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden mt-2 mx-3 rounded-2xl bg-white shadow-lg ring-1 ring-black/10 overflow-hidden"
          >
            <div className="px-4 py-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 text-slate-800 font-medium rounded-xl hover:bg-slate-50"
                >
                  {item.name}
                </a>
              ))}
              <details className="px-2 py-3">
                <summary className="cursor-pointer list-none text-slate-800 font-medium">
                  Otros
                </summary>
                <div className="mt-2 pl-3 space-y-1">
                  <a href="#blog" className="block py-2 hover:text-slate-900">
                    Blog
                  </a>
                  <a href="#faq" className="block py-2 hover:text-slate-900">
                    Preguntas frecuentes
                  </a>
                  <a href="#recursos" className="block py-2 hover:text-slate-900">
                    Recursos
                  </a>
                </div>
              </details>

              <a
                href="#donar"
                onClick={() => setOpen(false)}
                className="mt-2 mb-3 inline-flex w-full items-center justify-center rounded-full bg-secondary py-3 text-white font-semibold hover:bg-slate-900"
              >
                Donar ahora
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
