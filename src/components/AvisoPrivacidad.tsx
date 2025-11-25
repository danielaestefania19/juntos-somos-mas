export default function AvisoPrivacidad() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight mb-8">
          Aviso de Privacidad
        </h1>
        <div className="bg-secondary/10 rounded-3xl p-8 shadow-md border border-secondary/20 leading-relaxed text-gray-800 text-sm md:text-base">
          
          <p className="mb-4">
            En <strong>JUNTOS SOMOS MAS 2013 ASOCIACION CIVIL</strong>, la información y 
            datos personales de los beneficiarios, colaboradores, donantes, asociados, 
            empleados y proveedores es tratada de forma estrictamente confidencial y con la 
            secrecía necesaria para lograr los fines de la organización, por lo que hacemos 
            un esfuerzo permanente para salvaguardarla, de conformidad con los artículos 8, 
            15, 16 y 36 de la Ley Federal de Protección de Datos Personales en Posesión de los 
            Particulares.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Identidad y domicilio de la organización</h2>

          <p className="mb-4">
            <strong>JUNTOS SOMOS MAS 2013</strong> es una asociación civil sin fines de lucro, 
            enfocada en empoderar a las personas con Síndrome de Down y ayudar a sus familias 
            en cada etapa de su camino.
          </p>

          <p className="mb-4">
            Con domicilio en: <br />
            <strong>Manuel María del Llano 1214, Centro de Monterrey, CP 64000, Nuevo León, México.</strong>
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Nuestra misión y principios</h2>

          <ol className="list-decimal ml-6 space-y-2">
            <li>La dignidad inherente de cada individuo.</li>
            <li>La inclusión plena y activa.</li>
            <li>El poder de la educación y el apoyo integral.</li>
            <li>La colaboración y la corresponsabilidad.</li>
            <li>La mejora continua y la innovación.</li>
            <li>La defensa de los derechos y la concienciación.</li>
            <li>El amor y la empatía como guía.</li>
          </ol>

          <h2 className="text-xl font-semibold mt-6 mb-3">Propósito para la recolección y uso de los datos</h2>

          <p className="mb-4">
            Los datos personales son utilizados para las siguientes finalidades:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              Comunicación con terceros y donantes nacionales e internacionales, con fines 
              estadísticos, administrativos y de recaudación de fondos.
            </li>
            <li>
              Registro de beneficios y obligaciones legales de nuestros trabajadores.
            </li>
            <li>
              Gestión interna y externa de datos de donantes para transparencia y control administrativo.
            </li>
            <li>
              Comunicación general, envío de información, invitaciones y trámites administrativos.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">Datos personales recabados</h2>

          <h3 className="font-semibold mt-4 mb-2">A) Personas físicas</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Nombre completo</li>
            <li>Dirección</li>
            <li>Teléfono</li>
            <li>Correo electrónico</li>
            <li>Fecha y lugar de nacimiento</li>
            <li>Estado civil, escolaridad, ocupación</li>
            <li>Información financiera (cuando proceda)</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">B) Personas morales</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Nombre de la institución</li>
            <li>RFC</li>
            <li>Representantes legales</li>
            <li>Dirección y contacto</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">Datos personales sensibles</h2>

          <p className="mb-4">
            Algunos datos recabados son considerados sensibles, por lo que su tratamiento se 
            realiza con estrictas medidas de seguridad y confidencialidad, necesarias para 
            cumplir con los fines legítimos de la organización.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Opciones para limitar el uso o divulgación de datos
          </h2>

          <p className="mb-4">
            Puedes ponerte en contacto en cualquier momento a través del correo:  
            <strong> contacto@juntossomosmasac.com </strong>  
            para limitar el uso de tus datos o ejercer tus derechos ARCO.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Derechos ARCO</h2>

          <p className="mb-4">
            El titular puede acceder, rectificar, cancelar u oponerse al uso de sus datos personales 
            mediante una solicitud formal enviada al correo:
            <br />
            <strong>contacto@juntossomosmasac.com</strong>
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Transferencia de datos</h2>

          <p className="mb-4">
            Los datos podrán ser transferidos dentro y fuera del país para fines administrativos 
            y estadísticos. Si no manifiestas lo contrario, se entenderá que otorgas consentimiento.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Cambios al aviso de privacidad
          </h2>

          <p>
            Las modificaciones que se realicen a este aviso estarán disponibles en nuestra página web 
            o serán enviadas al correo proporcionado por el titular.
          </p>
        </div>

      </div>
    </section>
  );
}
