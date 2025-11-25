import { Copy } from "lucide-react";

export default function Donar() {
  const copy = (text: string) => navigator.clipboard.writeText(text);

  return (
    <section id="donaciones" className="w-full py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight text-center mb-10">
          Datos para Colaborar
        </h2>
        <div className="bg-secondary/10 rounded-3xl p-8 shadow-lg border border-secondary/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-gray-600 font-medium">CLABE</p>
              <p className="text-lg font-semibold tracking-tight">722969012114126245</p>
            </div>

            <button
              onClick={() => copy("722969012114126245")}
              className="p-2 rounded-lg hover:bg-secondary/20 transition"
            >
              <Copy className="w-5 h-5 text-secondary" />
            </button>
          </div>

          <hr className="border-secondary/20 my-4" />
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-gray-600 font-medium">Beneficiario</p>
              <p className="text-lg font-semibold tracking-tight max-w-xs">
                JUNTOS SOMOS MAS 2013
              </p>
            </div>
          </div>

          <hr className="border-secondary/20 my-4" />
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-gray-600 font-medium">Institución</p>
              <p className="text-lg font-semibold tracking-tight">
                Mercado Pago W
              </p>
            </div>
          </div>

          <hr className="border-secondary/20 my-4" />

          {/* Dimo */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-gray-600 font-medium">
                Celular vinculado a Dimo®️
              </p>
              <p className="text-lg font-semibold tracking-tight">—</p>
            </div>
          </div>

          <hr className="border-secondary/20 my-4" />

          {/* PayPal */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">PayPal</p>
              <p className="text-lg font-semibold tracking-tight">
                contacto@juntossomosmasac.com
              </p>
            </div>

            <button
              onClick={() => copy("contacto@juntossomosmasac.com")}
              className="p-2 rounded-lg hover:bg-secondary/20 transition"
            >
              <Copy className="w-5 h-5 text-secondary" />
            </button>
          </div>

        </div>

        {/* Mensaje de agradecimiento */}
        <p className="text-center text-gray-600 mt-8 italic">
          Gracias por apoyar nuestra misión. 💛
        </p>
      </div>
    </section>
  );
}
