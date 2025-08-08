import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inscription à la newsletter:", email);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 space-y-16 bg-white text-black">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl font-extrabold leading-tight">
          Enquêter autrement. Publier avec rigueur. 
          <span className="block text-blue-600 mt-2">Bienvenue sur Ba7ath.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Plateforme collaborative dédiée à l'investigation, au datajournalisme et à l'OSINT dans le monde arabe.
        </p>
        <Button className="mt-6 text-lg px-8 py-4">Explorer les enquêtes</Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
      >
        <Card className="rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Guides & Méthodes</h2>
            <p className="text-gray-600 text-sm">
              Explore des méthodologies éprouvées en investigation et OSINT, validées par des experts.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Formations interactives</h2>
            <p className="text-gray-600 text-sm">
              Accède à des modules pratiques pour apprendre à enquêter, documenter et publier en toute autonomie.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Projets collaboratifs</h2>
            <p className="text-gray-600 text-sm">
              Participe à des enquêtes collectives, co-construis des dossiers et fais entendre ta voix.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="w-full max-w-xl mt-12 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Rejoindre la communauté</h2>
        <p className="text-gray-600 mb-6">
          Inscris-toi à notre newsletter pour recevoir nos enquêtes, outils et appels à projets.
        </p>
        <form onSubmit={handleSubmit} className="flex items-center gap-4 justify-center">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ton adresse email"
            className="w-64"
            required
          />
          <Button type="submit">S'inscrire</Button>
        </form>
      </motion.div>
    </main>
  );
}