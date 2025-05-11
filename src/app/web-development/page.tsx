"use client";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WebDevelopmentPage() {
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
              Développement Web
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto text-gray-300 mb-12">
              Créez une présence en ligne qui se démarque avec nos solutions de
              développement web innovantes et performantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Nos Expertises
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
                Sites Vitrines & E-commerce
              </h3>
              <p className="text-gray-200 mb-4">
                Que vous ayez besoin d'une vitrine élégante pour votre
                entreprise ou d'une boutique en ligne complète, nous concevons
                des sites web qui convertissent les visiteurs en clients.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Design sur mesure et responsive</li>
                <li>Optimisation pour les moteurs de recherche (SEO)</li>
                <li>Interface d'administration intuitive</li>
                <li>Intégration des passerelles de paiement sécurisées</li>
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
                Applications Web Progressives
              </h3>
              <p className="text-gray-200 mb-4">
                Offrez à vos utilisateurs une expérience fluide et immersive
                avec nos applications web progressives (PWA) qui fonctionnent
                même hors connexion.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>
                  Expérience utilisateur similaire à une application native
                </li>
                <li>Fonctionnement hors ligne</li>
                <li>Performances optimisées même sur réseaux lents</li>
                <li>Installation sans passer par les stores d'applications</li>
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
                Interfaces Administrateur
              </h3>
              <p className="text-gray-200 mb-4">
                Nous développons des tableaux de bord et interfaces
                d'administration puissants qui offrent une visibilité complète
                sur vos données et opérations.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Visualisations de données interactives</li>
                <li>Tableaux de bord personnalisables</li>
                <li>Systèmes d'authentification sécurisés</li>
                <li>Gestion des rôles et permissions</li>
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
                API & Intégrations
              </h3>
              <p className="text-gray-200 mb-4">
                Connectez vos systèmes et applications avec des API robustes et
                des intégrations sur mesure qui facilitent l'échange de données.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Développement d'API RESTful</li>
                <li>Intégrations avec des services tiers</li>
                <li>Documentation complète et tests automatisés</li>
                <li>Sécurisation des échanges de données</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Nos Technologies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {
                name: "React",
                description: "Interfaces utilisateur réactives",
              },
              { name: "Next.js", description: "Applications web performantes" },
              { name: "Node.js", description: "Backend scalable" },
              {
                name: "TypeScript",
                description: "Code robuste et maintenable",
              },
              { name: "GraphQL", description: "Requêtes de données efficaces" },
              {
                name: "TailwindCSS",
                description: "Design moderne et responsive",
              },
              { name: "Vercel", description: "Déploiement continu" },
              { name: "Firebase", description: "BaaS et temps réel" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2 text-indigo-400">
                  {tech.name}
                </h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à démarrer votre projet web ?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et
            obtenir un devis personnalisé.
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
