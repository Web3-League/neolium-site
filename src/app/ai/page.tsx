"use client";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Intelligence Artificielle
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto text-gray-300 mb-12">
              Transformez votre entreprise avec nos solutions d'intelligence
              artificielle sur mesure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Nos Solutions d'IA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">
                Traitement du Langage Naturel
              </h3>
              <p className="text-gray-200 mb-4">
                Exploitez la puissance du NLP pour analyser, comprendre et
                générer du texte automatiquement.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Chatbots intelligents et assistants virtuels</li>
                <li>Analyse de sentiment et de feedback client</li>
                <li>Extraction automatique d'informations</li>
                <li>Classification et résumé de documents</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">
                Vision par Ordinateur
              </h3>
              <p className="text-gray-200 mb-4">
                Automatisez l'analyse d'images et de vidéos pour détecter des
                objets, des visages ou des défauts.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Reconnaissance d'objets et de personnes</li>
                <li>Contrôle qualité industriel</li>
                <li>Analyse de flux vidéo en temps réel</li>
                <li>OCR (reconnaissance de texte dans les images)</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">
                IA Prédictive
              </h3>
              <p className="text-gray-200 mb-4">
                Anticipez les tendances futures grâce à nos modèles
                d'apprentissage automatique avancés.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Prévision des ventes et de la demande</li>
                <li>Détection de fraudes et d'anomalies</li>
                <li>Maintenance prédictive des équipements</li>
                <li>Segmentation et ciblage client</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">
                IA Générative
              </h3>
              <p className="text-gray-200 mb-4">
                Créez du contenu original et de haute qualité automatiquement
                avec nos modèles génératifs.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Génération de textes et d'articles</li>
                <li>Création d'images et de designs</li>
                <li>Synthèse vocale naturelle</li>
                <li>Génération de code et prototypage rapide</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Notre Processus d'Implémentation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Analyse des Besoins",
                description:
                  "Nous identifions les défis spécifiques de votre entreprise qui peuvent être résolus par l'IA.",
              },
              {
                step: "2",
                title: "Conception de Solution",
                description:
                  "Nous concevons une architecture d'IA adaptée à vos objectifs et compatible avec vos systèmes existants.",
              },
              {
                step: "3",
                title: "Développement & Entraînement",
                description:
                  "Nous développons et entraînons des modèles d'IA avec vos données pour garantir leur pertinence.",
              },
              {
                step: "4",
                title: "Déploiement & Suivi",
                description:
                  "Nous intégrons la solution à votre environnement et assurons un suivi continu des performances.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-700 p-6 rounded-xl shadow-lg relative"
              >
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-indigo-400 mt-4">
                  {process.title}
                </h3>
                <p className="text-gray-300">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Études de Cas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-6 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-40 bg-gray-600 rounded-lg mb-4 flex items-center justify-center text-4xl font-bold text-indigo-400">
                Retail
              </div>
              <h3 className="text-xl font-bold mb-3 text-indigo-400">
                Optimisation du Stock pour un Grand Distributeur
              </h3>
              <p className="text-gray-300 mb-4">
                Notre système d'IA prédictive a permis de réduire les ruptures
                de stock de 37% et d'optimiser les niveaux d'inventaire,
                générant une économie annuelle de 2,4M€.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-6 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-40 bg-gray-600 rounded-lg mb-4 flex items-center justify-center text-4xl font-bold text-indigo-400">
                Banque
              </div>
              <h3 className="text-xl font-bold mb-3 text-indigo-400">
                Détection de Fraude pour une Institution Financière
              </h3>
              <p className="text-gray-300 mb-4">
                Notre solution d'IA a permis de détecter 92% des transactions
                frauduleuses en temps réel, réduisant les pertes de 15M€ la
                première année.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-6 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-40 bg-gray-600 rounded-lg mb-4 flex items-center justify-center text-4xl font-bold text-indigo-400">
                Industrie
              </div>
              <h3 className="text-xl font-bold mb-3 text-indigo-400">
                Maintenance Prédictive pour un Constructeur Automobile
              </h3>
              <p className="text-gray-300 mb-4">
                Notre système de vision par ordinateur a réduit les temps
                d'arrêt des chaînes de production de 23% et prolongé la durée de
                vie des équipements de 15%.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à transformer votre entreprise avec l'IA ?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Contactez nos experts pour découvrir comment l'intelligence
            artificielle peut résoudre vos défis métier.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#contact">
              <Button className="text-lg w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700">
                Contactez-nous
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="text-lg w-full sm:w-auto">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
