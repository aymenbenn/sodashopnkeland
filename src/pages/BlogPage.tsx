// src/pages/BlogPage.tsx
import React from 'react';
import { FloatingContactBar } from '../components/ContactIconButtons';
import { productCategories } from '../data/productCategories';

export const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Blog & Rezepte
        </h1>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transform transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 w-full relative">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-bold">{cat.title}</h2>
                  <span className="text-sm opacity-90">{cat.subtitle}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-700 whitespace-pre-line flex-grow">
                  {cat.blogText}
                </p>

                {/* Optional: highlight items */}
                <ul className="mt-4 space-y-1 text-gray-600">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating contact buttons */}
      <FloatingContactBar />
    </div>
  );
};