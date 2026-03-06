// src/pages/BlogPage.tsx
import React, { useState } from 'react';
import { FloatingContactBar } from '../components/ContactIconButtons';
import { productCategories } from '../data/productCategories';

const topCards = [
  {
    title: 'Erfrischendes Zitronenwasser',
    description: 'Perfekt für heiße Sommertage – einfach, gesund und lecker.',
    img: '/zitronenwasser.png', // image in public folder
  },
  {
    title: 'Hausgemachte Limonade',
    description: 'Mit frischen Früchten, ohne Zuckerzusatz – ein Genuss für Groß & Klein.',
    img: '/hausgemachte_limonade.png',
  },
  {
    title: 'Fruchtige Smoothies',
    description: 'Vitaminreich & erfrischend – ideal für einen Energieschub.',
    img: '/fruchtige_smoothies.png',
  },
  {
    title: 'Gin-Cocktail Ideen',
    description: 'Exklusive Rezepte für besondere Anlässe und entspannte Abende.',
    img: '/gin_cocktail.png',
  },
];

export const BlogPage: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ title: string; description: string } | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Recipes Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Unsere Top-Rezepte</h2>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4">
          {topCards.map((card) => (
            <div
              key={card.title}
              onClick={() => setModalContent(card)}
              className="cursor-pointer min-w-[250px] flex-shrink-0 bg-white rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              {/* Image */}
              <div className="h-40 w-full relative rounded-t-2xl overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Blog Section */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-16 space-y-24">
        <h1 className="text-5xl font-extrabold mb-16 text-center text-gray-800">Blog & Rezepte</h1>

        {productCategories.map((cat, index) => (
          <div
            key={cat.title}
            className={`flex flex-col md:flex-row items-center md:items-stretch ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } bg-white rounded-3xl shadow-lg overflow-hidden`}
          >
            <div
              className="md:w-1/2 h-64 md:h-auto relative flex-shrink-0 cursor-pointer"
              onClick={() => setModalContent({ title: cat.title, description: cat.blogText })}
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="md:w-1/2 p-8 flex flex-col justify-center bg-orange-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{cat.title}</h2>
              <span className="text-lg font-medium text-gray-700 mb-6">{cat.subtitle}</span>
              <p className="text-gray-800 whitespace-pre-line mb-6">{cat.blogText}</p>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <li
                    key={i}
                    className="bg-orange-300 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </main>

      {/* Modal */}
      {modalContent && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setModalContent(null)}
        >
          <div
            className="bg-white p-6 rounded-2xl max-w-lg w-full shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">{modalContent.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{modalContent.description}</p>
            <button
              className="mt-6 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              onClick={() => setModalContent(null)}
            >
              Schließen
            </button>
          </div>
        </div>
      )}

      {/* Floating contact buttons */}
      <FloatingContactBar />
    </div>
  );
};