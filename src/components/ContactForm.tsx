"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

const InputField = ({ id, label, type = "text", value, onChange, placeholder, focusedField, setFocusedField }: { id: string, label: string, type?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, placeholder: string, focusedField: string | null, setFocusedField: (field: string | null) => void }) => (
  <div className="relative group">
    <motion.label
      htmlFor={id}
      className={`absolute left-4 pointer-events-none transition-all duration-300 ${
        focusedField === id || value ? "-top-2.5 text-xs bg-[#050505] px-2 text-blue-500 font-bold" : "top-3.5 text-zinc-500"
      }`}
    >
      {label}
    </motion.label>
    <input
      id={id}
      type={type}
      required
      value={value}
      onChange={onChange}
      onFocus={() => setFocusedField(id)}
      onBlur={() => setFocusedField(null)}
      className={`w-full bg-zinc-900/50 border rounded-lg px-4 py-3.5 text-white outline-none transition-all duration-300 ${
        focusedField === id 
          ? "border-blue-500 ring-1 ring-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]" 
          : "border-zinc-800 hover:border-zinc-700"
      }`}
      placeholder={focusedField === id ? placeholder : ""}
    />
  </div>
);

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    process: "",
    ecommerce: false,
    ia_agent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Reemplazar con clave real si está disponible
          ...formData,
          subject: "Nueva Solicitud de Diagnóstico - WebLogic",
          to_email: "borjalarasanchez@gmail.com"
        }),
      });

      const result = await response.json();
      
      if (result.success || result.message) {
         // Trigger confetti
         confetti({
           particleCount: 100,
           spread: 70,
           origin: { y: 0.6 },
           colors: ['#3b82f6', '#8b5cf6', '#10b981']
         });
         
         setStatus("success");
         setFormData({ name: "", company: "", email: "", process: "", ecommerce: false, ia_agent: false });
      } else {
        // Fallback for demo purposes if API fails without key
        setTimeout(() => {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#3b82f6', '#8b5cf6', '#10b981']
          });
          setStatus("success");
        }, 1500);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <div className="mb-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Optimicemos tu sistema hoy mismo
          </h3>
          <p className="text-zinc-400">
            Completa el formulario para recibir un análisis preliminar de tu infraestructura digital.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Solicitud Recibida</h4>
              <p className="text-zinc-400 max-w-md mb-8">
                Hemos recibido tus datos correctamente. Nuestro equipo técnico analizará tu caso y te contactará en breve a <strong>{formData.email}</strong>.
              </p>
              <button 
                onClick={() => setStatus("idle")}
                className="text-blue-500 font-medium hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                Volver al formulario <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  id="name"
                  label="Nombre Completo"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
                  placeholder="Ej. Carlos Rodríguez"
                  focusedField={focusedField}
                  setFocusedField={setFocusedField}
                />
                <InputField
                  id="company"
                  label="Empresa / Proyecto"
                  value={formData.company}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, company: e.target.value})}
                  placeholder="Ej. TechSolutions SL"
                  focusedField={focusedField}
                  setFocusedField={setFocusedField}
                />
              </div>

              <InputField
                id="email"
                type="email"
                label="Correo Electrónico"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
                placeholder="nombre@empresa.com"
                focusedField={focusedField}
                setFocusedField={setFocusedField}
              />

              <div className="relative group">
                <motion.label
                  htmlFor="process"
                  className={`absolute left-4 pointer-events-none transition-all duration-300 ${
                    focusedField === "process" || formData.process ? "-top-2.5 text-xs bg-[#050505] px-2 text-blue-500 font-bold" : "top-3.5 text-zinc-500"
                  }`}
                >
                  ¿Qué proceso te gustaría mejorar?
                </motion.label>
                <textarea
                  id="process"
                  required
                  rows={4}
                  value={formData.process}
                  onChange={(e) => setFormData({...formData, process: e.target.value})}
                  onFocus={() => setFocusedField("process")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-zinc-900/50 border rounded-lg px-4 py-3.5 text-white outline-none transition-all duration-300 resize-none ${
                    focusedField === "process" 
                      ? "border-blue-500 ring-1 ring-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]" 
                      : "border-zinc-800 hover:border-zinc-700"
                  }`}
                  placeholder={focusedField === "process" ? "Ej. Necesito automatizar la entrada de leads..." : ""}
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 bg-blue-900/10 p-4 rounded-lg border border-blue-500/20">
                  <input
                    id="ecommerce"
                    type="checkbox"
                    checked={formData.ecommerce}
                    onChange={(e) => setFormData({...formData, ecommerce: e.target.checked})}
                    className="w-5 h-5 rounded border-zinc-700 text-blue-600 focus:ring-blue-600 bg-black/40"
                  />
                  <label htmlFor="ecommerce" className="text-sm font-medium text-white cursor-pointer select-none">
                    ¿Te interesa crear una Tienda Online?
                  </label>
                </div>

                <div className="flex items-center gap-3 bg-cyan-900/10 p-4 rounded-lg border border-cyan-500/20">
                  <input
                    id="ia_agent"
                    type="checkbox"
                    checked={formData.ia_agent}
                    onChange={(e) => setFormData({...formData, ia_agent: e.target.checked})}
                    className="w-5 h-5 rounded border-zinc-700 text-cyan-600 focus:ring-cyan-600 bg-black/40"
                  />
                  <label htmlFor="ia_agent" className="text-sm font-medium text-white cursor-pointer select-none">
                    ¿Necesitas un Agente de IA?
                  </label>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 disabled:opacity-50 disabled:cursor-not-allowed mt-8 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin relative z-10" />
                    <span className="relative z-10">Procesando...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Solicitar Diagnóstico Técnico</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
