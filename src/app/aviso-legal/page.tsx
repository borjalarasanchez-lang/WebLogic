export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-zinc-300 space-y-8">
        <h1 className="text-4xl font-bold text-white mb-8">Aviso Legal</h1>
        <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), el propietario de la web informa de lo siguiente:</p>
        
        <h2 className="text-2xl font-bold text-white">1. Datos Identificativos</h2>
        <p>WebLogic es una marca comercial operada por Borja Lara Sánchez.</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>Teléfono: 645 547 827</li>
            <li>Email: borjalarasanchez@gmail.com</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">2. Propiedad Intelectual</h2>
        <p>Los contenidos de este sitio web, incluyendo textos, imágenes y diseños, pertenecen a WebLogic o a terceros que han autorizado su uso. Queda prohibida su reproducción sin autorización expresa.</p>

        <p className="text-sm text-zinc-500 mt-12 border-t border-zinc-800 pt-8">Última actualización: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}