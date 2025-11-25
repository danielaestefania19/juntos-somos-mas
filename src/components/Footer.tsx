import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Columna 1 — Nombre */}
          <div>
            <h3 className="text-xl font-bold tracking-tight">
              Juntos Somos Más A.C.
            </h3>
            <p className="text-white/80 text-sm mt-2 max-w-xs leading-relaxed">
              Empoderamos a personas con Síndrome de Down y acompañamos a sus
              familias con amor, educación e inclusión.
            </p>
          </div>

          {/* Columna 2 — Navegación */}
          <div>
            <h4 className="font-semibold mb-3 tracking-tight">Enlaces</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#inicio" className="hover:underline">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#programas" className="hover:underline">
                  Programas
                </a>
              </li>
              <li>
                <a href="#donaciones" className="hover:underline">
                  Donaciones
                </a>
              </li>
              <li>
                <a href="#acerca" className="hover:underline">
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 — Redes y privacidad */}
          <div>
            <h4 className="font-semibold mb-3 tracking-tight">Conecta</h4>

            {/* Instagram */}
            <a
              href="https://instagram.com/juntossomosmasac"
              target="_blank"
              className="inline-flex items-center gap-2 hover:opacity-80 transition"
            >
              <span>@juntossomosmasac</span>
            </a>

            {/* Botón Aviso de Privacidad */}
            <div className="mt-6">
              <Link
  to="/aviso-privacidad"
  className="inline-block bg-white text-secondary font-semibold px-5 py-2 rounded-full hover:bg-white/80 transition"
>
  Aviso de Privacidad
</Link>

            </div>
          </div>
        </div>

        {/* Línea final */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/70 text-sm">
          © 2025 Juntos Somos Más A.C. — Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
