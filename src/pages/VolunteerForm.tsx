export default function VolunteerForm() {
  return (
    <section id="voluntariado" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-3xl font-bold text-secondary mb-6">Sé voluntario</h3>
          <p className="text-gray-700 mb-6">
            Completa el formulario y únete a nuestras actividades. Juntos hacemos la diferencia.
          </p>

          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Nombre completo" className="p-3 rounded-lg border" />
            <input type="email" placeholder="Correo electrónico" className="p-3 rounded-lg border" />
            <textarea placeholder="¿Cómo te gustaría apoyar?" rows={4} className="p-3 rounded-lg border"></textarea>
            <button type="submit" className="bg-secondary text-white py-3 rounded-lg font-semibold hover:opacity-90">
              Enviar
            </button>
          </form>
        </div>

        <div className="bg-primary/10 p-6 rounded-2xl shadow-lg">
          <p className="text-lg text-secondary font-semibold italic mb-4">
            “Gracias a Juntos Somos Más, mi hijo ha aprendido a comunicarse mejor y tener más confianza.”
          </p>
          <p className="text-right text-gray-700 font-medium">— Ana, mamá participante</p>
        </div>
      </div>
    </section>
  );
}
