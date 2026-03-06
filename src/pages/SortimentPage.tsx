import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InfoIcon, FileTextIcon, BookOpenIcon, BuildingIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

// Product categories
const productCategories = [
  {
    title: 'Wasser',
    subtitle: '5 Kategorien',
    items: ['Mineralwasser', 'Heilwasser', 'Tafelwasser', 'Aromatisiertes Wasser', 'Babywasser'],
    img: '/wasser.png',
    blogText: `Wasser erfrischend & vielfältig  
Durstlöschend, erfrischend oder einfach wohltuend – bei uns finden Sie genau das Richtige für Ihren Geschmack!
Unsere Eigenmarke Aqualina bietet frisches Gebirgswasser in bester Qualität – erhältlich in den Sorten still, medium und spritzig. Dank der praktischen PET-Flasche ist Aqualina der perfekte Begleiter für unterwegs. Ob im Büro, beim Sport oder auf Ausflügen, mit Aqualina haben Sie immer einen erfrischenden und zuverlässigen Durstlöscher zur Hand – und das zu einem besonders attraktiven Preis.`
  },
  {
    title: 'Bier',
    subtitle: '6 Kategorien',
    items: ['Pils', 'Weizen', 'Helles', 'Schwarzbier', 'Alkoholfreies Bier', 'Craft Beer'],
    img: '/beer.png',
    blogText: `Ein kühles Weizen, eine Breze und ein Brotzeitbrett, das passende Bier finden Sie garantiert in unseren Fristo Getränkemärkten.  
Die Liste unserer Biersorten und -lieferanten ist so lang und individuell, wie die Vorlieben unserer Kunden. Deshalb führen wir für Sie einfach alles, was das Herz des Bierliebhabers begehrt – mit und ohne Alkohol.
Unsere Eigenmarke Adelsdorfer stammt aus dem Herzen Frankens und steht für traditionell gebrautes Bier von höchster Qualität. Mit unserem Adelsdorfer Hell genießen Sie den authentischen Geschmack fränkischer Braukunst – vollmundig, ausgewogen und erfrischend. Qualität muss nicht teuer sein – überzeugen Sie sich selbst!`
  },
  {
    title: 'Fruchthaltige Getränke',
    subtitle: '5 Kategorien',
    items: ['Apfelsaft', 'Orangensaft', 'Multivitamin', 'Gemüsesäfte', 'Bio-Säfte'],
    img: '/fruchtsaft.jpeg',
    blogText: `Ein kühles Glas mit frischem Saft, garantiert finden Sie in einem unserer Fristo Märkte den richtigen.  
Der Vitamingehalt und der intensive Geschmack sind die besten Argumente für feine Fruchtsäfte. In unserem Getränkesortiment haben Sie die Wahl aus vielfältigen Fruchtsaftsorten mit unterschiedlich hohen Fruchtanteilen.  
Unsere Exklusivmarke Fruchtgarten steht für erlesene Säfte voller natürlicher Frische und intensivem Geschmack zu einem attraktiven Preis. Hergestellt aus sorgfältig ausgewählten Früchten, sind unsere Säfte eine gesunde Vitaminquelle und ideal für die tägliche Erfrischung.`
  },
  {
    title: 'Limonade & Cola',
    subtitle: '5 Kategorien',
    items: ['Cola & Cola-Mix', 'Orangenlimonade', 'Zitronenlimonade', 'Fassbrause', 'Energy Drinks'],
    img: '/limonade.png',
    blogText: `Eine Glas frische Limonade wird hier eingeschenkt, in unseren Fristo Märkten finden Sie sicher die passende Marke und tolle Angebote.  
Manchmal muss es einfach etwas mit Geschmack sein! Dafür bieten wir in unserem Getränkesortiment viele verschiedene Alternativen mit und ohne Zucker.  
Unsere Eigenmarke Vitaperle: Fruchtige Limonade, Apfelschorle, Iso-Power und Cola-Mix – erfrischend, spritzig und ideal für jeden Moment des Tages.`
  },
  {
    title: 'Wein & Sekt',
    subtitle: '5 Kategorien',
    items: ['Rotwein', 'Weißwein', 'Rosé', 'Sekt & Prosecco', 'Glühwein'],
    img: '/wein.jpg',
    blogText: `Ein feines Glas Rotwein, finden Sie garantiert den richtigen Tropfen in einem unserer Fristo Getränkemärkte.  
Ob Weißwein, Rotwein oder Roséwein – entdecken Sie bei uns eine vielfältige Auswahl an Qualitätsweinen für jeden Geschmack und Anlass. Viele unserer Weine stammen von regionalen Winzern, die mit Leidenschaft und handwerklichem Können arbeiten. Zusätzlich bieten wir eine Auswahl an Bio- und veganen Weinen sowie alkoholfreien Alternativen.`
  },
  {
    title: 'Spirituosen',
    subtitle: '6 Kategorien',
    items: ['Whisky', 'Gin', 'Wodka', 'Rum', 'Liköre', 'Kräuterschnaps'],
    img: '/spirituosen.jpg',
    blogText: `Spirituosen entdecken Sie bei FRISTO, darunter unsere exklusive Eigenmarke Ammersee Gin. Dieser hochwertige und zugleich preiswerte Gin besticht durch seinen einzigartigen Geschmack.  
Neben dem Ammersee Gin bieten wir eine Vielzahl weiterer edler Spirituosen, die jeden Anlass bereichern. Von feinen Whiskys über edle Brände bis hin zu exquisiten Likören. Lassen Sie sich von unseren sorgfältig ausgewählten Cocktailempfehlungen inspirieren.`
  }
];

