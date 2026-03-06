import React, { useState } from 'react';
import { AnimatedBubbles } from '../components/AnimatedBubbles';
import { InfoIcon, Clock, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SortimentPage() {
  const topDeal = {
    name: 'Frische-Aktion: Regionales Gemüse',
    desc: 'Beim Kauf von regionalem Gemüse ab 15€ erhalten Sie eine praktische Baumwolltasche GRATIS dazu! Perfekt für Ihren nächsten Einkauf.',
    img: '/promo.png',
    validity: 'Gültig bis Samstag',
    badge: 'Top Deal der Woche',
  };

  const productGrid = [
    { name: 'Äpfel aus der Region', weight: '2kg Netz', price: '2.99 €', oldPrice: '3.99 €', discount: '-20%', emoji: '🍎' },
    { name: 'Frische Vollmilch', weight: '1 Liter, 3.5% Fett', price: '1.19 €', oldPrice: '1.49 €', discount: '-15%', emoji: '🥛' },
    { name: 'Bauernbrot', weight: '500g Laib', price: '2.22 €', oldPrice: '2.99 €', discount: '-25%', emoji: '🍞' },
  ];

  const productCategories = [
    { title: 'Obst & Gemüse', items: ['Äpfel', 'Bananen', 'Tomaten', 'Paprika'] },
    { title: 'Backwaren', items: ['Brot', 'Brötchen', 'Kuchen'] },
    { title: 'Molkerei', items: ['Milch', 'Joghurt', 'Käse'] },
    { title: 'Fleisch', items: ['Huhn', 'Rind', 'Schwein'] },
    { title: 'Getränke', items: ['Wasser', 'Bier', 'Limonade'] },
    { title: 'Drogerie', items: ['Seife', 'Shampoo', 'Zahnpasta'] },
  ];

  return (
    <main className="flex-grow bg-[#FFFBF5]">
      {/* Banner */}
      <section className="relative">
        <img src="/banner.png" alt="Banner" className="w-full object-cover" />
      </section>

      {/* Aktuelle Angebote */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Aktuelle Angebote</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Entdecken Sie unsere wöchentlichen Highlights und sparen Sie bei Ihrem nächsten Einkauf.
        </p>
      </section>

      {/* Aktueller Prospekt */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img src="/promo.png" alt="Prospekt Vorschau" className="rounded-2xl w-full object-cover shadow-md" />
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Aktueller Prospekt</h2>
              <p className="text-gray-500">Gültig bis 15.08.</p>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Prospekt Vorschau</span>
              <p className="text-gray-700">Wochenangebote entdecken</p>
              <p className="text-gray-600">
                Gültig von Montag, 09.08. bis Samstag, 15.08.<br />
                Blättern Sie durch unseren aktuellen Prospekt und entdecken Sie alle Angebote der Woche bequem von zu Hause aus.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Prospekt herunterladen (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Deal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <img src={topDeal.img} alt="Top Deal" className="rounded-2xl w-full md:w-1/2 object-cover shadow-md" />
          <div className="flex-1 space-y-4">
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">{topDeal.badge}</span>
            <p className="text-gray-500 flex items-center gap-2">
              <Clock className="w-4 h-4" /> {topDeal.validity}
            </p>
            <h3 className="text-3xl font-bold text-gray-900">{topDeal.name}</h3>
            <p className="text-gray-700">{topDeal.desc}</p>
            <Link className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Jetzt im Markt finden
            </Link>
          </div>
        </div>
      </section>

      {/* Gemüse Angebot Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {productGrid.map((prod, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
            <div className="h-48 flex items-center justify-center bg-gray-50 relative">
              <div className="absolute top-4 left-4 bg-red-500 text-white font-bold px-3 py-1 rounded-lg z-10">{prod.discount}</div>
              <div className="text-6xl">{prod.emoji}</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-1">{prod.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{prod.weight}</p>
              <div className="flex items-end justify-between mt-auto">
                <div>
                  <span className="text-gray-400 line-through text-sm block">Statt {prod.oldPrice}</span>
                  <span className="text-3xl font-bold text-green-600">{prod.price}</span>
                </div>
                <button className="bg-green-900 text-white p-2 rounded-lg hover:bg-green-600 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Product Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productCategories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col p-6">
            <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
            <ul className="space-y-2 text-gray-700 mb-4">
              {cat.items.map((item, i) => (
                <li key={i}>- {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Final Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-[#2d5a27] rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
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
            <Link className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Zum Marktfinder
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}