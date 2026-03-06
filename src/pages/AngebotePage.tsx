import React from "react"
import { InfoIcon, Clock } from "lucide-react"
import { Link } from "react-router-dom"
import { AnimatedBubbles } from "../components/AnimatedBubbles"

export function AngebotePage() {

  const topDeal = {
    name: "Frische-Aktion: Regionales Gemüse",
    desc: "Beim Kauf von regionalem Gemüse ab 15€ erhalten Sie eine praktische Baumwolltasche GRATIS dazu! Perfekt für Ihren nächsten Einkauf.",
    img: "/promo.png",
    validity: "Gültig bis Samstag",
    badge: "Top Deal der Woche",
  }

  const productCategories = [
    {
      title: "Wasser",
      subtitle: "5 Kategorien",
      items: [
        "Mineralwasser",
        "Heilwasser",
        "Tafelwasser",
        "Aromatisiertes Wasser",
        "Babywasser",
      ],
      img: "/wasser.png",
    },
    {
      title: "Bier",
      subtitle: "6 Kategorien",
      items: [
        "Pils",
        "Weizen",
        "Helles",
        "Schwarzbier",
        "Alkoholfreies Bier",
        "Craft Beer",
      ],
      img: "/beer.png",
    },
    {
      title: "Limonade & Cola",
      subtitle: "5 Kategorien",
      items: [
        "Cola & Cola-Mix",
        "Orangenlimonade",
        "Zitronenlimonade",
        "Fassbrause",
        "Energy Drinks",
      ],
      img: "/limonaden.jpg",
    },
    {
      title: "Wein & Sekt",
      subtitle: "5 Kategorien",
      items: [
        "Rotwein",
        "Weißwein",
        "Rosé",
        "Sekt & Prosecco",
        "Glühwein",
      ],
      img: "/wein.jpg",
    },
    {
      title: "Fruchthaltige Getränke",
      subtitle: "5 Kategorien",
      items: [
        "Apfelsaft",
        "Orangensaft",
        "Multivitamin",
        "Gemüsesäfte",
        "Bio-Säfte",
      ],
      img: "/fruchtsaft.jpeg",
    },
    {
      title: "Spirituosen",
      subtitle: "6 Kategorien",
      items: [
        "Whisky",
        "Gin",
        "Wodka",
        "Rum",
        "Liköre",
        "Kräuterschnaps",
      ],
      img: "/spirituosen.jpg",
    },
  ]

  const buttonStyle =
    "mt-4 inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"

  return (
    <main className="flex-grow bg-[#FFFBF5]">

      {/* HERO BANNER */}
      <section className="relative w-full h-[230px] md:h-[280px] overflow-hidden">

        <img
          src="/banner.png"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex items-center justify-center px-4">

          <div className="relative bg-orange-500/90 rounded-2xl px-8 py-6 max-w-3xl text-center shadow-xl overflow-hidden">

            <AnimatedBubbles />

            <h1 className="relative text-3xl md:text-4xl font-bold text-white mb-2">
              Aktuelle Angebote
            </h1>

            <p className="relative text-white/90 text-lg">
              Entdecken Sie unsere wöchentlichen Highlights und sparen Sie bei Ihrem nächsten Einkauf.
            </p>

          </div>

        </div>

      </section>


      {/* PROSPEKT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            <img
              src="/pdf.png"
              alt="Prospekt Vorschau"
              className="rounded-2xl w-full object-cover shadow-md"
            />

            <div className="space-y-4">

              <h2 className="text-2xl font-bold">
                Aktueller Prospekt
              </h2>

              <p className="text-gray-500">
                Gültig bis 15.08.
              </p>

              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Prospekt Vorschau
              </span>

              <p className="text-gray-700">
                Wochenangebote entdecken
              </p>

              <p className="text-gray-600">
                Gültig von Montag, 09.08. bis Samstag, 15.08.
                <br />
                Blättern Sie durch unseren aktuellen Prospekt und entdecken Sie alle Angebote der Woche bequem von zu Hause aus.
              </p>

              <button className={buttonStyle}>
                Prospekt herunterladen (PDF)
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* TOP DEAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-12 flex flex-col md:flex-row items-center gap-8">

          <img
            src={topDeal.img}
            alt="Top Deal"
            className="rounded-2xl w-full md:w-1/2 object-cover shadow-md"
          />

          <div className="flex-1 space-y-4">

            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              {topDeal.badge}
            </span>

            <p className="text-gray-500 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {topDeal.validity}
            </p>

            <h3 className="text-3xl font-bold text-gray-900">
              {topDeal.name}
            </h3>

            <p className="text-gray-700">
              {topDeal.desc}
            </p>

            <Link
              to="/marktfinder"
              className={buttonStyle}
            >
              Jetzt im Markt finden
            </Link>

          </div>

        </div>

      </section>


      {/* PRODUCT CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {productCategories.map((cat, idx) => (

          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
          >

            <div className="h-48 relative overflow-hidden">

              <img
                src={cat.img}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                <h3 className="text-2xl font-bold mb-1">
                  {cat.title}
                </h3>

                <span className="text-sm opacity-90 font-medium">
                  {cat.subtitle}
                </span>

              </div>

            </div>

            <div className="p-6 flex flex-col flex-grow">

              <ul className="space-y-2 text-gray-700 mb-6">

                {cat.items.map((item, i) => (

                  <li key={i} className="flex items-center">

                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>

                    {item}

                  </li>

                ))}

              </ul>

              <Link
                to="/marktfinder"
                className="mt-auto inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Produkt ansehen
              </Link>

            </div>

          </div>

        ))}

      </section>


      {/* FINAL INFO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        <div className="bg-[#2d5a27] rounded-3xl p-8 md:p-12 text-white text-center">

          <InfoIcon className="w-12 h-12 text-green-300 mx-auto mb-6" />

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Nicht das Richtige gefunden?
          </h3>

          <p className="text-lg text-green-50 mb-8">
            Unser Sortiment variiert je nach Standort und Saison. Sprechen Sie unsere Mitarbeiter vor Ort an – wir bestellen gerne spezielle Wünsche für Sie!
          </p>

          <p className="text-sm text-green-200 italic mb-4">
            * Hinweis: Die Verfügbarkeit einzelner Produkte kann je nach Filiale variieren.
          </p>

          <Link
            to="/marktfinder"
            className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Zum Marktfinder
          </Link>

        </div>

      </section>

    </main>
  )
}