export const SortimentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'brands'>('info');

  return (
    <div className="w-full pb-20">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-[#2d5a27] via-green-700 to-green-600 py-16 text-white text-center overflow-hidden">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unser Sortiment</h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto px-4">
            Frische und Vielfalt für Ihren Alltag. Entdecken Sie unsere Produkte, Rezepte und Partnermarken.
          </p>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('info')}
              className={`py-4 px-2 border-b-2 font-bold flex items-center whitespace-nowrap transition-colors ${
                activeTab === 'info' ? 'border-[#2d5a27] text-[#2d5a27]' : 'border-transparent text-gray-500 hover:text-green-700'
              }`}
            >
              <FileTextIcon className="w-4 h-4 mr-2" />
              Informationen
            </button>

            <Link
              to="/blog"
              className="py-4 px-2 border-b-2 font-bold flex items-center whitespace-nowrap text-gray-500 hover:text-green-700 transition-colors"
            >
              <BookOpenIcon className="w-4 h-4 mr-2" />
              Blog & Rezepte
            </Link>

            <button
              onClick={() => setActiveTab('brands')}
              className={`py-4 px-2 border-b-2 font-bold flex items-center whitespace-nowrap transition-colors ${
                activeTab === 'brands' ? 'border-[#2d5a27] text-[#2d5a27]' : 'border-transparent text-gray-500 hover:text-green-700'
              }`}
            >
              <BuildingIcon className="w-4 h-4 mr-2" />
              Unsere Marken
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Information Tab */}
        {activeTab === 'info' && (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((cat) => (
              <motion.div key={cat.title} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col">
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
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/marktfinder" className="mt-auto inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-center">
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
              <p className="text-gray-600">Frisches Gebirgswasser in bester Qualität – erhältlich in still, medium und spritzig.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <img src="/adelsdorfer.png" className="h-20 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Adelsdorfer</h3>
              <p className="text-gray-600">Traditionell gebrautes Bier von höchster Qualität – vollmundig, ausgewogen und erfrischend.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <img src="/fruchtgarten.png" className="h-20 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Fruchtgarten</h3>
              <p className="text-gray-600">Erlesene Säfte voller natürlicher Frische und intensivem Geschmack zu einem attraktiven Preis.</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};