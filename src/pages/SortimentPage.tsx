import React, { useState } from 'react';
import {
  InfoIcon,
  FileTextIcon,
  BookOpenIcon,
  BuildingIcon,
  ArrowRightIcon } from
'lucide-react';
import { AnimatedBubbles } from '../components/AnimatedBubbles';
export function SortimentPage() {
  const [activeTab, setActiveTab] = useState<'info' | 'blog' | 'brands'>('info');
  return (
    <div className="w-full pb-20">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-[#2d5a27] via-green-700 to-green-600 py-16 text-white text-center overflow-hidden">
        <AnimatedBubbles />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unser Sortiment
          </h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto px-4">
            Frische und Vielfalt für Ihren Alltag. Entdecken Sie unsere
            Produkte, Rezepte und Partnermarken.
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('info')}
              className={`py-4 px-2 border-b-2 font-bold flex items-center whitespace-nowrap transition-colors ${activeTab === 'info' ? 'border-[#2d5a27] text-[#2d5a27]' : 'border-transparent text-gray-500 hover:text-green-700'}`}>

              <FileTextIcon className="w-4 h-4 mr-2" />
              Informationen
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`py-4 px-2 border-b-2 font-bold flex items-center whitespace-nowrap transition-colors ${activeTab === 'blog' ? 'border-[#2d5a27] text-[#2d5a27]' : 'border-transparent text-gray-500 hover:text-green-700'}`}>

              <BookOpenIcon className="w-4 h-4 mr-2" />
              Blog & Rezepte
            </button>
            <button
              onClick={() => setActiveTab('brands')}
              className={`py-4 px-2 border-b-2 font-bold flex items-center whitespace-nowrap transition-colors ${activeTab === 'brands' ? 'border-[#2d5a27] text-[#2d5a27]' : 'border-transparent text-gray-500 hover:text-green-700'}`}>

              <BuildingIcon className="w-4 h-4 mr-2" />
              Unsere Marken
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Tab Content: Informationen */}
        {activeTab === 'info' &&
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Obst & Gemüse */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                  <span className="text-7xl">🥬</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-1">Obst & Gemüse</h2>
                    <span className="text-sm opacity-90 font-medium">
                      Regional & Frisch
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Regionales Saisongemüse
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Exotische Früchte
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Bio-Produkte
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Kräuter & Salate
                    </li>
                  </ul>
                </div>
              </div>

              {/* Backwaren */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <span className="text-7xl">🥖</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-1">Backwaren</h2>
                    <span className="text-sm opacity-90 font-medium">
                      Täglich frisch
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Brot & Brötchen
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Süße Teilchen
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Kuchen & Torten
                    </li>
                  </ul>
                </div>
              </div>

              {/* Molkerei */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
                  <span className="text-7xl">🧀</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-1">Molkerei</h2>
                    <span className="text-sm opacity-90 font-medium">
                      Käse & Milchprodukte
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Käsetheke
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Milch & Joghurt
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Pflanzliche Alternativen
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="bg-[#2d5a27] rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-green-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-green-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <InfoIcon className="w-12 h-12 text-green-300 mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Nicht das Richtige gefunden?
                </h3>
                <p className="text-lg text-green-50 mb-8">
                  Unser Sortiment variiert je nach Standort und Saison. Sprechen
                  Sie unsere Mitarbeiter vor Ort an – wir bestellen gerne
                  spezielle Wünsche für Sie!
                </p>
                <p className="text-sm text-green-200 italic">
                  * Hinweis: Die Verfügbarkeit einzelner Produkte kann je nach
                  Filiale variieren.
                </p>
              </div>
            </div>
          </div>
        }

        {/* Tab Content: Blog */}
        {activeTab === 'blog' &&
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#2d5a27] mb-6">
              Aktuelle Beiträge & Rezepte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
            {
              title: 'Frühlingsrezepte mit Spargel',
              desc: 'Entdecken Sie leckere und einfache Gerichte für die Spargelsaison.',
              img: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
            },
            {
              title: 'Regionale Produzenten im Fokus',
              desc: 'Wir stellen vor: Der Bauernhof Müller und seine frischen Eier.',
              img: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
            },
            {
              title: 'Nachhaltig einkaufen',
              desc: 'Tipps, wie Sie Müll vermeiden und umweltbewusst einkaufen können.',
              img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
            },
            {
              title: 'Grillsaison eröffnet',
              desc: 'Die besten Marinaden und Beilagen für Ihr nächstes BBQ.',
              img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
            }].
            map((post, i) =>
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col sm:flex-row hover:shadow-lg transition-shadow">

                  <div className="sm:w-2/5 h-48 sm:h-auto relative">
                    <img
                  src={post.img}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover" />

                  </div>
                  <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-[#2d5a27] mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.desc}</p>
                    <button className="text-green-600 font-semibold flex items-center hover:text-green-800 transition-colors mt-auto">
                      Weiterlesen <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
            )}
            </div>
          </div>
        }

        {/* Tab Content: Brands */}
        {activeTab === 'brands' &&
        <div>
            <h2 className="text-3xl font-bold text-[#2d5a27] mb-6">
              Unsere Partnermarken
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Wir arbeiten eng mit bekannten Marken und regionalen Erzeugern
              zusammen, um Ihnen stets die beste Qualität zu bieten.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center justify-center aspect-square hover:shadow-md transition-shadow">

                  <div className="text-center text-gray-400">
                    <BuildingIcon className="w-10 h-10 mx-auto mb-2 opacity-50" />
                    <span className="font-medium text-sm">Marke {i}</span>
                  </div>
                </div>
            )}
            </div>
          </div>
        }
      </div>
    </div>);

}