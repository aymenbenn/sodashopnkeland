// src/pages/BlogPage.tsx
import React from 'react';
import { productCategories } from './SortimentPage'; // make sure this is exported from SortimentPage

export const BlogPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog & Rezepte</h1>

      {productCategories.map((cat) => (
        <div key={cat.title} className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">{cat.title}</h2>
          <p className="text-gray-700 whitespace-pre-line">{cat.blogText}</p>
        </div>
      ))}
    </div>
  );
};