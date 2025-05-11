"use client";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CloudSolutionsPage() {
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
              Solutions Cloud
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto text-gray-300 mb-12">
              Optimisez votre infrastructure avec nos solutions cloud
              évolutives, sécurisées et performantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Nos Services Cloud
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
                Infrastructure as a Service (IaaS)
              </h3>
              <p className="text-gray-200 mb-4">
                Nous vous offrons une infrastructure cloud flexible et évolutive
                qui s'adapte parfaitement à vos besoins métier.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Serveurs virtuels haute performance</li>
                <li>Stockage sécurisé et redondant</li>
                <li>Réseaux virtuels privés</li>
                <li>Scaling automatique selon la charge</li>
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
                Platform as a Service (PaaS)
              </h3>
              <p className="text-gray-200 mb-4">
                Concentrez-vous sur votre code pendant que nous gérons
                l'environnement d'exécution, les bases de données et les
                middlewares.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Environnements de développement préconfigurés</li>
                <li>Bases de données managées</li>
                <li>CI/CD intégré</li>
                <li>Monitoring et alerting</li>
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
                Sécurité Cloud
              </h3>
              <p className="text-gray-200 mb-4">
                Protégez vos données et applications avec nos solutions de
                sécurité cloud avancées.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Pare-feu applicatifs (WAF)</li>
                <li>Détection et prévention des intrusions</li>
                <li>Gestion des identités et des accès</li>
                <li>Chiffrement des données</li>
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
                Containerisation & Orchestration
              </h3>
              <p className="text-gray-200 mb-4">
                Modernisez vos applications avec nos services de
                containerisation et d'orchestration Kubernetes.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Mise en conteneur d'applications existantes</li>
                <li>Clusters Kubernetes managés</li>
                <li>Service mesh pour la communication inter-services</li>
                <li>Déploiements canary et blue/green</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Avantages de Nos Solutions Cloud
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Réduction des Coûts",
                description:
                  "Optimisez vos dépenses IT en ne payant que pour les ressources que vous utilisez réellement.",
              },
              {
                title: "Haute Disponibilité",
                description:
                  "Garantissez la continuité de vos services avec une infrastructure répartie sur plusieurs zones géographiques.",
              },
              {
                title: "Évolutivité",
                description:
                  "Adaptez instantanément vos ressources à la croissance de votre activité sans investissements matériels.",
              },
              {
                title: "Sécurité Renforcée",
                description:
                  "Bénéficiez de mécanismes de sécurité avancés et de mises à jour automatiques.",
              },
              {
                title: "Innovation Accélérée",
                description:
                  "Déployez de nouvelles fonctionnalités plus rapidement grâce à l'automatisation et aux environnements de test à la demande.",
              },
              {
                title: "Support 24/7",
                description:
                  "Notre équipe d'experts assure une surveillance constante et répond rapidement à toute anomalie.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-indigo-400">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Logo Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technologies Cloud
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { name: "AWS", description: "Amazon Web Services" },
              { name: "Azure", description: "Microsoft Cloud" },
              { name: "GCP", description: "Google Cloud Platform" },
              {
                name: "Kubernetes",
                description: "Orchestration de conteneurs",
              },
              { name: "Docker", description: "Containerisation" },
              { name: "Terraform", description: "Infrastructure as Code" },
              { name: "Prometheus", description: "Monitoring & Alerting" },
              { name: "Istio", description: "Service Mesh" },
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
            Prêt à migrer vers le cloud ?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Contactez-nous pour une évaluation gratuite de vos besoins en
            infrastructure cloud.
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
