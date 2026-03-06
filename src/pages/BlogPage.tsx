// src/pages/BlogPage.tsx
import React, { useState } from 'react';
import { FloatingContactBar } from '../components/ContactIconButtons';
import { productCategories } from '../data/productCategories';
import { AnimatedBubbles } from '../components/AnimatedBubbles';


      <section className="relative max-w-7xl mx-auto px-4 py-16 overflow-hidden">
        <AnimatedBubbles /> {/* Reuse HomePage bubbles */}
        <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center z-10 relative">Unsere Top-Rezepte</h2>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4 z-10 relative">
          {topCards.map((card) => (
            <div
              key={card.title}
              onClick={() => setModalContent(card)}
              className="cursor-pointer min-w-[250px] flex-shrink-0 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-40 w-full relative rounded-t-2xl overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#FF7F50] mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Blog Section */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-16 space-y-24 relative">
        <h1 className="text-5xl font-extrabold mb-16 text-center text-gray-900">Blog & Rezepte</h1>

        {productCategories.map((cat, index) => (
          <div
            key={cat.title}
            className={`flex flex-col md:flex-row items-center md:items-stretch rounded-3xl shadow-xl overflow-hidden border border-orange-100 hover:border-orange-400 transition-all duration-300 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } bg-white`}
          >
            {/* Image */}
            <div
              className="md:w-1/2 h-64 md:h-auto relative flex-shrink-0 cursor-pointer"
              onClick={() => setModalContent({ title: cat.title, description: cat.blogText })}
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
              {/* Orange gradient overlay like HomePage */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF7F50]/40 via-orange-400/20 to-transparent rounded-3xl"></div>
            </div>

            {/* Text */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center bg-orange-50">
              <h2 className="text-3xl font-bold text-[#FF7F50] mb-4">{cat.title}</h2>
              <span className="text-lg font-medium text-orange-600 mb-6">{cat.subtitle}</span>
              <p className="text-gray-800 whitespace-pre-line mb-6">{cat.blogText}</p>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <li
                    key={i}
                    className="bg-[#FF7F50] text-white px-3 py-1 rounded-full text-sm font-semibold"
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
            className="bg-white p-6 rounded-2xl max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">{modalContent.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{modalContent.description}</p>
            <button
              className="mt-6 bg-[#FF7F50] text-white px-4 py-2 rounded hover:bg-orange-600"
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