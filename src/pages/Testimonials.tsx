export default function Testimonials() {
  const testimonios = [
    { quote: "Gracias a Juntos Somos Más, mi hija logró conseguir su primer empleo.", author: "María" },
    { quote: "El acompañamiento familiar ha sido increíble.", author: "José" },
  ];

  return (
    <section className="py-20 bg-primary/20 text-center">
      <h3 className="text-3xl font-bold text-secondary mb-12">Testimonios Reales</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonios.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-secondary">
            <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
            <p className="font-semibold text-secondary">— {t.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
