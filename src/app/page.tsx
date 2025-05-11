// src/app/page.tsx
"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";

export default function LandingPage() {
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
          <a href="#decouvrir">
            <Button className="text-lg px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 shadow-lg transition-transform hover:scale-105">
              Découvrir
            </Button>
          </a>
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
        id="decouvrir"
        className="py-20 bg-gray-800 text-white px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Nos Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Développement Web</h3>
              <p className="text-gray-200 mb-6">
                Création de sites web et d'applications robustes, modernes et optimisés pour tous les appareils.
              </p>
              <Link href="/web-development">
                <Button variant="outline" className="w-full">En savoir plus</Button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Solutions Cloud</h3>
              <p className="text-gray-200 mb-6">
                Infrastructure évolutive et sécurisée pour vos applications critiques et vos données sensibles.
              </p>
              <Link href="/cloud-solutions">
                <Button variant="outline" className="w-full">En savoir plus</Button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Intelligence Artificielle</h3>
              <p className="text-gray-200 mb-6">
                Intégration de solutions IA personnalisées pour automatiser et optimiser vos processus métier.
              </p>
              <Link href="/ai">
                <Button variant="outline" className="w-full">En savoir plus</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nouvelle section de contact remplaçant l'ancienne */}
      <ContactSection />
    </>
  );
}