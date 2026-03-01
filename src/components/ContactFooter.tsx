"use client";

import { useState } from "react";
import { Github, Linkedin, Twitter, Send } from "lucide-react";
import { motion } from "framer-motion";

export function ContactFooter() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    // Validación básica
    const tempErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = "El nombre es requerido";
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = "El email es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email inválido";
      isValid = false;
    }
    if (!formData.message) {
      tempErrors.message = "El mensaje es requerido";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      }, 1500);
    }
  };

  return (
    <footer className="relative w-full bg-zinc-950 pt-24 pb-12 border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 justify-between">
          
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Hablemos de Lógica</h2>
            <p className="text-zinc-400 mb-8">¿Listo para sistematizar tu negocio? Déjame un mensaje.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full bg-zinc-900 border ${errors.name ? 'border-red-500' : 'border-zinc-800'} rounded-lg p-4 text-zinc-100 focus:outline-none focus:border-blue-500 transition-colors`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-zinc-900 border ${errors.email ? 'border-red-500' : 'border-zinc-800'} rounded-lg p-4 text-zinc-100 focus:outline-none focus:border-blue-500 transition-colors`}
                />
                 {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-zinc-900 border ${errors.message ? 'border-red-500' : 'border-zinc-800'} rounded-lg p-4 text-zinc-100 focus:outline-none focus:border-blue-500 transition-colors`}
                />
                 {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : isSuccess ? "Enviado con éxito" : (
                  <>
                    Enviar Mensaje <Send className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>
          </div>

          {/* Social & Info */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6">Conecta</h3>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors border border-zinc-800">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors border border-zinc-800">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors border border-zinc-800">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
               <h1 className="text-2xl font-bold mb-2">Web<span className="text-blue-500">Logic</span></h1>
               <p className="text-zinc-500 text-sm">
                 © {new Date().getFullYear()} WebLogic. Todos los derechos reservados.
                 <br />
                 Diseñado y construido con Next.js & Tailwind.
               </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
