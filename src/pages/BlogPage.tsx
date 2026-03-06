// src/pages/BlogPage.tsx
import React from 'react';
import { FloatingContactBar } from '../components/ContactIconButtons';
import { productCategories } from '../data/productCategories';

export const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow max-w-7xl mx-auto px-4 py-16 space-y-24">
        <h1 className="text-5xl font-extrabold mb-16 text-center text-gray-800">
          Blog & Rezepte
        </h1>

        {productCategories.map((cat, index) => (
          <div
            key={cat.title}
            className={`flex flex-col md:flex-row items-center md:items-stretch ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } bg-white rounded-3xl shadow-lg overflow-hidden`}
          >
            {/* Image */}
            <div className="md:w-1/2 h-64 md:h-auto relative flex-shrink-0">
              <img
                src={cat.img}
                alt={cat.title}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center bg-orange-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{cat.title}</h2>
              <span className="text-lg font-medium text-gray-700 mb-6">{cat.subtitle}</span>
              <p className="text-gray-800 whitespace-pre-line mb-6">{cat.blogText}</p>

              {/* Optional items list */}
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

      {/* Floating contact buttons */}
      <FloatingContactBar />
    </div>
  );
};