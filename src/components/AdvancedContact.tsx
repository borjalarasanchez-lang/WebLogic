"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Loader2 } from "lucide-react";

const steps = [
  {
    id: 1,
    question: "¿Qué tecnología usas principalmente?",
    options: ["WordPress / WooCommerce", "Shopify / Webflow", "Desarrollo a medida (React/Next.js)", "Otra / No sé"],
  },
  {
    id: 2,
    question: "¿Cuántas horas pierdes en tareas manuales a la semana?",
    options: ["Menos de 5h", "Entre 5h y 10h", "Más de 10h (Necesito ayuda urgente)", "No estoy seguro"],
  },
  {
    id: 3,
    question: "¿Dónde te enviamos tu propuesta de ahorro?",
    isInput: true,
  },
];

export function AdvancedContact() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOptionSelect = (option: string) => {
    setAnswers({ ...answers, [currentStep]: option });
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-12 lg:px-24 bg-zinc-950 scroll-mt-20">
      <div className="max-w-4xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-16 relative overflow-hidden">
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-1 bg-zinc-800 w-full">
          <motion.div 
            className="h-full bg-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">Diagnóstico de Eficiencia</h2>
          <p className="text-zinc-400">Descubre cuánto tiempo y dinero puedes ahorrar automatizando tu negocio.</p>
        </div>

        <div className="min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-lg"
              >
                <h3 className="text-2xl font-semibold mb-8 text-center">
                  {steps[currentStep].question}
                </h3>

                {steps[currentStep].isInput ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-lg focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin h-5 w-5" />
                      ) : (
                        <>
                          Obtener Diagnóstico <ChevronRight className="h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {steps[currentStep].options?.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(option)}
                        className="w-full text-left p-4 rounded-xl border border-zinc-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all group flex items-center justify-between"
                      >
                        <span className="text-lg text-zinc-300 group-hover:text-blue-200">{option}</span>
                        <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold mb-4">¡Diagnóstico Enviado!</h3>
                <p className="text-zinc-400 max-w-md mx-auto">
                  Hemos recibido tus datos. En breve recibirás un informe detallado con oportunidades de automatización personalizadas en tu correo.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
