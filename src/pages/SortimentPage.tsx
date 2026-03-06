import React, { useState } from 'react';
import {
  InfoIcon,
  FileTextIcon,
  BookOpenIcon,
  BuildingIcon,
  ArrowRightIcon
} from 'lucide-react';
import { AnimatedBubbles } from '../components/AnimatedBubbles';
import { Link } from 'react-router-dom';

export function SortimentPage() {
  const [activeTab, setActiveTab] = useState<'info' | 'blog' | 'brands'>('info');

  // Product Categories Data with image paths
  const productCategories = [
    {
      title: 'Wasser',
      subtitle: '5 Kategorien',
      items: ['Mineralwasser', 'Heilwasser', 'Tafelwasser', 'Aromatisiertes Wasser', 'Babywasser'],
      img: '/wasser.png',
    },
    {
      title: 'Bier',
      subtitle: '6 Kategorien',
      items: ['Pils', 'Weizen', 'Helles', 'Schwarzbier', 'Alkoholfreies Bier', 'Craft Beer'],
      img: '/beer.png',
    },
    {
      title: 'Limonade & Cola',
      subtitle: '5 Kategorien',
      items: ['Cola & Cola-Mix', 'Orangenlimonade', 'Zitronenlimonade', 'Fassbrause', 'Energy Drinks'],
      img: '/limonade.png',
    },
    {
      title: 'Wein & Sekt',
      subtitle: '5 Kategorien',
      items: ['Rotwein', 'Weißwein', 'Rosé', 'Sekt & Prosecco', 'Glühwein'],
      img: '/wein.jpg',
    },
    {
      title: 'Fruchthaltige Getränke',
      subtitle: '5 Kategorien',
      items: ['Apfelsaft', 'Orangensaft', 'Multivitamin', 'Gemüsesäfte', 'Bio-Säfte'],
      img: '/fruchtsaft.jpeg',
    },
    {
      title: 'Spirituosen',
      subtitle: '6 Kategorien',
      items: ['Whisky', 'Gin', 'Wodka', 'Rum', 'Liköre', 'Kräuterschnaps'],
      img: '/spirituosen.jpg',
    },
  ];

  return (
    <div className="w-full pb-20">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-[#2d5a27] via-green-700 to-green-600 py-16 text-white text-center overflow-hidden">
        <AnimatedBubbles />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unser Sortiment</h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto px-4">
            Frische und Vielfalt für Ihren Alltag. Entdecken Sie unsere Produkte, Rezepte und Partnermarken.
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('info')}
              className={`py-4 px-2 border-b-2 font-bold flex items-center whitespace-nowrap transition-colors ${
                activeTab === 'info' ? 'border-[#2d5a27] text-[#2d5a27]' : 'border-transparent text-gray-500 hover:text-green-700'
              }`}
            >
              <FileTextIcon className="w-4 h-4 mr-2" />
              Informationen
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`py-4 px-2 border-b-2 font-bold flex items-center whitespace-nowrap transition-colors ${
                activeTab === 'blog' ? 'border-[#2d5a27] text-[#2d5a27]' : 'border-transparent text-gray-500 hover:text-green-700'
              }`}
            >
              <BookOpenIcon className="w-4 h-4 mr-2" />
              Blog & Rezepte
            </button>
            <button
              onClick={() => setActiveTab('brands')}
              className={`py-4 px-2 border-b-2 font-bold flex items-center whitespace-nowrap transition-colors ${
                activeTab === 'brands' ? 'border-[#2d5a27] text-[#2d5a27]' : 'border-transparent text-gray-500 hover:text-green-700'
              }`}
            >
              <BuildingIcon className="w-4 h-4 mr-2" />
              Unsere Marken
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Tab Content: Informationen */}
        {activeTab === 'info' && (
          <div className="space-y-12">
            {/* Prospekt Section */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
              <img src="/banner.png" alt="Banner" className="rounded-2xl w-full object-cover mb-6 shadow-md" />

              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-1">Aktueller Prospekt</h2>
                <p className="text-gray-700 mb-1">Gültig bis 15.08.</p>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mb-2">Prospekt Vorschau</span>
                <p className="text-gray-700 mb-2">Wochenangebote entdecken</p>
                <p className="text-gray-600 mb-4">
                  Gültig von Montag, 09.08. bis Samstag, 15.08.<br />
                  Blättern Sie durch unseren aktuellen Prospekt und entdecken Sie alle Angebote der Woche bequem von zu Hause aus.
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                  Prospekt herunterladen (PDF)
                </button>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold mb-2">Highlights der Woche</h3>
                <p className="text-gray-700 mb-1 font-medium">Gültig bis Samstag</p>
                <p className="text-gray-800 mb-3 font-semibold">Top Deal der Woche</p>
                <p className="text-gray-700 mb-4">
                  Frische-Aktion: Regionales Gemüse<br />
                  Beim Kauf von regionalem Gemüse ab 15€ erhalten Sie eine praktische Baumwolltasche GRATIS dazu! Perfekt für Ihren nächsten Einkauf.
                </p>
                <Link
                  to="/marktfinder"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors"
                >
                  Jetzt im Markt finden
                </Link>
              </div>
            </div>

            {/* Product Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((cat, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                  <div className="h-48 relative overflow-hidden flex items-center justify-center">
                    <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-2xl font-bold mb-1">{cat.title}</h2>
                      <span className="text-sm opacity-90 font-medium">{cat.subtitle}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <ul className="space-y-2 text-gray-700 mb-4">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/marktfinder"
                      className="mt-auto inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-center"
                    >
                      Produkt ansehen
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Section */}
            <div className="bg-[#2d5a27] rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden mt-12">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-green-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-green-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <InfoIcon className="w-12 h-12 text-green-300 mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Nicht das Richtige gefunden?</h3>
                <p className="text-lg text-green-50 mb-8">
                  Unser Sortiment variiert je nach Standort und Saison. Sprechen Sie unsere Mitarbeiter vor Ort an – wir bestellen gerne spezielle Wünsche für Sie!
                </p>
                <p className="text-sm text-green-200 italic mb-4">
                  * Hinweis: Die Verfügbarkeit einzelner Produkte kann je nach Filiale variieren.
                </p>
                <Link
                  to="/marktfinder"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors"
                >
                  Zum Marktfinder
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Blog */}
        {activeTab === 'blog' && (
          <div className="space-y-8">{/* Existing Blog Content */}</div>
        )}

        {/* Tab Content: Brands */}
        {activeTab === 'brands' && (
          <div>{/* Existing Brands Content */}</div>
        )}
      </div>
    </div>
  );
}