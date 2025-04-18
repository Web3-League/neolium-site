// src/app/page.tsx
"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function LandingPage() {
  const [state, handleSubmit] = useForm("xnnpklpk");

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-center mb-6"
        >
          Néolium
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-center max-w-xl mb-10"
        >
          Une solution puissante, fiable et innovante — conçue pour redéfinir
          les standards numériques modernes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-4"
        >
          <Button className="text-lg px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 shadow-lg transition-transform hover:scale-105">
            Découvrir
          </Button>
          <a href="#contact">
            <Button
              variant="outline"
              className="text-lg px-6 py-3 rounded-xl border-white hover:bg-white hover:text-gray-900 transition-transform hover:scale-105"
            >
              Contactez-nous
            </Button>
          </a>
        </motion.div>
      </main>

      <section
        id="contact"
        className="py-20 bg-gray-900 text-white text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contactez-nous</h2>

        {state.succeeded ? (
          <p className="text-green-400 text-xl">Merci pour votre message !</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Votre email"
              required
              className="block w-full mb-4 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              id="message"
              name="message"
              placeholder="Votre message"
              required
              className="block w-full mb-4 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={5}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-transform hover:scale-105 shadow-lg"
            >
              Envoyer
            </button>
          </form>
        )}
      </section>
    </>
  );
}
