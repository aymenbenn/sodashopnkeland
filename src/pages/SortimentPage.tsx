import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InfoIcon, FileTextIcon, BookOpenIcon, BuildingIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productCategories } from '../data/productCategories';
import { AnimatedBubbles } from '../components/AnimatedBubbles';

export const SortimentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'brands'>('info');

  return (
    <div className="w-full pb-20 relative">
      {/* Header with bubbles */}
      <div className="relative bg-gradient-to-br from-[#FF7F50] via-orange-700 to-orange-600 py-16 text-white text-center overflow-hidden">
        <AnimatedBubbles className="z-0" />
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unser Sortiment</h1>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto px-4">
            Frische und Vielfalt für Ihren Alltag. Entdecken Sie unsere Produkte, Rezepte und Partnermarken.
          </p>
        </motion.div>
      </div>

      {/* Tabs */}
<div className="bg-white border-b border-gray-200 shadow-sm sticky top-20 z-40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-center md:justify-start">
      {[
        { key: 'info', label: 'Informationen', icon: FileTextIcon },
        { key: 'blog', label: 'Blog & Rezepte', icon: BookOpenIcon, link: '/blog' },
        { key: 'brands', label: 'Unsere Marken', icon: BuildingIcon },
      ].map((tab) => {
        const baseClasses =
          'flex-1 text-center py-4 border-b-2 font-bold flex items-center justify-center transition-colors';

        const activeClasses = activeTab === tab.key ? 'border-[#2d5a27] text-[#2d5a27]' : 'border-transparent text-gray-500 hover:text-orange-700';

        if (tab.link) {
          return (
            <Link key={tab.key} to={tab.link} className={`${baseClasses} ${activeClasses}`}>
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </Link>
          );
        } else {
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as 'info' | 'brands')}
              className={`${baseClasses} ${activeClasses}`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          );
        }
      })}
    </div>
  </div>
</div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Information Tab */}
        {activeTab === 'info' && (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((cat) => (
              <motion.div
                key={cat.title}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col"
              >
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
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/marktfinder"
                    className="mt-auto inline-block bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors text-center"
                  >
                    Produkt ansehen
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Brands Tab */}
        {activeTab === 'brands' && (
          <motion.div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <img src="/aqualina.png" className="h-20 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Aqualina</h3>
              <p className="text-gray-600">
                Frisches Gebirgswasser in bester Qualität – erhältlich in still, medium und spritzig.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <img src="/adelsdorfer.png" className="h-20 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Adelsdorfer</h3>
              <p className="text-gray-600">
                Traditionell gebrautes Bier von höchster Qualität – vollmundig, ausgewogen und erfrischend.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <img src="/fruchtgarten.png" className="h-20 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Fruchtgarten</h3>
              <p className="text-gray-600">
                Erlesene Säfte voller natürlicher Frische und intensivem Geschmack zu einem attraktiven Preis.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};