import AboutUsImage from "../assets/img/AboutUsImage.jpg"; // <-- Cambia esto

export default function AboutUs() {
  const principles = [
    "La dignidad inherente de cada individuo",
    "La inclusión plena y activa",
    "El poder de la educación y el apoyo integral",
    "La colaboración y la corresponsabilidad",
    "La mejora continua y la innovación",
    "La defensa de los derechos humanos",
    "El amor y la empatía como guía",
  ];

  return (
    <section id="acerca" className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src={AboutUsImage}
            alt="Acerca de Nosotros"
            className="max-w-md w-full rounded-3xl shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight leading-tight mb-6">
            Nuestra Misión
          </h2>

          <p className="text-lg text-black leading-relaxed mb-8 max-w-xl">
            Contamos con 7 principales ejes de acción que guían nuestro
            compromiso con el desarrollo integral, la inclusión y el
            acompañamiento transformador de cada persona.
          </p>

          <ul className="space-y-4">
            {principles.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="w-4 h-4 mt-1 rounded-full bg-secondary"></span>

                <p className="text-black font-medium tracking-tight leading-snug">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
