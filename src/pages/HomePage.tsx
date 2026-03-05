import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Star, ShoppingBag, Users, Store } from 'lucide-react';
import { AnimatedBubbles } from '../components/AnimatedBubbles';

export function HomePage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white overflow-hidden py-20 md:py-28">
        <AnimatedBubbles className="animate-faster" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight">
                Willkommen im <br />
                <span className="text-navy-900 bg-white/90 px-4 py-1 rounded-lg inline-block transform -rotate-2 mt-2 shadow-lg">
                  GetränkeLAND
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-orange-50 font-medium max-w-lg leading-relaxed">
                Ihr regionaler Experte für erfrischende Vielfalt. Entdecken Sie
                unser großes Sortiment in 39 Filialen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-orange-600 bg-white hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Markt finden
                </Link>

                <Link
                  to="/angebote"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white border-2 border-white/80 hover:bg-white/10 transition-all bg-[#FFA200]"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Aktuelle Angebote
                </Link>
              </div>

              {/* Recipes & Trends */}
              <div className="pt-6">
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-green-600 hover:bg-green-500 shadow-lg hover:shadow-xl transition-all"
                >
                  Rezepte & Trends entdecken
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-orange-200 rounded-full filter blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
              <div className="relative rounded-2xl overflow-hidden border-8 border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/gpt-image-1.5-high-fidelity_a_make_a_me_shop_drink.png"
                  alt="GetränkeLAND Filiale"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-white fill-current">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            {[
              { number: '39', label: 'Filialen', icon: Store },
              { number: '30+', label: 'Jahre Erfahrung', icon: Star },
              { number: '2000+', label: 'Artikel', icon: ShoppingBag },
              { number: '10k+', label: 'Zufriedene Kunden', icon: Users },
            ].map((stat, idx) => (
              <div key={idx} className="p-4 group hover:bg-orange-50/50 rounded-xl transition-colors">
                <div className="text-4xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-navy-900 font-medium text-lg flex items-center justify-center gap-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Highlight */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50 relative overflow-hidden">
        <AnimatedBubbles className="animate-faster" />
        {/* Deal highlight content remains here */}
      </section>

      {/* Sortiment Preview */}
      {/* Your code here */}

      {/* About Teaser */}
      {/* Your code here */}

    </main>
  );
}