import Educacion from "../assets/img/Educacion.jpg";
import Familia from "../assets/img/Familia.jpeg";
import Laboral from "../assets/img/Laboral.jpg";
import Voluntariado from "../assets/img/Voluntariado.jpeg";

export default function Programs() {
  const programs = [
    { 
      title: "Educación", 
      desc: "Acompañamiento escolar y desarrollo cognitivo.",
      img: Educacion
    },
    { 
      title: "Talleres familiares", 
      desc: "Espacios de aprendizaje y apoyo emocional.",
      img: Familia
    },
    { 
      title: "Inserción laboral", 
      desc: "Capacitación y oportunidades de empleo.",
      img: Laboral
    },
    { 
      title: "Voluntariado", 
      desc: "Súmate a nuestras actividades y eventos.",
      img: Voluntariado
    },
  ];

  return (
    <section className="w-full py-24 bg-cream" id="programas">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight leading-tight mb-14 text-center">
          Nuestros Programas
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {programs.map((item, index) => (
            <div 
              key={index}
              className="relative h-80 rounded-3xl overflow-hidden group shadow-md"
            >
              {/* Imagen */}
              <img 
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              {/* Contenido */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <h3 className="text-white text-lg font-semibold tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm leading-snug">
                  {item.desc}
                </p>
              </div>

              {/* Botón + */}
              <button className="absolute bottom-4 right-4 w-8 h-8 rounded-lg bg-secondary text-white text-xl flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition">
                +
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
