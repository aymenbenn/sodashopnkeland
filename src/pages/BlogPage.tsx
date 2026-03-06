// src/pages/BlogPage.tsx
import React from 'react';

import { FloatingContactBar } from '../components/ContactIconButtons';
import { productCategories } from '../data/productCategories'; // import data

export const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog & Rezepte</h1>

        {productCategories.map((cat) => (
          <div key={cat.title} className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">{cat.title}</h2>
            <p className="text-gray-700 whitespace-pre-line">{cat.blogText}</p>
          </div>
        ))}
      </main>

      <Footer />
      <FloatingContactBar />
    </div>
  );
};