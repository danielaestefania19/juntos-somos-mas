export default function About() {
  return (
    <section id="quiénes-somos" className="bg-white py-20 px-6 max-w-5xl mx-auto text-center">
      <h3 className="text-3xl font-bold text-secondary mb-10">Quiénes Somos</h3>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Somos una asociación comprometida con el desarrollo integral de personas con Síndrome de Down y sus familias. Promovemos inclusión, respeto y oportunidades.
      </p>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img src="/team.jpg" alt="Equipo JSM" className="rounded-2xl shadow-lg" />
        <div>
          <h4 className="text-xl font-semibold text-secondary mb-4">Misión y Visión</h4>
          <ul className="text-gray-700 text-left space-y-3">
            <li>🌼 Fomentar la inclusión educativa, social y laboral.</li>
            <li>💜 Acompañar a las familias en su crecimiento conjunto.</li>
            <li>🌟 Ser un referente de empatía y transformación humana.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
