import React from 'react';
import {
  TagIcon,
  DownloadIcon,
  ShoppingCartIcon,
  FileTextIcon,
  ArrowRightIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedBubbles } from '../components/AnimatedBubbles';
export function AngebotePage() {
  return (
    <div className="w-full pb-20">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-[#2d5a27] via-green-700 to-green-600 py-16 text-white text-center overflow-hidden">
        <AnimatedBubbles />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aktuelle Angebote
          </h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto px-4">
            Entdecken Sie unsere wöchentlichen Highlights und sparen Sie bei
            Ihrem nächsten Einkauf.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Section 1: Prospekt */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <FileTextIcon className="w-8 h-8 text-[#2d5a27] mr-3" />
            <h2 className="text-3xl font-bold text-[#2d5a27]">
              Aktueller Prospekt
            </h2>
          </div>
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-slate-100 p-8 flex items-center justify-center border-r border-gray-100">
              <div className="w-48 h-64 bg-white shadow-md border border-gray-200 rounded flex flex-col items-center justify-center text-gray-400 relative overflow-hidden">
                <div className="absolute top-0 w-full bg-red-600 text-white text-xs font-bold text-center py-1 z-10">
                  Gültig bis 15.08.
                </div>
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Prospekt Vorschau"
                  className="absolute inset-0 w-full h-full object-cover opacity-80" />

                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center">
                  <FileTextIcon className="w-12 h-12 mb-2 text-white" />
                  <span className="font-medium text-white shadow-sm">
                    Vorschau
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#2d5a27] mb-2">
                Wochenangebote entdecken
              </h3>
              <p className="text-gray-600 mb-6">
                Gültig von Montag, 09.08. bis Samstag, 15.08.
              </p>
              <p className="text-gray-600 mb-8 max-w-lg">
                Blättern Sie durch unseren aktuellen Prospekt und entdecken Sie
                alle Angebote der Woche bequem von zu Hause aus.
              </p>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-[#2d5a27] text-white font-bold rounded-xl hover:bg-green-800 transition-colors shadow-md w-max">
                <DownloadIcon className="w-5 h-5 mr-2" />
                Prospekt herunterladen (PDF)
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: Highlights */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <TagIcon className="w-8 h-8 text-[#2d5a27] mr-3" />
            <h2 className="text-3xl font-bold text-[#2d5a27]">
              Highlights der Woche
            </h2>
          </div>
          {/* Top Deal */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100 mb-8 relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-2 rounded-bl-2xl font-bold z-10 shadow-md">
              Gültig bis Samstag
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <TagIcon className="w-6 h-6 text-green-600 mr-2" />
                  <span className="text-green-600 font-bold uppercase tracking-wider text-sm">
                    Top Deal der Woche
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#2d5a27] mb-4">
                  Frische-Aktion: Regionales Gemüse
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Beim Kauf von regionalem Gemüse ab 15€ erhalten Sie eine
                  praktische Baumwolltasche{' '}
                  <strong className="text-green-600">GRATIS</strong> dazu!
                  Perfekt für Ihren nächsten Einkauf.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 flex items-center justify-center px-6 py-3 bg-[#2d5a27] text-white font-bold rounded-xl hover:bg-green-800 transition-colors shadow-md">
                    <ShoppingCartIcon className="w-5 h-5 mr-2" />
                    Jetzt im Markt finden
                  </button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto bg-green-50 order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Gemüse Angebot"
                  className="absolute inset-0 w-full h-full object-cover" />

              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offer 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-3 py-1 rounded-full z-10">
                -20%
              </div>
              <div className="text-6xl text-center mb-6 mt-4 transform group-hover:scale-110 transition-transform">
                🍎
              </div>
              <h4 className="text-xl font-bold text-[#2d5a27] mb-2 text-center">
                Äpfel aus der Region
              </h4>
              <p className="text-gray-500 text-center mb-6">2kg Netz</p>
              <div className="flex justify-center items-end gap-3">
                <span className="text-gray-400 line-through text-lg">
                  Statt 3.99 €
                </span>
                <span className="text-3xl font-bold text-green-600">
                  2.99 €
                </span>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-3 py-1 rounded-full z-10">
                -15%
              </div>
              <div className="text-6xl text-center mb-6 mt-4 transform group-hover:scale-110 transition-transform">
                🥛
              </div>
              <h4 className="text-xl font-bold text-[#2d5a27] mb-2 text-center">
                Frische Vollmilch
              </h4>
              <p className="text-gray-500 text-center mb-6">
                1 Liter, 3.5% Fett
              </p>
              <div className="flex justify-center items-end gap-3">
                <span className="text-gray-400 line-through text-lg">
                  Statt 1.49 €
                </span>
                <span className="text-3xl font-bold text-green-600">
                  1.19 €
                </span>
              </div>
            </div>

            {/* Offer 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-3 py-1 rounded-full z-10">
                -25%
              </div>
              <div className="text-6xl text-center mb-6 mt-4 transform group-hover:scale-110 transition-transform">
                🍞
              </div>
              <h4 className="text-xl font-bold text-[#2d5a27] mb-2 text-center">
                Bauernbrot
              </h4>
              <p className="text-gray-500 text-center mb-6">500g Laib</p>
              <div className="flex justify-center items-end gap-3">
                <span className="text-gray-400 line-through text-lg">
                  Statt 2.99 €
                </span>
                <span className="text-3xl font-bold text-green-600">
                  2.22 €
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Produktpalette */}
        <div>
          <h2 className="text-3xl font-bold text-[#2d5a27] mb-6">
            Unsere Produktpalette
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link
              to="/sortiment"
              className="group block h-32 rounded-xl overflow-hidden relative shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">

              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                <span className="font-bold text-lg">Obst & Gemüse</span>
                <ArrowRightIcon className="w-4 h-4 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" />
              </div>
            </Link>
            <Link
              to="/sortiment"
              className="group block h-32 rounded-xl overflow-hidden relative shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">

              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                <span className="font-bold text-lg">Backwaren</span>
                <ArrowRightIcon className="w-4 h-4 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" />
              </div>
            </Link>
            <Link
              to="/sortiment"
              className="group block h-32 rounded-xl overflow-hidden relative shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">

              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                <span className="font-bold text-lg">Molkerei</span>
                <ArrowRightIcon className="w-4 h-4 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" />
              </div>
            </Link>
            <Link
              to="/sortiment"
              className="group block h-32 rounded-xl overflow-hidden relative shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">

              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                <span className="font-bold text-lg">Fleisch</span>
                <ArrowRightIcon className="w-4 h-4 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" />
              </div>
            </Link>
            <Link
              to="/sortiment"
              className="group block h-32 rounded-xl overflow-hidden relative shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">

              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-yellow-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                <span className="font-bold text-lg">Getränke</span>
                <ArrowRightIcon className="w-4 h-4 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" />
              </div>
            </Link>
            <Link
              to="/sortiment"
              className="group block h-32 rounded-xl overflow-hidden relative shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">

              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                <span className="font-bold text-lg">Drogerie</span>
                <ArrowRightIcon className="w-4 h-4 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>);

}