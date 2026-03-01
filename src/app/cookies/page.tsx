export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-zinc-300 space-y-8">
        <h1 className="text-4xl font-bold text-white mb-8">Política de Cookies</h1>
        
        <p>Utilizamos cookies para distinguirle de otros usuarios de nuestro sitio web. Esto nos ayuda a proporcionarle una buena experiencia cuando navega por nuestro sitio y también nos permite mejorarlo.</p>

        <h2 className="text-2xl font-bold text-white">1. ¿Qué es una cookie?</h2>
        <p>Una cookie es un pequeño archivo de letras y números que almacenamos en su navegador o en el disco duro de su ordenador si usted está de acuerdo.</p>

        <h2 className="text-2xl font-bold text-white">2. Cookies que utilizamos</h2>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cookies estrictamente necesarias:</strong> Son requeridas para la operación de nuestro sitio web.</li>
            <li><strong>Cookies analíticas/de rendimiento:</strong> Nos permiten reconocer y contar el número de visitantes y ver cómo se mueven por nuestro sitio.</li>
            <li><strong>Cookies de funcionalidad:</strong> Se utilizan para reconocerle cuando vuelve a nuestro sitio web.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">3. Gestión de cookies</h2>
        <p>Puede bloquear las cookies activando la configuración en su navegador que le permite rechazar la configuración de todas o algunas cookies.</p>

        <p className="text-sm text-zinc-500 mt-12 border-t border-zinc-800 pt-8">Última actualización: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}