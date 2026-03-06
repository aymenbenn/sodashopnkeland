import { motion } from "framer-motion";

const topCards = [
  {
    title: "Erfrischendes Zitronenwasser",
    description:
      "Perfekt für heiße Sommertage – einfach, gesund und lecker.",
    img: "/zitronenwasser.png",
    text: `Erfrischendes Zitronenwasser gehört zu den beliebtesten und gleichzeitig
    einfachsten Getränken, wenn es um natürliche Hydration und gesunden Genuss
    geht. Dieses klassische Getränk kombiniert frisches Wasser mit dem
    unverwechselbaren Aroma sonnengereifter Zitronen und bietet eine perfekte
    Balance zwischen leichter Säure und angenehmer Frische. Besonders an heißen
    Sommertagen oder nach sportlicher Aktivität ist Zitronenwasser eine ideale
    Möglichkeit, den Körper mit Flüssigkeit zu versorgen und gleichzeitig einen
    belebenden Geschmack zu genießen. Viele Menschen integrieren Zitronenwasser
    in ihre tägliche Routine, da es nicht nur erfrischend schmeckt, sondern auch
    als leichter und natürlicher Start in den Tag dient.`,
  },
  {
    title: "Hausgemachte Limonade",
    description:
      "Mit frischen Früchten, ohne Zuckerzusatz – ein Genuss für Groß & Klein.",
    img: "/hausgemachte_limonade.png",
    text: `Hausgemachte Limonade ist ein zeitloser Klassiker unter den
    Erfrischungsgetränken und begeistert mit ihrem natürlichen Geschmack
    und ihrer vielseitigen Zubereitung. Im Gegensatz zu industriellen
    Softdrinks ermöglicht eine selbstgemachte Limonade die vollständige
    Kontrolle über Zutaten, Süße und Fruchtaromen. Frische Zitronen,
    Orangen oder Beeren können miteinander kombiniert werden, um
    individuelle Geschmacksrichtungen zu kreieren.`,
  },
  {
    title: "Fruchtige Smoothies",
    description:
      "Vitaminreich & erfrischend – ideal für einen Energieschub.",
    img: "/fruchtige_smoothies.png",
    text: `Fruchtige Smoothies sind eine köstliche und nährstoffreiche
    Möglichkeit, frisches Obst in ein cremiges Getränk zu verwandeln.
    Sie sind besonders beliebt bei Menschen, die Wert auf gesunde
    Ernährung legen und gleichzeitig nicht auf intensiven Geschmack
    verzichten möchten.`,
  },
  {
    title: "Gin-Cocktail Ideen",
    description:
      "Exklusive Rezepte für besondere Anlässe und entspannte Abende.",
    img: "/gin_cocktail.png",
    text: `Gin-Cocktails gehören zu den elegantesten Getränken der
    modernen Cocktailkultur. Mit seinem charakteristischen Aroma
    aus Wacholder und botanischen Zutaten bildet Gin die perfekte
    Grundlage für kreative Cocktailkreationen.`,
  },
];

export default function RecipesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="text-center py-20 bg-gradient-to-r from-orange-400 to-orange-500 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Getränke Rezepte entdecken
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Entdecken Sie köstliche Getränkerezepte – von erfrischenden
          Sommerdrinks bis zu kreativen Cocktailideen. Perfekt für
          Partys, Familienabende oder einfach für den Genuss im Alltag.
        </p>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {topCards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                {card.title}
              </h3>

              <p className="text-sm text-gray-500 mb-3">
                {card.description}
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}