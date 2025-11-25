import Ilustracion from '../assets/img/header-illustration.png'
import Inferior from '../assets/img/flecha-inferior.png'
import Superior from '../assets/img/flecha-superior.png'
import Amarillo from '../assets/img/figura.png' // tu forma amarilla

export default function Header() {
  return (
    <header className="w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 pt-16 pb-4 md:flex md:items-center md:justify-between">

        {/* Texto izquierda */}
        <div className="md:w-[52%] space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold font-sans leading-14 tracking-tight text-black">
            Apoyamos el desarrollo <br />
            integral de personas con <br />
            <span className="text-secondary">Síndrome de Down</span>
          </h1>

          <p className="text-lg font-medium tracking-tight text-black">
            Brindamos educación, acompañamiento y oportunidades <br/> para transformar vidas
            y construir una sociedad más inclusiva,  <br/> empática y llena de posibilidades.
          </p>

          <div className="flex gap-1 pt-4">
            <a
              href="#"
              className="bg-secondary text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-secondary transition"
            >
              Quiero Apoyar →
            </a>

            <a
              href="#"
              className="text-primary px-6 py-3 rounded-xl text-lg font-medium hover:text-primary transition"
            >
              Nuestros Programas →
            </a>
          </div>
        </div>

        {/* Imagen derecha */}
        <div className="md:w-1/2 mt-14 md:mt-0 relative flex justify-center">
          <img
            src={Amarillo}
            alt="figura amarilla"
            className="absolute top-8 right-8 w-[420px] md:w-[480px] lg:w-[520px] z-0"
          />
          <img
            src={Ilustracion}
            alt="Ilustración"
            className="relative top-5 right-2 z-10 max-w-[350px] w-full"
          />

          {/* Flecha superior */}
          <img
            src={Superior}
            className="absolute -top-8 -right-4 w-20 md:w-24 z-20"
            alt=""
          />

          {/* Flecha inferior */}
          <img
            src={Inferior}
            className="absolute bottom-6 -left-16 w-36 md:w-40 z-20"
            alt=""
          />

        </div>

      </div>
    </header>
  );
}
