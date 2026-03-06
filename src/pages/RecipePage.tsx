import React from 'react';

export const RecipesPage: React.FC = () => {
  const recipes = [
    { title: 'Apfelkuchen', desc: 'Leckerer deutscher Apfelkuchen', img: '/images/apfelkuchen.png' },
    { title: 'Radler-Cocktail', desc: 'Erfrischender Sommerdrink', img: '/images/radler-cocktail.png' },
    { title: 'Weinschorle', desc: 'Weinschorle mit frischen Früchten', img: '/images/weinschorle-recipe.png' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-[#2d5a27] mb-8 text-center">Rezepte</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-white rounded-2xl shadow p-6 flex flex-col">
            <div className="h-48 w-full mb-4 overflow-hidden rounded-xl">
              <img src={recipe.img} alt={recipe.title} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 flex-grow">{recipe.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};