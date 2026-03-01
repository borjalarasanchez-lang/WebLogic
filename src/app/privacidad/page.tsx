export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-zinc-300 space-y-8">
        <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidad</h1>
        
        <p>En WebLogic nos comprometemos a proteger y respetar tu privacidad.</p>

        <h2 className="text-2xl font-bold text-white">1. Información que Recopilamos</h2>
        <p>Podemos recopilar y procesar los siguientes datos sobre ti:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>Información que proporcionas al rellenar formularios en nuestro sitio (nombre, email, teléfono).</li>
            <li>Si nos contactas, podemos guardar un registro de esa correspondencia.</li>
            <li>Detalles de tus visitas a nuestro sitio web y los recursos a los que accedes.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">2. Uso de la Información</h2>
        <p>Utilizamos la información recopilada para:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>Proporcionarte la información, productos o servicios que nos solicites.</li>
            <li>Asegurar que el contenido de nuestro sitio se presenta de la manera más efectiva.</li>
            <li>Notificarte sobre cambios en nuestro servicio.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">3. Contacto</h2>
        <p>Si tienes preguntas sobre esta política, contáctanos en borjalarasanchez@gmail.com.</p>

        <p className="text-sm text-zinc-500 mt-12 border-t border-zinc-800 pt-8">Última actualización: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}